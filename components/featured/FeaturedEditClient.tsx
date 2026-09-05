"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FeaturedProduct } from "@/lib/featuredProducts";
import CategoryImage from "@/components/ui/CategoryImage";

interface FeaturedEditClientProps {
  items: FeaturedProduct[];
}

export default function FeaturedEditClient({ items }: FeaturedEditClientProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    setBusy(true);

    try {
      const body = new FormData();
      body.set("title", title);
      body.set("description", description);
      if (image) body.set("image", image);

      const response = await fetch("/api/featured", {
        method: "POST",
        body,
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Could not save product.");
      }

      setTitle("");
      setDescription("");
      setImage(null);
      setOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not save product.");
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Remove this featured product?")) return;
    setBusy(true);
    try {
      const response = await fetch(`/api/featured/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Could not delete.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not delete.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <div className="mb-8 flex justify-center sm:mb-10">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="border border-[#111111] bg-[#111111] px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#111111]"
        >
          {open ? "Cancel" : "Add featured product"}
        </button>
      </div>

      {open ? (
        <form
          onSubmit={onSubmit}
          className="mx-auto mb-12 max-w-xl space-y-4 border border-[#e5e5e5] bg-white p-5 sm:p-6"
        >
          <label className="block text-[11px] uppercase tracking-[0.18em] text-[#666666]">
            Title
            <input
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-2 w-full border border-[#e5e5e5] px-3 py-2 text-sm tracking-normal text-[#111111] outline-none focus:border-[#111111]"
            />
          </label>
          <label className="block text-[11px] uppercase tracking-[0.18em] text-[#666666]">
            Description
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              className="mt-2 w-full border border-[#e5e5e5] px-3 py-2 text-sm tracking-normal text-[#111111] outline-none focus:border-[#111111]"
            />
          </label>
          <label className="block text-[11px] uppercase tracking-[0.18em] text-[#666666]">
            Image
            <input
              required
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={(event) => setImage(event.target.files?.[0] ?? null)}
              className="mt-2 w-full text-sm tracking-normal text-[#111111]"
            />
          </label>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="border border-[#111111] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111] hover:bg-[#111111] hover:text-white disabled:opacity-50"
          >
            {busy ? "Saving…" : "Save product"}
          </button>
        </form>
      ) : null}

      {error && !open ? (
        <p className="mb-6 text-center text-sm text-red-600">{error}</p>
      ) : null}

      {items.length ? (
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-[#e5e5e5] bg-white">
                <CategoryImage
                  src={item.image}
                  alt={item.title}
                  variant="card"
                />
              </div>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#333333]">
                {item.title}
              </p>
              <button
                type="button"
                disabled={busy}
                onClick={() => onDelete(item.id)}
                className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#999999] hover:text-[#111111]"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-[#888888]">
          No featured products yet. Use the button above to add one.
        </p>
      )}
    </div>
  );
}
