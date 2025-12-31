import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/app/constants/constants';
import { ServiceDetail } from '@/app/components/ServiceDetail';
import { ServiceItem } from '@/types/types';

// CORREÇÃO AQUI: No Next.js 15+, params é uma Promise.
// Definimos que params é uma Promessa que resolve para um objeto contendo o slug.
type Props = {
  params: Promise<{ slug: string }>;
};

// Esta função continua síncrona pois gera a lista estática
export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: 'Serviço não encontrado | Lipeti' };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: service.image ? [service.image] : undefined,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  // Await params para extrair o slug de forma segura
  const { slug } = await params;
  
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service as ServiceItem} />;
}