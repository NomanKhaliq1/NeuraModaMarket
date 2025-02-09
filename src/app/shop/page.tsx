"use client";

import React, { useState } from "react";
import ShopProductCard from "@/components/ShopProductCard";
import CategoryCard from "@/components/CategoryCard";
import FilterRow from "@/components/FilterRow";

const ShopPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState<string>("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleSortChange = (value: string) => {
    setSortOption(value);
    console.log("Sorting by:", value);
  };

  const handleViewChange = (selectedView: "grid" | "list") => {
    setView(selectedView);
    console.log("View changed to:", selectedView);
  };

  const handleFilterClick = () => {
    console.log("Filter clicked!");
  };

  let products = Array.from({ length: 20 }, (_, index) => ({
    image: `/Shop/p${(index % 12) + 1}.jpg`,
    title: `Product ${index + 1}`,
    category: "English Department",
    originalPrice: "$" + (16.48 + index).toFixed(2),
    discountedPrice: "$" + (6.48 + index * 0.5).toFixed(2),
    colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
  }));

  if (sortOption === "price_high") {
    products = products.sort((a, b) => parseFloat(b.originalPrice.slice(1)) - parseFloat(a.originalPrice.slice(1)));
  } else if (sortOption === "price_low") {
    products = products.sort((a, b) => parseFloat(a.originalPrice.slice(1)) - parseFloat(b.originalPrice.slice(1)));
  }

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="py-8 px-8 bg-[#FAFAFA]">
        <div className="container mx-auto flex justify-between items-center px-8 mb-6">
          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
          <div className="text-gray-500">
            <span className="text-[#737373] font-bold">Home</span>
            <span className="mx-2 text-[#737373]"> &gt; </span>
            <span className="text-[#252B42] font-bold text-[#BDBDBD]">
              Shop
            </span>
          </div>
        </div>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <CategoryCard key={index} image={`/shop/media-bg-cover${index + 1}.png`} title="CLOTHS" items={5} />
            ))}
          </div>
        </div>
      </div>

      {/* FilterRow Component */}
      <div className="py-4 px-8 bg-[#FFF]">
        <FilterRow
          totalResults={products.length}
          onSortChange={handleSortChange}
          onViewChange={handleViewChange}
          onFilterClick={handleFilterClick}
        />
      </div>

      {/* Products Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-8">
          <div
            className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-10 mt-10`}
          >
            {displayedProducts.map((product, index) => (
              <ShopProductCard key={index} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-200"
            >
              First
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border border-gray-300 rounded ${currentPage === index + 1 ? "bg-[#23A6F0] text-white" : "text-gray-600 hover:bg-gray-200"}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-200"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
