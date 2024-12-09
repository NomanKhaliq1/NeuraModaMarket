import React from "react";

const EditorsPick = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-8">
        <div className="custom-container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">EDITOR'S PICK</h2>
            <p className="text-gray-500">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Custom Layout with Flexbox */}
          <div className="flex flex-col md:flex-row justify-center align-items-center gap-8 h-[500px] overflow-hidden">

            {/* Large Image Section (Men) */}
            <div className="relative w-full w-[510px] h-[500px]">
              <img
                src="/men-image.jpg" // Replace with the actual path to the image
                alt="Men"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                <span className="text-sm font-bold uppercase">Men</span>
              </div>
            </div>

            {/* Right Section with Smaller Images */}
            <div className="flex flex-col md:flex-row gap-8 w-full">

              {/* Women Section */}
              <div className="relative w-full w-[240px] h-[500px]">
                <img
                  src="/women-image.jpg" // Replace with the actual path to the image
                  alt="Women"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                  <span className="text-sm font-bold uppercase">Women</span>
                </div>
              </div>

              {/* Accessories and Kids Section */}
              <div className="flex flex-col gap-8 w-full w-[240px] h-[500px]">

                {/* Accessories Section */}
                <div className="relative w-full h-[100%]">
                  <img
                    src="/accessories-image.jpg" // Replace with the actual path to the image
                    alt="Accessories"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                    <span className="text-sm font-bold uppercase">Accessories</span>
                  </div>
                </div>

                {/* Kids Section */}
                <div className="relative w-full h-[100%]">
                  <img
                    src="/kids-image.jpg" // Replace with the actual path to the image
                    alt="Kids"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                    <span className="text-sm font-bold uppercase">Kids</span>
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