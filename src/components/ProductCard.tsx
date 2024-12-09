import React from "react";

interface ProductCardProps {
    image: string;
    title: string;
    category: string;
    originalPrice: string;
    discountedPrice: string;
    colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    category,
    originalPrice,
    discountedPrice,
    colors,
}) => {
    return (
        <div className="w-full sm:w-[240px] hover:shadow-xl transition duration-300 h-[630px] ctrl-customwidth">
            <div className="relative">
                <img src={image} alt={title} className="w-full h-[430px] object-cover" />
            </div>

            <div className="mt-4 p-4 space-y-[10px]">
                <h3 className="text-[16px] font-bold text-[#252B42] text-center">{title}</h3>
                <p className="text-[14px] font-bold text-[#737373] text-center">{category}</p>
                <div className="flex justify-between items-center mt-4 w-[50%] m-[auto]">
                    <span className="text-[16px] font-bold text-[#BDBDBD]">{originalPrice}</span>
                    <span className="text-[16px] font-bold text-[#23856D]">{discountedPrice}</span>
                </div>
            </div>

            <div className="flex space-x-2 justify-center mt-2 m-[auto]">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        className={`w-6 h-6 rounded-full border-2`}
                        style={{ backgroundColor: color }}
                        title={`Color: ${color}`}
                    ></button>
                ))}
            </div>

        </div>
    );
};

export default ProductCard;