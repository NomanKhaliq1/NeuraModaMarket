import React from "react";
import Image from "next/image";

interface PostCardProps {
    image: string;
    title: string;
    category: string;
    date: string;
    comments: string;
    tags?: string[];
    link: string;
    excerpt?: string;
}

const PostCard: React.FC<PostCardProps> = ({
    image,
    title,
    category,
    date,
    comments,
    tags = [],
    link,
    excerpt,
}) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#e5edf5] transition-all duration-300 flex flex-col h-full">
            <div className="relative w-full h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#ff8f3f] to-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    New
                </span>
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-4 z-10 px-3 py-1 rounded-full bg-white/85 text-[#0b7b69] text-xs font-semibold uppercase tracking-wide shadow">
                    {category}
                </span>
            </div>

            <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-[#f8fafc]">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                                tag === "Google"
                                    ? "bg-[#e8f1ff] text-[#2563eb]"
                                    : tag === "Trending"
                                    ? "bg-[#fff1e6] text-[#ff8f3f]"
                                    : "bg-[#e5f5ef] text-[#0b7b69]"
                            }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h4 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#0b7b69] transition-colors line-clamp-2">
                    {title}
                </h4>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">
                    {excerpt || "We focus on ergonomics and meeting you where you work. It’s only a keystroke away."}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                        <i className="far fa-clock text-[#0b7b69]"></i>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <i className="far fa-comment-alt text-[#ff8f3f]"></i>
                        <span>{comments} comments</span>
                    </div>
                </div>

                <a href={link} className="mt-4 flex items-center gap-2 text-[#0b7b69] font-semibold text-sm hover:underline group-hover:gap-3 transition-all">
                    Learn More <i className="fas fa-chevron-right text-xs"></i>
                </a>
            </div>
        </div>
    );
};

export default PostCard;
