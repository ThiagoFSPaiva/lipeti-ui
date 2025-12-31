import Contact from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhyUs } from "./components/WhyUs";





export default function Home() {
    return (
      <>
     
      <WhatsAppButton />

        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <WhyUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </>
    );
}