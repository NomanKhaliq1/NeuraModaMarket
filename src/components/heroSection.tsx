import React from "react";

const HeroSection = () => {
    return (
      <section className="hero-section bg-[#00B5DA]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 h-[700px]">
          <div className="w-full md:w-[45%] space-y-[35px]">
            <h2 className="text-white text-[16px] font-bold uppercase">
              SUMMER 2024
            </h2>
            <h1 className="text-white text-[58px] font-bold leading-tight">
              NEW COLLECTION
            </h1>
            <p className="text-white text-[20px] font-regular">
              We know how large objects will act,
              <span className="hidden md:inline"> <br /></span>
              but things on a small scale.
            </p>
            <a
              href="#"
              className="cstm-btn font-bold text-[24px] uppercase bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 inline-block"
            >
              Shop Now
            </a>
          </div>
  
          <div className="hidden md:block md:w-[55%]">
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  