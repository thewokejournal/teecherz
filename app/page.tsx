import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CategoryShowcase from "@/components/sections/CategoryShowcase";
import LivingRoomProducts from "@/components/sections/LivingRoomProducts";
import BedroomProducts from "@/components/sections/BedroomProducts";
import DiningRoomProducts from "@/components/sections/DiningRoomProducts";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OfficeCTA from "@/components/sections/OfficeCTA";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryShowcase />
        <LivingRoomProducts />
        <BedroomProducts />
        <DiningRoomProducts />
        <FeaturedProducts />
        <OfficeCTA />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
