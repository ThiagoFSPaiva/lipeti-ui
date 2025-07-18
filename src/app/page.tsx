import Image from "next/image";
import { Hero } from "./components/Hero";
import { Differentials } from "./components/Differenctials";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimontials";
import { Contact } from "./components/Contact";
import { Services } from "./components/Services";
import Head from "next/head";
import { Navbar } from "./components/NavBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lipeti | Soluções Digitais</title>
        <meta name="description" content="Soluções digitais modernas para impulsionar sua empresa. Criação de sites, sistemas e automações sob medida." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-gradient-to-b from-white to-indigo-50">
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}