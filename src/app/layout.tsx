import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lipeti - Soluções Digitais Inovadoras',
  description: 'Transformamos suas ideias digitais em realidade. Desenvolvemos sistemas web, sites institucionais, landing pages e automações que impulsionam o crescimento do seu negócio.',
  openGraph: {
    title: 'Lipeti - Soluções Digitais Inovadoras',
    description: 'Transformamos suas ideias digitais em realidade',
    type: 'website',
    url: 'https://lipeti.com.br',
  },
  authors: [
    { name: 'Lipeti' },
    { name: 'Thiago Paiva' },
    { name: 'Thiago Fellipe' },
    { name: 'Thiago Fellipe Santos de Paiva' }
  ],
  other: {
    keywords: 'desenvolvimento web, sistemas web, sites institucionais, landing pages, automações, Lipeti, software, tecnologia, Recife, Brasil, whatsapp, automação de processos, soluções digitais, comprar software, orçamento software, soluções web, orçamento de site',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
