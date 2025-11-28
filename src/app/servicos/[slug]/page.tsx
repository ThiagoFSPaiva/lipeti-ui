import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '@/app/constants/constants';
import { ServiceDetail } from '@/app/components/ServiceDetail';
import { ServiceItem } from '@/types/types';



type Params = { params: { slug: string } };

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // IMPORTANTE: await params antes de acessar suas propriedades
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

// Tornar o componente async e aguardar params também evita o erro
export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service as ServiceItem} />;
}