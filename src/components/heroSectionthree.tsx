import React from "react";
import Image from "next/image";

const HeroSectionthree = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef6f3] py-24">
      <div className="absolute top-[-140px] left-[-120px] w-[360px] h-[360px] bg-[#0fb398]/16 blur-3xl rounded-full" />
      <div className="absolute bottom-[-160px] right-[-140px] w-[400px] h-[400px] bg-[#ff8f3f]/14 blur-3xl rounded-full" />
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 20%, rgba(15,123,105,0.07) 0, transparent 32%), radial-gradient(circle at 80% 0%, rgba(255,143,63,0.08) 0, transparent 28%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
          {/* Left Side - Hero Image */}
          <div className="w-full md:w-1/2 relative h-[420px] md:h-[520px]">
            <div className="absolute -inset-8 rounded-[32px] bg-white/70 blur-3xl" />
            <div className="absolute inset-0 rounded-[28px] border border-white/50 shadow-xl" />
            <Image
              src="/hero-three.png"
              alt="Shop Hero"
              fill
              className="object-contain object-center drop-shadow-2xl"
            />
          </div>

          {/* Right Side - Hero Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#0b7b69]/10 text-[#0b7b69] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
              Summer 2024
            </div>
            <h1 className="text-[#0f172a] text-4xl md:text-5xl font-semibold leading-tight">
              Part of the Neural Universe
            </h1>
            <p className="text-gray-600 text-base font-medium max-w-xl mx-auto md:mx-0">
              Structured knits, soft edges, and color hits inspired by future cities and sunset skies.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Limited run
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Sustainably made
              </span>
              <span className="px-4 py-2 rounded-full bg-white text-[#0b7b69] text-sm font-semibold shadow-sm">
                Free express ship
              </span>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
              <a
                href="#"
                className="bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] hover:brightness-110 text-white font-semibold text-sm uppercase py-3.5 px-9 rounded-full transition-colors duration-300 shadow-[0_16px_40px_rgba(15,123,105,0.3)]"
              >
                Buy Now
              </a>
              <a
                href="#"
                className="bg-white border-2 border-[#0b7b69] text-[#0b7b69] hover:bg-[#0b7b69] hover:text-white font-semibold text-sm uppercase py-3.5 px-9 rounded-full transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionthree;
