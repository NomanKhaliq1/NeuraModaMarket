import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  image: string;
  title: string;
  items: number;
  href: string;
  active?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, items, href, active = false }) => {
  return (
    <Link
      href={href}
      className={`relative group block rounded-xl overflow-hidden border ${active ? "border-[#0b7b69] shadow-lg" : "border-transparent shadow"} transition-all duration-300`}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full h-[280px] object-cover rounded-xl"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 flex flex-col items-center justify-center text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-white/80">{items} Items</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
