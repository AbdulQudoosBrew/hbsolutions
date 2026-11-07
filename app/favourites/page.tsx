"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  clearFavourites,
  removeFavourite,
} from "@/lib/store/slices/favouritesSlice";

export default function FavouritesPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.favourites.items);

  return (
    <>
      <Header />
      <main className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
        <Container
          size="wide"
          className="px-4 pb-16 pt-6 sm:px-6 md:px-8 md:pb-20 md:pt-8"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.28em] text-[#888888] sm:text-[11px] sm:tracking-[0.35em]">
            Saved products
          </p>
          <h1 className="mt-2 text-center text-[1.5rem] font-medium uppercase tracking-[0.12em] text-[#000000] sm:text-3xl sm:tracking-[0.16em]">
            Favourites
          </h1>

          {items.length === 0 ? (
            <div className="mx-auto mt-12 max-w-lg text-center">
              <p className="text-sm leading-7 text-[#666666]">
                You have no saved favourites yet. Use the heart on a product to
                keep it here.
              </p>
              <Link
                href="/#products"
                className="mt-8 inline-flex h-11 items-center justify-center bg-[#111111] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:bg-[#000000]"
              >
                Browse products
              </Link>
            </div>
          ) : (
            <div className="mx-auto mt-10 max-w-4xl">
              <ul className="divide-y divide-[#eeeeee] border-y border-[#eeeeee]">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-[72px_1fr] gap-4 py-5 sm:grid-cols-[96px_1fr_auto] sm:items-center sm:gap-6"
                  >
                    <Link
                      href={item.href}
                      className="relative aspect-square overflow-hidden border border-[#e5e5e5] bg-white"
                    >
                      <CategoryImage
                        src={item.image}
                        alt={item.title}
                        variant="card"
                      />
                    </Link>
                    <div>
                      <Link
                        href={item.href}
                        className="text-sm uppercase tracking-[0.08em] text-[#111111] hover:underline"
                      >
                        {item.title}
                      </Link>
                      {item.price ? (
                        <p className="mt-1 text-xs text-[#888888]">{item.price}</p>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(removeFavourite(item.id))}
                      className="col-span-2 text-right text-[10px] uppercase tracking-[0.16em] text-[#888888] hover:text-[#111111] sm:col-span-1"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => dispatch(clearFavourites())}
                  className="inline-flex h-11 items-center justify-center border border-[#111111] px-6 text-[11px] uppercase tracking-[0.22em] text-[#111111] hover:bg-[#111111] hover:text-white"
                >
                  Clear favourites
                </button>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
