import HeroSection from "@/components/herosection/HeroSection";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonils";


export default function Home() {
  return (
    <div className="min-h-screen ">
      <HeroSection />
      <Marquee/>
      <Testimonials/>

    </div>
  );
}