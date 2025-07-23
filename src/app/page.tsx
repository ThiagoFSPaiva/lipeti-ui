



import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>

      <div className="min-h-screen bg-white overflow-hidden">
        <Header />
        <Hero />
        <Services />
        <About />
        <Solutions />
        {/* <Portfolio /> */}
        <WhatsAppFloat />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}