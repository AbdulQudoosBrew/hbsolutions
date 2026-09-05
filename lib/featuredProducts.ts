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

export async function ensureFeaturedDirs() {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await mkdir(IMAGE_DIR, { recursive: true });
}

export async function getFeaturedProducts(): Promise<FeaturedProduct[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as FeaturedProduct[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveFeaturedProducts(items: FeaturedProduct[]) {
  await ensureFeaturedDirs();
  await writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

export async function addFeaturedProduct(input: {
  title: string;
  description: string;
  fileName: string;
  bytes: Buffer;
}): Promise<FeaturedProduct> {
  await ensureFeaturedDirs();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const ext = path.extname(input.fileName).toLowerCase() || ".jpg";
  const safeExt = [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(ext)
    ? ext
    : ".jpg";
  const storedName = `${id}${safeExt}`;
  await writeFile(path.join(IMAGE_DIR, storedName), input.bytes);

  const item: FeaturedProduct = {
    id,
    title: input.title,
    description: input.description,
    image: `/featured/${storedName}`,
    createdAt: new Date().toISOString(),
  };

  const items = await getFeaturedProducts();
  items.unshift(item);
  await saveFeaturedProducts(items);
  return item;
}

export async function deleteFeaturedProduct(id: string): Promise<boolean> {
  const items = await getFeaturedProducts();
  const item = items.find((entry) => entry.id === id);
  if (!item) return false;

  const next = items.filter((entry) => entry.id !== id);
  await saveFeaturedProducts(next);

  const fileName = path.basename(item.image);
  if (fileName) {
    try {
      await unlink(path.join(IMAGE_DIR, fileName));
    } catch {
      // Image may already be missing.
    }
  }

  return true;
}
