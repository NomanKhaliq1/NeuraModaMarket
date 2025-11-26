import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "@/data/blogPosts";

export const dynamicParams = true;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="bg-gradient-to-br from-white via-[#f5f7fb] to-[#eef6f3] pb-16">
      <div className="relative h-[320px] md:h-[420px] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-10 text-white max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide font-semibold text-white/80">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>{post.category}</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>{post.author}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold mt-3">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/20 text-white text-[11px] font-semibold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 max-w-4xl space-y-6">
        <p className="text-lg text-gray-700 leading-relaxed">{post.excerpt}</p>
        <div className="space-y-5 text-gray-700 leading-8 text-base">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#0b7b69]/10 text-[#0b7b69] text-[11px] font-semibold uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0b7b69] font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
}
