import React from "react";

interface PostCardProps {
    image: string;
    title: string;
    category: string;
    date: string;
    comments: string;
    tags: string[]; // Tags will be an array
    link: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, category, date, comments, tags, link }) => {
    return (
        <div className="bg-white overflow-hidden">
            <div className="post-top relative">
            <span className="text-[14px] bg-red-500 font-bold posttag">NEW</span>
            <img
                src={image}
                alt={title}
                className="w-full h-[250px] object-cover"
            />
            </div>
            <div className="p-4">
                <div className="flex space-x-3 text-xs mb-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`py-1 font-regular text-[12px] ${tag === "Google"
                                    ? "text-[#4285F4]" // Google Blue
                                    : "text-[#737373]" // Other tags will remain black
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h4 className="text-[#252B42] mt-2 font-regular text-[20px]">{title}</h4>
                <p className="text-[#737373] mt-2 font-regular text-[14px]">
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>

                <div className="flex items-center justify-between text-xs text-[#737373] mt-4 font-regular text-[12px]">
                    <div className="flex items-center space-x-2 text-sm">
                        <img src="/icon-clock.png" className="h-[15px]" alt="clock icon"/>
                        <span className="text-[#737373]">{date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <img src="/chart-icon-Vector.png" className="h-[15px]" alt="Chart Icon"/>
                        <span className="text-[#737373]">{comments} comments</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <a href={link} className="flex justify-between text-[#737373] mt-4 inline-block font-bold hover:text-[#1a8bd1] w-[120px] post-btn">
                        Learn More
                        <img src="/icon-arrow-next.png" className="h-[15px]" alt="Arrow icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
