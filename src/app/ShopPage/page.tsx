"use client";

import React, { useState } from 'react';
import ShopProductCard from '@/components/ShopProductCard';
import CategoryCard from "@/components/CategoryCard";
import FilterRow from "@/components/FilterRow";

const ShopPage = () => {

    const [view, setView] = useState<"grid" | "list">("grid"); // Default view is grid
    const [sortOption, setSortOption] = useState<string>("popularity");
    const [totalResults] = useState(12);

    const handleSortChange = (value: string) => {
        setSortOption(value);
        console.log("Sorting by: ", value);
    };

    const handleViewChange = (view: "grid" | "list") => {
        setView(view);
        console.log("View changed to: ", view);
    };

    const handleFilterClick = () => {
        console.log("Filter clicked!");
    };

    const products = [
        {
            image: "/Shop/p1.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p2.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p3.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p4.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p5.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p6.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p7.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p8.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p9.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p10.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p11.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Shop/p12.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
    ];

    const categories = [
        {
            image: "/shop/media-bg-cover1.png",
            title: "CLOTHS",
            items: 5,
        },
        {
            image: "/shop/media-bg-cover2.png",
            title: "CLOTHS",
            items: 5,
        },
        {
            image: "/shop/media-bg-cover3.png",
            title: "CLOTHS",
            items: 5,
        },
        {
            image: "/shop/media-bg-cover4.png",
            title: "CLOTHS",
            items: 5,
        },
        {
            image: "/shop/media-bg-cover5.png",
            title: "CLOTHS",
            items: 5,
        },
    ];

    return (
        <>
            <div className="py-8 px-8 bg-[#FAFAFA]">
                <div className="container mx-auto flex justify-between items-center px-8 mb-6">
                    <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
                    <div className="text-gray-500">
                        <span className="text-[#737373] font-bold">Home</span>
                        <span className="mx-2 text-[#737373]"> &gt; </span>
                        <span className="text-[#252B42] font-bold text-[#BDBDBD]">Shop</span>
                    </div>
                </div>
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((category, index) => (
                            <CategoryCard
                                key={index}
                                image={category.image}
                                title={category.title}
                                items={category.items}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-4 px-8 bg-[#FFF]">
            <FilterRow
                totalResults={totalResults}
                onSortChange={handleSortChange}
                onViewChange={handleViewChange}
                onFilterClick={handleFilterClick}
            />
            </div>

            <section className="bg-gray-100 py-20">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#252B42]">Our Shop</h2>
                        <p className="text-[#737373] text-[16px] mt-2">
                            Browse through our collection of high-quality products.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-[70px]">
                        {products.map((product, index) => (
                            <ShopProductCard
                                key={index}
                                image={product.image}
                                title={product.title}
                                category={product.category}
                                originalPrice={product.originalPrice}
                                discountedPrice={product.discountedPrice}
                                colors={product.colors}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-8">
                        <button className="bg-[#23A6F0] text-white py-2 px-4 rounded mr-2">First</button>
                        <button className="bg-[#23A6F0] text-white py-2 px-4 rounded mr-2">1</button>
                        <button className="bg-[#23A6F0] text-white py-2 px-4 rounded mr-2">2</button>
                        <button className="bg-[#23A6F0] text-white py-2 px-4 rounded mr-2">3</button>
                        <button className="bg-[#23A6F0] text-white py-2 px-4 rounded">Next</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopPage;