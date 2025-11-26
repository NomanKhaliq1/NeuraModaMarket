import React from "react";
import ProductCard from "./ProductCard";

const BestSellerProducts = () => {
    const products = [
        {
            image: "/Bestseller/p1.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p2.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p3.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p4.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p5.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p6.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p7.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        },
        {
            image: "/Bestseller/p8.jpg",
            title: "Graphic Design",
            category: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#23A6F0", "#23856D", "#E77C40", "#252B42"]
        }
    ];

    return (
        <section className="bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef6f3] py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-[#0b7b69] font-semibold text-sm tracking-[0.3em] uppercase">Featured Products</h4>
                    <h3 className="text-4xl font-semibold text-[#0f172a] tracking-tight">Bestseller Products</h3>
                    <p className="text-gray-600 font-light text-base tracking-wide max-w-2xl mx-auto">
                        Elevated staples with bright details you can wear everywhere.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
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
            </div>
        </section>
    );
};

export default BestSellerProducts;
