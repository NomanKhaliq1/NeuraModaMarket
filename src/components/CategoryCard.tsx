import React from "react";

interface CategoryCardProps {
  image: string;
  title: string;
  items: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, items }) => {
  return (
    <div className="relative group">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
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