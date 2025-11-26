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

const ProductCard: React.FC<ProductCardProps> = ({
    image,
    title,
    category,
    originalPrice,
    discountedPrice,
    colors,
}) => {
    return (
        <div className="group relative flex flex-col h-full rounded-3xl border border-[#e5edf5] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
            {/* Image Section */}
            <div className="relative w-full aspect-[4/5] bg-[#f4f7fb] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-white/90 text-[#0b7b69] shadow-sm">
                        {category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide bg-[#ff8f3f] text-white shadow-sm">
                        New Drop
                    </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-5 py-3 rounded-full bg-white text-[#0b7b69] font-semibold text-sm uppercase shadow-lg hover:bg-[#0b7b69] hover:text-white transition-colors duration-200">
                        Quick Add
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow space-y-4 bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="text-center space-y-1">
                    <h3 className="text-lg font-semibold text-[#0f172a] group-hover:text-[#0b7b69] transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500">{category}</p>
                </div>

                {/* Price Section */}
                <div className="flex items-center justify-center gap-3">
                    <span className="text-sm font-semibold text-gray-400 line-through">{originalPrice}</span>
                    <span className="text-xl font-semibold text-[#0b7b69]">{discountedPrice}</span>
                </div>

                {/* Color Variants */}
                <div className="flex items-center justify-center gap-2 pt-1">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className="w-5 h-5 rounded-full border border-white shadow-sm hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b7b69]/50"
                            style={{ backgroundColor: color }}
                            title={`Color: ${color}`}
                        />
                    ))}
                </div>

                <div className="text-center text-xs font-semibold text-gray-500">
                    Free shipping over $50 • Easy returns
                </div>

                <div className="pt-1">
                    <a
                        href="#"
                        className="block w-full text-center bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] hover:brightness-110 text-white font-semibold text-sm uppercase py-3 rounded-full transition-all duration-300 shadow-[0_12px_32px_rgba(15,123,105,0.25)]"
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
