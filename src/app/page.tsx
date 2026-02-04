import FeaturedCourses from "../components/FeaturedCourses";
import HeroSection from "../components/HeroSection";
import { Spotlight } from "@/src/components/ui/Spotlight";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] pt-20" >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
