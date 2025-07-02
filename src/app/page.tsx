import Navbar from "@/components/Common/Navbar";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import CallToAction from "@/components/Home/CallToAction";
import { HeroSection } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/OurProjects";
import Footer from "@/components/Common/Footer";
import WaveAnimation from "@/components/Home/Wave";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <CallToAction />
      <Footer />
      <WaveAnimation/>
    </div>
  );
}
