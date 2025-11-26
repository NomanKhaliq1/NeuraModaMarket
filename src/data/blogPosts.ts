export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  category: string;
  excerpt: string;
  image: string;
  content: string[];
  comments: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-neural-edit",
    title: "How to Style the Summer Neural Edit",
    author: "Jade Collins",
    date: "12 Dec 2025",
    tags: ["Style", "Guide", "Summer"],
    category: "Trending",
    excerpt: "Layered linen, sunset tones, and a few bold accents to take you from rooftop evenings to late-night hangs.",
    image: "/FeaturedPost/post1.jpg",
    comments: "18",
    content: [
      "Summer 2025 is all about breathable layers and a hit of color. Start with structured linen as your base, then add one saturated accent—a scarf, bag, or sneaker—to pull the look forward.",
      "Keep silhouettes relaxed: wide-leg trousers, soft tees, and a tailored overshirt. Balance it with sharper accessories so the outfit feels intentional, not lazy.",
      "Finish with texture. Woven leather belts, matte metal eyewear, and soft canvas sneakers add depth without heat.",
    ],
  },
  {
    slug: "capsule-to-weekend",
    title: "Build a Capsule that Works for Weekends",
    author: "Mina Rodriguez",
    date: "06 Dec 2025",
    tags: ["Capsule", "Minimal", "Weekend"],
    category: "Guide",
    excerpt: "Five pieces, endless looks—how to get dressed fast without looking basic.",
    image: "/FeaturedPost/post2.jpg",
    comments: "12",
    content: [
      "Anchor your capsule with neutrals: a black tee, an ivory button-up, tailored shorts, and a relaxed blazer. Add one playful pattern to break the uniform.",
      "Swap footwear to shift the mood. Chunky sandals for day, clean court sneakers for errands, loafers for dinner.",
      "Repeat outfits with micro-changes—tuck/untuck, roll sleeves, add a scarf. Small tweaks keep the rotation feeling fresh.",
    ],
  },
  {
    slug: "color-pop-essentials",
    title: "Color Pop Essentials for Winter Brights",
    author: "Leo Park",
    date: "28 Nov 2025",
    tags: ["Color", "Winter", "Layering"],
    category: "Inspiration",
    excerpt: "Inject life into cold-weather fits with controlled neon hits and grounded neutrals.",
    image: "/FeaturedPost/post3.jpg",
    comments: "9",
    content: [
      "Pick one pop color per look—electric blue, citrus orange, or acid green—and keep everything else muted.",
      "Use pops on accessories first: beanies, totes, or socks. If it feels right, graduate to outerwear linings or mid-layers.",
      "Texture matters more than ever in winter. Fleece, rib knit, and brushed wool help the color feel rich, not loud.",
    ],
  },
];
