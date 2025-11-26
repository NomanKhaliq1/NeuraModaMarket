import React from "react";
import PostCard from "./PostCard";
import { blogPosts } from "@/data/blogPosts";

const FeaturedPosts = () => {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fb] via-[#eef6f3] to-white py-24">
      <div className="absolute top-[-120px] right-[-80px] w-[340px] h-[340px] bg-[#0fb398]/14 blur-3xl rounded-full" />
      <div className="absolute bottom-[-140px] left-[-100px] w-[360px] h-[360px] bg-[#ff8f3f]/12 blur-3xl rounded-full" />
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(15,123,105,0.06) 0, transparent 30%), radial-gradient(circle at 82% 12%, rgba(255,143,63,0.08) 0, transparent 28%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#0b7b69]/10 text-[#0b7b69] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.3em]">
            Practice Advice
          </div>
          <h3 className="text-4xl font-semibold text-[#0f172a] tracking-tight">Featured Posts</h3>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Inspiration and insights from the team, one vibrant drop at a time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-[#0b7b69] via-[#0fb398] to-[#ff8f3f] text-white text-sm font-semibold uppercase tracking-wide shadow-[0_12px_30px_rgba(15,123,105,0.25)] hover:brightness-110 transition"
            >
              View All Stories
            </a>
            <a
              href="#"
              className="px-5 py-3 rounded-full border border-[#0b7b69]/30 text-[#0b7b69] text-sm font-semibold uppercase tracking-wide hover:bg-[#0b7b69]/10 transition"
            >
              Subscribe
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              image={post.image}
              title={post.title}
              category={post.category}
              date={post.date}
              comments={post.comments}
              tags={post.tags}
              excerpt={post.excerpt}
              link={`/blog/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
