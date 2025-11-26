'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";

const HeaderWrapper = () => {
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useMemo(
    () => [
      { title: "Vita Classic Tee", price: "$24.00", image: "/Bestseller/p1.jpg" },
      { title: "Neural Knit Crew", price: "$38.00", image: "/Bestseller/p2.jpg" },
    ],
    []
  );

  return (
    <>
      <Header onCartClick={() => setCartOpen(true)} cartCount={cartItems.length} />

      {/* Cart drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setCartOpen(false)}
          aria-hidden="true"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 flex flex-col ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#0b7b69] font-semibold">Cart</p>
              <h2 className="text-xl font-semibold text-[#0f172a]">Your picks</h2>
            </div>
            <button
              aria-label="Close cart"
              onClick={() => setCartOpen(false)}
              className="text-gray-500 hover:text-[#0f172a] transition-colors"
            >
              <i className="fas fa-times text-lg" />
            </button>
          </div>

          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            {cartItems.map((item) => (
              <div key={item.title} className="flex gap-4 items-center border border-gray-100 rounded-xl p-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[#f5f7fb]">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#0f172a] line-clamp-1">{item.title}</p>
                  <p className="text-sm text-[#0b7b69] font-semibold">{item.price}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Remove">
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            ))}
            {cartItems.length === 0 && <p className="text-gray-500 text-sm">Your cart is empty.</p>}
          </div>

          <div className="p-6 border-t border-gray-200 space-y-3">
            <div className="flex justify-between text-sm font-semibold text-[#0f172a]">
              <span>Subtotal</span>
              <span>$62.00</span>
            </div>
            <Link
              href="/cart"
              onClick={() => setCartOpen(false)}
              className="block text-center bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] text-white font-semibold text-sm uppercase py-3 rounded-full shadow-[0_12px_32px_rgba(15,123,105,0.25)] hover:brightness-110 transition"
            >
              Go to cart
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(false)}
              className="w-full text-center bg-white border border-[#0b7b69]/30 text-[#0b7b69] font-semibold text-sm uppercase py-3 rounded-full hover:bg-[#0b7b69]/10 transition"
            >
              Continue shopping
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

export default HeaderWrapper;
