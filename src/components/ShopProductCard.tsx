import React from "react";
import Image from "next/image";

interface ProductCardProps {
    image: string;
    title: string;
    category: string;
    originalPrice: string;
    discountedPrice: string;
    colors: string[];
}

const ShopProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    category,
    originalPrice,
    discountedPrice,
    colors,
}) => {
    return (
        <div className="w-full hover:shadow-xl transition duration-300 h-[630px] ctrl-customwidth">
            {/* Image Section */}
            <div className="relative w-full h-[430px]">
                <Image 
                    src={image} 
                    alt={title} 
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                />
            </div>

            {/* Product Details */}
            <div className="mt-4 p-4 space-y-[10px] text-center">
                <h3 className="text-[16px] font-bold text-[#252B42]">{title}</h3>
                <p className="text-[14px] font-bold text-[#737373]">{category}</p>
                
                {/* Price Section */}
                <div className="flex justify-between items-center mt-4 w-[50%] mx-auto">
                    <span className="text-[16px] font-bold text-[#BDBDBD]">{originalPrice}</span>
                    <span className="text-[16px] font-bold text-[#23856D]">{discountedPrice}</span>
                </div>
            </div>

            {/* Color Variants */}
            <div className="flex space-x-2 justify-center mt-2">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className="w-6 h-6 rounded-full border-2"
                        style={{ backgroundColor: color }}
                        title={`Color: ${color}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ShopProductCard;
