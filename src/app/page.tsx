



import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

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