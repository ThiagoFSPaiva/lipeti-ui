import Image from "next/image";




import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      {/* <Portfolio /> */}
      <Testimonials />
      <Contact />
      <Footer />
    </div>
    </>
  );
}