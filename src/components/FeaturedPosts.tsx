import React from "react";
import PostCard from "./PostCard";

const FeaturedPosts = () => {
    const posts = [
        {
            image: "/FeaturedPost/post1.jpg",
            title: "Loudest à la Madison #1 (L'integral)",
            category: "Google",
            date: "22 April 2021",
            comments: "10",
            tags: ["Google", "Trending", "New"], // Google will get blue color
            link: "#",
        },
        {
            image: "/FeaturedPost/post2.jpg",
            title: "Loudest à la Madison #2 (L'integral)",
            category: "Trending",
            date: "22 April 2021",
            comments: "5",
            tags: ["Trending", "New"], // No Google tag here, so tags remain black
            link: "#",
        },
        {
            image: "/FeaturedPost/post3.jpg",
            title: "Loudest à la Madison #3 (L'integral)",
            category: "New",
            date: "22 April 2021",
            comments: "8",
            tags: ["Google", "New"], // Google tag gets blue color
            link: "#",
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-8">
                <div className="custom-container">
                    <div className="text-center mb-12 space-y-[20px]">
                        <h4 className="text-[#23A6F0] font-bold text-[14px] tracking-[0.2px]">Practice Advice</h4>
                        <h3 className="text-3xl font-bold text-[#252B42] text-[40px] tracking-[0.2px]">Featured Posts</h3>
                        <p className="text-[#737373] font-regular text-[14px] tracking-[0.2px]">
                            Problems trying to resolve the conflict between<span className="hidden md:inline"> <br /></span>
                            the two major realms of Classical physics: Newtonian mechanics
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <PostCard
                                key={index}
                                image={post.image}
                                title={post.title}
                                category={post.category}
                                date={post.date}
                                comments={post.comments}
                                tags={post.tags}
                                link={post.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedPosts;
