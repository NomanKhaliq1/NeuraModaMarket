'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";

type HeaderProps = {
  onCartClick?: () => void;
  cartCount?: number;
};

const Header = ({ onCartClick, cartCount = 1 }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[#0f172a] text-white text-xs md:text-sm py-3">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-3">
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-4 font-semibold">
            <span className="inline-flex items-center gap-2">
              <i className="fas fa-phone-alt text-[#0fb398]" />
              (225) 555-0118
            </span>
            <span className="hidden sm:inline-flex items-center gap-2">
              <i className="fas fa-envelope text-[#0fb398]" />
              michelle.rivera@example.com
            </span>
          </div>

          <div className="text-center font-semibold hidden md:block">
            Follow us and get a chance to win 80% off
          </div>

          <div className="flex items-center gap-3 font-semibold">
            <span className="hidden md:inline text-[#b9f3e5] uppercase tracking-[0.25em] text-[10px]">Follow</span>
            <div className="flex items-center gap-3">
              {["instagram", "youtube", "facebook", "twitter"].map((icon) => (
                <a key={icon} href="#" aria-label={icon} className="hover:text-[#0fb398] transition-colors">
                  <i className={`fab fa-${icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white/90 backdrop-blur shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-6 py-4 gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">NeuraModa</p>
              <p className="text-xl font-semibold text-[#0f172a]">Market</p>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-semibold text-gray-600">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/pages", label: "Pages" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative inline-block py-1 transition-colors hover:text-[#0b7b69] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5 text-[#0b7b69] font-semibold">
            <Link href="/login" className="hidden md:flex items-center gap-2 hover:text-[#0f172a] transition-colors">
              <i className="fa-regular fa-user text-gray-500" /> <span>Login / Register</span>
            </Link>
            <Link href="/search" aria-label="Search" className="hover:text-[#0f172a] transition-colors">
              <i className="fas fa-search" />
            </Link>
            <button
              type="button"
              aria-label="Cart"
              onClick={onCartClick}
              className="relative hover:text-[#0f172a] transition-colors focus:outline-none"
            >
              <i className="fa fa-shopping-cart text-lg" />
              <span className="absolute -top-2 -right-2 bg-[#ff8f3f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                {cartCount}
              </span>
            </button>
            <Link href="/wishlist" aria-label="Wishlist" className="hidden md:flex items-center hover:text-[#0f172a] transition-colors">
              <i className="fa-regular fa-heart text-lg" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
