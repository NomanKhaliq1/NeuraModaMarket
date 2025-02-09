import React from "react";
import Image from "next/image";

const HeroSectiontwo = () => {
  return (
    <section className="bg-[#23856D]">
      <div className="container mx-auto h-[700px]">
        
        <div className="custom-container flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          
          {/* Left Section - Text Content */}
          <div className="w-full md:w-[45%] space-y-[35px]">
            <h2 className="text-white text-[16px] font-bold uppercase">
              SUMMER 2024
            </h2>
            <h1 className="text-white text-[58px] font-bold leading-[80px]">
              Vita Classic Product
            </h1>
            <p className="text-white text-[14px] font-regular">
              We know how large objects will act, We know 
              <span className="hidden md:inline"> <br /></span> 
              how objects will act, We know
            </p>

            {/* Price & Add to Cart Button */}
            <div className="flex justify-between items-center w-[60%]">
              <span className="font-bold text-[24px] tracking-[0.1px]">$16.48</span>

              <a
                href="#"
                className="cstm-btn font-bold text-[14px] uppercase bg-green-500 text-white py-3 px-8 rounded hover:bg-green-600 inline-block tracking-[0.2px]"
              >
                ADD TO CART
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-[55%] flex justify-end">
            <Image
              src="/hero-sec-two-image.png"
              alt="Shop Hero"
              width={450}
              height={500}
              layout="intrinsic"
              className="-mb-[170px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectiontwo;