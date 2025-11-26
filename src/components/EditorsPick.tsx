import React from "react";
import Image from "next/image";
import Link from "next/link";

const EditorsPick = () => {
  return (
    <section className="bg-gradient-to-b from-[#f3f7fb] via-[#eef7f3] to-[#f9f5f0] py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold bg-[#0b7b69]/10 text-[#0b7b69] uppercase tracking-[0.22em]">
            Curated for you
          </span>
          <h2 className="text-4xl font-semibold text-[#0f172a] tracking-tight">
            EDITOR&apos;S PICK
          </h2>
          <p className="text-gray-600 text-lg">Mix elevated staples with playful color hits.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto lg:h-[600px]">
          {/* Men - Large Item */}
          <Link
            href="/shop?category=men"
            className="relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              src="/men-image-clean.png"
              alt="Men"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-8 left-8 glass-card px-10 py-4 rounded-lg">
              <span className="text-xl font-semibold uppercase text-[#0f172a] tracking-[0.35em]">
                Men
              </span>
            </div>
          </Link>

          {/* Women - Medium Item */}
          <Link
            href="/shop?category=women"
            className="relative col-span-1 md:col-span-1 lg:col-span-1 row-span-2 group overflow-hidden rounded-2xl shadow-xl"
          >
            <Image
              src="/women-image-clean.png"
              alt="Women"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="absolute bottom-8 left-8 glass-card px-8 py-3 rounded-lg">
              <span className="text-lg font-semibold uppercase text-[#0f172a] tracking-[0.35em]">
                Women
              </span>
            </div>
          </Link>

          {/* Accessories & Kids - Stacked Items */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 flex flex-col gap-8 h-full">
            <Link
              href="/shop?category=accessories"
              className="relative flex-1 group overflow-hidden rounded-2xl shadow-xl min-h-[240px]"
            >
              <Image
                src="/accessories-image-clean.png"
                alt="Accessories"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 glass-card px-7 py-3 rounded-lg">
                <span className="text-lg font-semibold uppercase text-[#0f172a] tracking-[0.35em]">
                  Accessories
                </span>
              </div>
            </Link>

            <Link
              href="/shop?category=kids"
              className="relative flex-1 group overflow-hidden rounded-2xl shadow-xl min-h-[240px]"
            >
              <Image
                src="/kids-image-clean-v2.png"
                alt="Kids"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-6 left-6 glass-card px-7 py-3 rounded-lg">
                <span className="text-lg font-semibold uppercase text-[#0f172a] tracking-[0.35em]">
                  Kids
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
