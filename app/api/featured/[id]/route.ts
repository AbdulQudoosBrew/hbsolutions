import { deleteFeaturedProduct } from "@/lib/featuredProducts";

export const dynamic = "force-dynamic";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const removed = await deleteFeaturedProduct(id);
    if (!removed) {
      return Response.json({ error: "Not found." }, { status: 404 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not delete.";
    return Response.json({ error: message }, { status: 500 });
  }
}
