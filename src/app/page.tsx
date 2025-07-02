
import Navbar from "@/components/Common/Navbar";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import { HeroSection } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/OurProjects";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <About/>
      <Projects/>
      <Contact/>
      
      {/* Features Section */}
      <section id="features" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Feature {i}</h3>
                <p className="text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
              <div key={plan} className="p-8 bg-neutral-800 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">{plan}</h3>
                <p className="text-4xl font-bold text-white mb-6">${(i + 1) * 29}<span className="text-lg text-neutral-400">/mo</span></p>
                <button className="w-full py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:border-white focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-3 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:border-white focus:outline-none h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-white text-black rounded-md font-semibold hover:bg-neutral-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
