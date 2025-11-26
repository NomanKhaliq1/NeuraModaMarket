import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#f5f7fb] via-[#eef6f3] to-white border-t border-[#e5edf5]">
      <div className="container mx-auto px-6 py-12 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold">NeuraModa</p>
              <p className="text-lg font-semibold text-[#0f172a]">Market</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#0b7b69]">
            {[
              { icon: "facebook", href: "#" },
              { icon: "instagram", href: "#" },
              { icon: "twitter", href: "#" },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label={social.icon}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:text-[#ff8f3f] transition-colors"
              >
                <i className={`fab fa-${social.icon} text-lg`} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0f172a]">Company</h3>
            <ul className="text-sm text-gray-600 font-medium space-y-3">
              <li><Link href="/about" className="hover:text-[#0b7b69] transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">We are hiring</a></li>
              <li><Link href="/blog" className="hover:text-[#0b7b69] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0f172a]">Legal</h3>
            <ul className="text-sm text-gray-600 font-medium space-y-3">
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Support</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0f172a]">Features</h3>
            <ul className="text-sm text-gray-600 font-medium space-y-3">
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Style Drops</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Curated Edits</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Personal Styling</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Priority Support</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#0f172a]">Resources</h3>
            <ul className="text-sm text-gray-600 font-medium space-y-3">
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">iOS & Android</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Watch a Demo</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">Customers</a></li>
              <li><a href="#" className="hover:text-[#0b7b69] transition-colors">API</a></li>
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-base font-bold text-[#0f172a]">Stay Updated</h3>
            <div className="flex relative">
              <input
                type="email"
                placeholder="Your Email"
                className="py-3 px-4 w-full text-sm text-gray-600 bg-white border border-[#e5edf5] rounded-l-lg focus:outline-none focus:border-[#0b7b69]"
              />
              <button className="bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] text-white py-3 px-4 rounded-r-lg text-sm font-bold transition-colors hover:brightness-110">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">No spam. Just drops, edits, and invites.</p>
          </div>
        </div>
      </div>

      <div className="bg-white/80 border-t border-[#e5edf5] py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} NeuraModa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#0b7b69] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#0b7b69] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#0b7b69] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
