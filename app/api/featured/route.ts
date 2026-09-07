import {
  addFeaturedProduct,
  getFeaturedProducts,
} from "@/lib/featuredProducts";

export const dynamic = "force-dynamic";

export async function GET() {
  const items = await getFeaturedProducts();
  return Response.json({ items });
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const title = String(form.get("title") ?? "").trim();
    const description = String(form.get("description") ?? "").trim();
    const image = form.get("image");

    if (!title) {
      return Response.json({ error: "Title is required." }, { status: 400 });
    }

    if (!(image instanceof File) || image.size === 0) {
      return Response.json({ error: "An image is required." }, { status: 400 });
    }

    if (image.size > 8 * 1024 * 1024) {
      return Response.json(
        { error: "Image must be 8MB or smaller." },
        { status: 400 },
      );
    }

    const bytes = Buffer.from(await image.arrayBuffer());
    const item = await addFeaturedProduct({
      title,
      description,
      fileName: image.name,
      bytes,
    });

    return Response.json({ item });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not save product.";
    return Response.json({ error: message }, { status: 500 });
  }
}
