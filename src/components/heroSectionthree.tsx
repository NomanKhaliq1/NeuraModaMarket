import React from "react";
import Image from "next/image";

const HeroSectionthree = () => {
  return (
    <section className="bg-[#fff]">
      <div className="container mx-auto h-[680px]">
        <div className="custom-container flex flex-col md:flex-row items-center justify-between space-y-8 gap-20 md:space-y-0">
          
          {/* Left Side - Hero Image */}
          <div className="w-full md:w-[55%] h-[100%] relative">
            <Image 
              src="/hero-three.png"
              alt="Shop Hero"
              layout="responsive"
              width={700}
              height={500}
              className="object-cover object-bottom hero-img-style"
            />
          </div>

          {/* Right Side - Hero Content */}
          <div className="w-full md:w-[45%] space-y-[35px]">
            <h2 className="text-[#BDBDBD] text-[16px] font-bold uppercase">
              SUMMER 2024
            </h2>
            <h1 className="text-[#252B42] text-[40px] font-bold leading-[50px]">
              Part of the Neural Universe
            </h1>
            <p className="text-[#737373] text-[14px] font-regular">
              We know how large objects will act,
              <span className="hidden md:inline"> <br /></span>
              but things on a small scale.
            </p>

            {/* Buttons Section */}
            <div className="flex justify-between items-center w-[75%]">
              <a href="#" className="cstm-btn font-bold text-[14px] uppercase bg-green-500 text-white py-3 px-8 rounded inline-block tracking-[0.2px]">
                BUY NOW
              </a>
              <a href="#" className="cstm-btn-transparent font-bold text-[14px] uppercase border border-green-500 text-green-500 py-3 px-8 rounded inline-block tracking-[0.2px]">
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