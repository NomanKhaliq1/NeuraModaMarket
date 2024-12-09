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
        <section className="bg-white py-20 gap-20">
            <div className="container mx-auto px-8">
                <div className="custom-container">


                    <div className="text-center mb-8 space-y-[10px]">
                        <h4 className="text-[#737373] font-regular text-[20px] tracking-[0.2px]">Featured Products</h4>
                        <h3 className="text-3xl font-bold text-[#252B42] text-[24px] tracking-[0.1px]">BESTSELLER PRODUCTS</h3>
                        <p className="text-[#737373] font-regular text-[14px] tracking-[0.2px]">
                            Problems trying to resolve the conflict between
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-[70px]">
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
            </div>
        </section>
    );
};

export default BestSellerProducts;
