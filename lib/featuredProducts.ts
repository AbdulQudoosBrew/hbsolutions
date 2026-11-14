import { del, list, put } from "@vercel/blob";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import path from "path";

export type FeaturedProduct = {
  id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "featured-products.json");
const IMAGE_DIR = path.join(process.cwd(), "public", "featured");
const CATALOG_PATH = "featured/catalog.json";

function blobEnabled() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function requireWritable() {
  if (process.env.VERCEL && !blobEnabled()) {
    throw new Error(
      "Featured products cannot be changed on Vercel without Blob storage. In the Vercel project, open Storage, create a Blob store, connect it to this project, then redeploy.",
    );
  }
}

async function writeDiskCatalog(items: FeaturedProduct[]) {
  try {
    await mkdir(path.dirname(DATA_FILE), { recursive: true });
    await mkdir(IMAGE_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
  } catch {
    throw new Error(
      "Featured products could not be saved on disk. Check that the data folder is writable.",
    );
  }
}

async function readDiskCatalog(): Promise<FeaturedProduct[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as FeaturedProduct[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function readBlobCatalog(): Promise<FeaturedProduct[] | null> {
  const result = await list({ prefix: CATALOG_PATH, limit: 20 });
  const catalog = result.blobs.find(
    (blob) =>
      blob.pathname === CATALOG_PATH || blob.pathname.startsWith(CATALOG_PATH),
  );
  if (!catalog) return null;

  const response = await fetch(catalog.url, { cache: "no-store" });
  if (!response.ok) return null;

  const parsed = (await response.json()) as FeaturedProduct[];
  return Array.isArray(parsed) ? parsed : [];
}

async function writeBlobCatalog(items: FeaturedProduct[]) {
  await put(CATALOG_PATH, JSON.stringify(items, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 0,
  });
}

export async function ensureFeaturedDirs() {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await mkdir(IMAGE_DIR, { recursive: true });
}

export async function getFeaturedProducts(): Promise<FeaturedProduct[]> {
  if (blobEnabled()) {
    const fromBlob = await readBlobCatalog();
    if (fromBlob) return fromBlob;
  }
  return readDiskCatalog();
}

export async function saveFeaturedProducts(items: FeaturedProduct[]) {
  requireWritable();
  if (blobEnabled()) {
    await writeBlobCatalog(items);
    return;
  }
  await writeDiskCatalog(items);
}

export async function addFeaturedProduct(input: {
  title: string;
  description: string;
  fileName: string;
  bytes: Buffer;
}): Promise<FeaturedProduct> {
  requireWritable();

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const ext = path.extname(input.fileName).toLowerCase() || ".jpg";
  const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)
    ? ext
    : ".jpg";
  const storedName = `${id}${safeExt}`;

  let image = `/featured/${storedName}`;

  if (blobEnabled()) {
    const uploaded = await put(`featured/${storedName}`, input.bytes, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: `image/${safeExt === ".jpg" ? "jpeg" : safeExt.slice(1)}`,
    });
    image = uploaded.url;
  } else {
    try {
      await ensureFeaturedDirs();
      await writeFile(path.join(IMAGE_DIR, storedName), input.bytes);
    } catch {
      throw new Error("Featured product images could not be saved on disk.");
    }
  }

  const item: FeaturedProduct = {
    id,
    title: input.title,
    description: input.description,
    image,
    createdAt: new Date().toISOString(),
  };

  const items = await getFeaturedProducts();
  items.unshift(item);
  await saveFeaturedProducts(items);
  return item;
}

export async function deleteFeaturedProduct(id: string): Promise<boolean> {
  requireWritable();

  const items = await getFeaturedProducts();
  const item = items.find((entry) => entry.id === id);
  if (!item) return false;

  const next = items.filter((entry) => entry.id !== id);
  await saveFeaturedProducts(next);

  if (item.image.startsWith("http")) {
    try {
      await del(item.image);
    } catch {
      // Image may already be missing.
    }
  } else {
    const fileName = path.basename(item.image);
    if (fileName) {
      try {
        await unlink(path.join(IMAGE_DIR, fileName));
      } catch {
        // Image may already be missing.
      }
    }
  }

  return true;
}
