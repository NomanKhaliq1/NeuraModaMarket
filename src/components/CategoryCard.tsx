import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  image: string;
  title: string;
  items: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, items }) => {
  return (
    <div className="relative group">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        width={300} // Adjust width based on your requirement
        height={300} // Adjust height based on your requirement
        className="w-full h-[300px] object-cover rounded-lg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">{items} Items</p>
      </div>
    </div>
  );
};

export default CategoryCard;