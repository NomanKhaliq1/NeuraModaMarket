"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import ShopProductCard from "@/components/ShopProductCard";
import CategoryCard from "@/components/CategoryCard";
import FilterRow from "@/components/FilterRow";

const ShopPage = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sortOption, setSortOption] = useState<string>("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const itemsPerPage = 12;
  const activeCategory = (searchParams.get("category") || "all").toLowerCase();
  const categoryLabelMap: Record<string, string> = {
    men: "Men",
    women: "Women",
    accessories: "Accessories",
    kids: "Kids",
    all: "All",
  };

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

  const products = useMemo(() => {
    const categories = ["men", "women", "accessories", "kids"];
    return Array.from({ length: 20 }, (_, index) => {
      const key = categories[index % categories.length];
      return {
        image: `/Bestseller/p${(index % 8) + 1}.jpg`,
        title: `Product ${index + 1}`,
        categoryKey: key,
        category: categoryLabelMap[key],
        originalPrice: "$" + (16.48 + index).toFixed(2),
        discountedPrice: "$" + (6.48 + index * 0.5).toFixed(2),
        colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"],
      };
    });
  }, []);

  const filteredProducts = useMemo(() => {
    const pool =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.categoryKey === activeCategory);

    if (sortOption === "price_high") {
      return [...pool].sort(
        (a, b) =>
          parseFloat(b.originalPrice.slice(1)) - parseFloat(a.originalPrice.slice(1))
      );
    }
    if (sortOption === "price_low") {
      return [...pool].sort(
        (a, b) =>
          parseFloat(a.originalPrice.slice(1)) - parseFloat(b.originalPrice.slice(1))
      );
    }
    return pool;
  }, [activeCategory, products, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const displayedProducts = filteredProducts.slice(
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
      <div className="py-8 px-4 md:px-8 bg-gradient-to-r from-[#f5f7fb] via-[#eef6f3] to-[#fdf4ed]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 mb-6 gap-4">
          <div className="space-y-2">
            <p className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#0b7b69]/10 text-[#0b7b69] text-xs font-semibold uppercase tracking-[0.3em]">
              Shop
            </p>
            <h1 className="text-3xl font-semibold text-[#0f172a]">Find your next look</h1>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="text-[#0b7b69] font-semibold hover:text-[#0f172a] transition-colors">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="font-semibold text-gray-600">Shop</span>
              {activeCategory !== "all" && (
                <>
                  <span className="text-gray-400">/</span>
                  <Link
                    href="/shop"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#0b7b69] border border-[#0b7b69]/20 font-semibold hover:bg-[#0b7b69]/10 transition"
                  >
                    {categoryLabelMap[activeCategory] || activeCategory}
                    <span className="text-xs text-gray-500">(clear)</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-500">Browse by vibe</span>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: "Men", key: "men" },
              { title: "Women", key: "women" },
              { title: "Accessories", key: "accessories" },
              { title: "Kids", key: "kids" },
              { title: "All", key: "all" },
            ].map((cat, index) => (
              <CategoryCard
                key={cat.key}
                image={`/shop/shop-hero-2-product-slide-${(index % 5) + 1}.jpg`}
                title={cat.title}
                items={5}
                href={cat.key === "all" ? "/shop" : `/shop?category=${cat.key}`}
                active={activeCategory === cat.key}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FilterRow Component */}
      <div className="py-4 px-4 md:px-8 bg-white border-b border-gray-200">
        <FilterRow
          totalResults={products.length}
          onSortChange={handleSortChange}
          onViewChange={handleViewChange}
          onFilterClick={handleFilterClick}
        />
      </div>

      {/* Products Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className={`grid ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-8 mt-6`}
          >
            {displayedProducts.map((product, index) => (
              <ShopProductCard key={index} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              First
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 border rounded transition-colors ${currentPage === index + 1 ? "bg-primary text-white border-primary" : "border-gray-300 text-gray-600 hover:bg-gray-100"}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50"
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
