import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lipeti - Soluções Digitais Inovadoras',
  description: 'Transformamos suas ideias digitais em realidade. Desenvolvemos sistemas web, sites institucionais, landing pages e automações que impulsionam o crescimento do seu negócio.',
  keywords: 'desenvolvimento web, sistemas web, sites institucionais, landing pages, automações, Lipeti',
  authors: [{ name: 'Lipeti' }],
  openGraph: {
    title: 'Lipeti - Soluções Digitais Inovadoras',
    description: 'Transformamos suas ideias digitais em realidade',
    type: 'website',
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
