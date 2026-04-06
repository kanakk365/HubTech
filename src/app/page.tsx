import Navbar from "@/components/Common/Navbar";
import { HeroSection } from "@/components/Home/Hero";
import Contact from "@/components/Home/Contact";
import { HeroSectionNew } from "@/components/Home/HeroNew";
import Footer from "@/components/Common/Footer";
import { JoinUs } from "@/components/Home/JoinUs";
import { ServicesSection } from "@/components/Home/Services";
import { ProductsScrollSection } from "@/components/Home/ProductsScroll";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSectionNew />
      <HeroSection/>
      <ServicesSection />
      <ProductsScrollSection />
      <Contact />
      <JoinUs />
      <Footer />
    </div>
  );
}
