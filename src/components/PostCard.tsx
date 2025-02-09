import React from "react";
import Image from "next/image";

interface PostCardProps {
    image: string;
    title: string;
    category: string; // ✅ Added category here
    date: string;
    comments: string;
    tags?: string[];
    link: string;
}

const PostCard: React.FC<PostCardProps> = ({
    image,
    title,
    category,
    date,
    comments,
    tags = [],
    link,
}) => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="post-top relative">
                <span className="text-[14px] bg-red-500 font-bold posttag">NEW</span>
                <Image 
                    src={image} 
                    alt={title} 
                    width={400} 
                    height={250} 
                    className="w-full h-[250px] object-cover" 
                />
            </div>
            <div className="p-4">
                {/* ✅ Show category */}
                <p className="text-[#737373] text-[14px] font-bold">{category}</p>

                {/* ✅ Prevent undefined error */}
                <div className="flex space-x-3 text-xs mb-2">
                    {tags?.map((tag, index) => (
                        <span
                            key={index}
                            className={`py-1 font-regular text-[12px] ${tag === "Google"
                                    ? "text-[#4285F4]"
                                    : "text-[#737373]"
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h4 className="text-[#252B42] mt-2 font-regular text-[20px]">{title}</h4>
                <p className="text-[#737373] mt-2 font-regular text-[14px]">
                    We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
                </p>

                <div className="flex items-center justify-between text-xs text-[#737373] mt-4 font-regular text-[12px]">
                    <div className="flex items-center space-x-2 text-sm">
                        <Image src="/icon-clock.png" width={15} height={15} alt="clock icon"/>
                        <span className="text-[#737373]">{date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <Image src="/chart-icon-Vector.png" width={15} height={15} alt="Chart Icon"/>
                        <span className="text-[#737373]">{comments} comments</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <a href={link} className="flex justify-between text-[#737373] mt-4 inline-block font-bold hover:text-[#1a8bd1] w-[120px] post-btn">
                        Learn More
                        <Image src="/icon-arrow-next.png" width={15} height={15} alt="Arrow icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
