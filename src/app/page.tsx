import Navbar from "@/components/Common/Navbar";
import { HeroSection } from "@/components/Home/Hero";
import Contact from "@/components/Home/Contact";
import { HeroLineWaves } from "@/components/Home/HeroLineWaves";
import Footer from "@/components/Common/Footer";
import { JoinUs } from "@/components/Home/JoinUs";
import { ServicesSection } from "@/components/Home/Services";
import { ProductsScrollSection } from "@/components/Home/ProductsScroll";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroLineWaves />
      <HeroSection/>
      <ServicesSection />
      <ProductsScrollSection />
      <Contact />
      <JoinUs />
      <Footer />
    </div>
  );
}
