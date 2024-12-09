import Image from "next/image";
import HeroSection from "@/components/heroSection";
import EditorsPick from "@/components/EditorsPick";
import BestSellerProducts from "@/components/BestSellerProducts";
import HeroSectiontwo from "@/components/heroSectiontwo";
import HeroSectionthree from "@/components/heroSectionthree";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EditorsPick />
      <BestSellerProducts />
      <HeroSectiontwo />
      <HeroSectionthree />
      <FeaturedPosts />
    </>
  );
}
