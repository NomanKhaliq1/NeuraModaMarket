import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-[url('/hero-sec-bg-new.png')] bg-cover bg-right-top overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#0b7b69]/70 to-[#ff8f3f]/40" /> {/* Rich gradient overlay for depth */}

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-[#b9f3e5] uppercase tracking-[0.28em] text-xs font-semibold px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/25">
            Summer 2024
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-semibold leading-tight drop-shadow-xl">
            New Collection
          </h1>
          <p className="text-gray-100 text-lg md:text-2xl font-light max-w-lg mx-auto md:mx-0">
            Discover the latest trends and elevate your style with curated looks for every mood.
          </p>
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] hover:brightness-110 text-white text-lg font-semibold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_12px_40px_rgba(15,123,105,0.35)]"
          >
            Shop Now
          </a>
        </div>

        <div className="hidden md:block w-1/2 h-full">
          {/* Optional: Add a hero image or 3D element here if available, otherwise keep it clean */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
