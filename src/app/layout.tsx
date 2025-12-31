import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://lipeti.com.br'),
  title: {
    default: 'Lipeti - Soluções Digitais & Automação Web',
    template: '%s | Lipeti'
  },
  description: 'Especialistas em desenvolvimento de software, automação de WhatsApp e estratégias digitais. Transformamos visitantes em clientes com tecnologia de ponta.',
  keywords: ['desenvolvimento web', 'sistemas web', 'automação whatsapp', 'software house recife', 'criação de sites', 'aplicativos mobile', 'lipeti', 'chatbot vendas'],
  authors: [{ name: 'Lipeti Solutions' }],
  creator: 'Lipeti Solutions',
  publisher: 'Lipeti Solutions',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lipeti - Soluções Digitais & Automação',
    description: 'Transformamos suas ideias digitais em realidade com automação e alta performance.',
    url: 'https://lipeti.com.br',
    siteName: 'Lipeti',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Placeholder, user needs to add real token
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://lipeti.com.br/#organization',
        name: 'Lipeti Solutions',
        url: 'https://lipeti.com.br',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lipeti.com.br/logo_white.svg', // Assuming this path based on footer
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55-81-97908-3470',
          contactType: 'sales',
          areaServed: 'BR',
          availableLanguage: ['Portuguese', 'English']
        },
        sameAs: [
          'https://www.linkedin.com/company/lipeti',
          'https://www.instagram.com/lipetisolutions/'
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://lipeti.com.br/#website',
        url: 'https://lipeti.com.br',
        name: 'Lipeti',
        publisher: { '@id': 'https://lipeti.com.br/#organization' },
        inLanguage: 'pt-BR'
      }
    ]
  };

  return (
    <html lang="pt-BR" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
