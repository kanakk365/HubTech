import Navbar from "@/components/Common/Navbar";

import Contact from "@/components/Home/Contact";
import { HeroSection } from "@/components/Home/Hero";
import { TechMarquee } from "@/components/Home/TechMarquee";
import { Projects } from "@/components/Home/OurProjects";
import Footer from "@/components/Common/Footer";
import { Cta } from "@/components/Home/Cta";
import { JoinUs } from "@/components/Home/JoinUs";
import { ServicesSection } from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <TechMarquee />

      <ServicesSection />
      <Projects />
      <Contact />
      <Cta/>
      <JoinUs />
      <Footer />
    </div>
  );
}
