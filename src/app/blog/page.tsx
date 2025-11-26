import { blogPosts } from "@/data/blogPosts";
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef6f3] py-16">
      <div className="container mx-auto px-6 space-y-6 text-center mb-12">
        <p className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0b7b69]/10 text-[#0b7b69] text-xs font-semibold uppercase tracking-[0.3em]">
          Blog
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-[#0f172a]">Stories &amp; Style Notes</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Fresh drops, styling tips, and behind-the-scenes from the NeuraModa team.
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
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
    </main>
  );
}
