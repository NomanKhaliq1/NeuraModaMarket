import React from "react";
import Image from "next/image";

const EditorsPick = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-8">
        <div className="custom-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">EDITOR&apos;S PICK</h2>
            <p className="text-gray-500">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Custom Layout with Flexbox */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Large Image Section (Men) */}
            <div className="relative w-full md:w-[510px] h-[500px]">
              <Image
                src="/men-image.jpg" // Replace with the actual path to the image
                alt="Men"
                width={510}
                height={500}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 bg-white w-[150px] px-4 py-2 shadow text-center">
                <span className="text-sm font-bold uppercase text-gray-800">
                  Men
                </span>
              </div>
            </div>

            {/* Right Section with Smaller Images */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Women Section */}
              <div className="relative w-full md:w-[240px] h-[500px]">
                <Image
                  src="/women-image.jpg"
                  alt="Women"
                  width={240}
                  height={500}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-4 left-4 bg-white w-[150px] px-4 py-2 shadow text-center">
                  <span className="text-sm font-bold uppercase text-gray-800">
                    Women
                  </span>
                </div>
              </div>

              {/* Accessories and Kids Section */}
              <div className="flex flex-col gap-4">
                {/* Accessories Section */}
                <div className="relative w-full md:w-[240px] h-[240px]">
                  <Image
                    src="/accessories-image.jpg"
                    alt="Accessories"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-4 bg-white w-[150px] px-4 py-2 shadow text-center">
                    <span className="text-sm font-bold uppercase text-gray-800">
                      Accessories
                    </span>
                  </div>
                </div>

                {/* Kids Section */}
                <div className="relative w-full md:w-[240px] h-[240px]">
                  <Image
                    src="/kids-image.jpg"
                    alt="Kids"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-4 left-4 bg-white w-[150px] px-4 py-2 shadow text-center">
                    <span className="text-sm font-bold uppercase text-gray-800">
                      Kids
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;