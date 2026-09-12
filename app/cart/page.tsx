"use client";

import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CategoryImage from "@/components/ui/CategoryImage";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  cartTotal,
  clearCart,
  formatCartMoney,
  removeFromCart,
  setCartQty,
} from "@/lib/store/slices/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const total = cartTotal(items);

  const checkoutHref =
    items.length === 0
      ? "/#contact"
      : `/?enquiry=${encodeURIComponent(
          [
            "I would like to order the following Available on Delivery items:",
            "",
            ...items.map(
              (item) =>
                `${item.qty} x ${item.title}${item.price ? ` (${item.price} each)` : ""} — ${item.href}`,
            ),
            "",
            `Total: ${formatCartMoney(total)}`,
          ].join("\n"),
        )}#contact`;

  return (
    <>
      <Header />
      <main className="bg-white pt-[96px] sm:pt-[104px] lg:pt-[120px]">
        <Container
          size="wide"
          className="px-4 pb-16 pt-6 sm:px-6 md:px-8 md:pb-20 md:pt-8"
        >
          <p className="text-center text-[10px] uppercase tracking-[0.28em] text-[#888888] sm:text-[11px] sm:tracking-[0.35em]">
            Available on Delivery
          </p>
          <h1 className="mt-2 text-center text-[1.5rem] font-medium uppercase tracking-[0.12em] text-[#000000] sm:text-3xl sm:tracking-[0.16em]">
            Your Basket
          </h1>

          {items.length === 0 ? (
            <div className="mx-auto mt-12 max-w-lg text-center">
              <p className="text-sm leading-7 text-[#666666]">
                Your basket is empty. Add products from Available on Delivery to
                place an online order.
              </p>
              <Link
                href="/available-on-delivery"
                className="mt-8 inline-flex h-11 items-center justify-center bg-[#111111] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:bg-[#000000]"
              >
                Shop now
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
                      <p className="mt-1 text-xs text-[#888888]">
                        {item.price || "Price on request"}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <label className="text-[10px] uppercase tracking-[0.16em] text-[#888888]">
                          Qty
                          <input
                            type="number"
                            min={1}
                            value={item.qty}
                            onChange={(event) =>
                              dispatch(
                                setCartQty({
                                  id: item.id,
                                  qty: Number(event.target.value) || 1,
                                }),
                              )
                            }
                            className="ml-2 w-16 border border-[#e5e5e5] px-2 py-1 text-sm text-[#111111]"
                          />
                        </label>
                        <button
                          type="button"
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-[10px] uppercase tracking-[0.16em] text-[#888888] hover:text-[#111111]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p className="col-span-2 text-right text-sm text-[#111111] sm:col-span-1">
                      {item.unitAmount
                        ? formatCartMoney(item.unitAmount * item.qty)
                        : "—"}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col items-end gap-4">
                <p className="text-base uppercase tracking-[0.12em] text-[#111111]">
                  Total {formatCartMoney(total)}
                </p>
                <div className="flex flex-wrap justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => dispatch(clearCart())}
                    className="inline-flex h-11 items-center justify-center border border-[#111111] px-6 text-[11px] uppercase tracking-[0.22em] text-[#111111] hover:bg-[#111111] hover:text-white"
                  >
                    Clear basket
                  </button>
                  <Link
                    href={checkoutHref}
                    className="inline-flex h-11 items-center justify-center bg-[#111111] px-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white hover:bg-[#000000]"
                  >
                    Checkout
                  </Link>
                </div>
                <p className="max-w-md text-right text-xs leading-5 text-[#999999]">
                  Checkout sends your basket as an order enquiry. We’ll confirm
                  stock, delivery and payment.
                </p>
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
