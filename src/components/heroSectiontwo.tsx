import React from "react";
import Image from "next/image";

const HeroSectiontwo = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#f3f7fb] via-[#eef6f3] to-[#fdf4ed] text-[#0f172a]">
      <div className="absolute top-[-120px] right-[-80px] w-[360px] h-[360px] bg-[#0fb398]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] left-[-100px] w-[380px] h-[380px] bg-[#ff8f3f]/18 blur-3xl rounded-full" />
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(15,123,105,0.08) 0, transparent 32%), radial-gradient(circle at 80% 10%, rgba(255,143,63,0.08) 0, transparent 28%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-2 bg-[#0b7b69]/10 text-[#0b7b69] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.28em]">
              Limited Drop
            </span>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Vita Classic Capsule
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-light max-w-xl mx-auto md:mx-0">
              Layered linen, tailored cuts, and sunset-inspired tones built for weekends and city nights.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Vegan leather
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Hand-dyed
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Planet friendly
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a
                href="#"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] hover:brightness-110 text-white font-semibold text-sm uppercase py-4 px-10 rounded-full transition-all duration-300 shadow-[0_18px_45px_rgba(15,123,105,0.32)]"
              >
                Shop the Drop
              </a>
              <a
                href="#"
                className="w-full sm:w-auto text-center bg-white hover:bg-[#0b7b69]/10 text-[#0b7b69] font-semibold text-sm uppercase py-4 px-10 rounded-full transition-colors duration-300 ring-1 ring-[#0b7b69]/30"
              >
                View Lookbook
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-[320px] md:w-[470px] h-[420px] md:h-[520px]">
              <div className="absolute -inset-8 rounded-[32px] bg-white/60 blur-3xl" />
              <div className="absolute inset-0 rounded-[28px] border border-white/50 shadow-2xl" />
              <Image
                src="/hero-sec-two-image.png"
                alt="Shop Hero"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 glass-card text-[#0f172a] px-6 py-4 rounded-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b7b69]">From</p>
                <p className="text-2xl font-semibold text-[#0f172a]">$16.48</p>
                <p className="text-sm text-gray-600">Ships in 48h • Free returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectiontwo;
