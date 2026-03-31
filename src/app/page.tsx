import Navbar from "@/components/Common/Navbar";

import Contact from "@/components/Home/Contact";
import { HeroSection } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/OurProjects";
import Footer from "@/components/Common/Footer";
import { JoinUs } from "@/components/Home/JoinUs";
import { ServicesSection } from "@/components/Home/Services";
import { ProductsScrollSection } from "@/components/Home/ProductsScroll";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsScrollSection />
      <Projects />
      <Contact />
      <JoinUs />
      <Footer />
    </div>
  );
}
