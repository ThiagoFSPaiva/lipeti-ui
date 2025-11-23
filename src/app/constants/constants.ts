import { 
  Code2, 
  Cpu, 
  Globe, 
  LayoutDashboard, 
  MessageSquareCode, 
  Smartphone, 
  Zap,
  ShieldCheck,
  Rocket,
  Search,
  Palette,
  Server,
  Clock,
  DollarSign,
  Headphones
} from 'lucide-react';
import { NavItem, ServiceItem, StatItem, TestimonialItem } from '../../types/types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Início', href: '/#hero' },
  { label: 'Serviços', href: '/#services' },
  { label: 'Processo', href: '/#process' },
  { label: 'Diferenciais', href: '/#why-us' },
  { label: 'FAQ', href: '/#faq' },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    description: 'Sites institucionais, landing pages de alta conversão e plataformas web robustas com tecnologias modernas.',
    longDescription: 'Criamos experiências web que não são apenas bonitas, mas funcionalmente impecáveis. Nosso foco é desenvolver sites institucionais e plataformas que carregam instantaneamente, são otimizadas para SEO e convertem visitantes em clientes. Utilizamos Next.js, React e Tailwind CSS para garantir que seu site esteja à frente da concorrência.',
    features: [
      'Design responsivo para todos os dispositivos',
      'Otimização avançada para motores de busca (SEO)',
      'Integração com CMS para fácil gerenciamento',
      'Performance de carregamento inferior a 2 segundos'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    icon: Globe,
  },
  {
    slug: 'sistemas-sob-medida',
    title: 'Sistemas Sob Medida',
    description: 'Dashboards, CRMs e ERPs personalizados para otimizar a gestão e os processos da sua empresa.',
    longDescription: 'Esqueça planilhas complexas e softwares genéricos que não atendem suas necessidades. Desenvolvemos sistemas de gestão (ERPs), CRMs e painéis administrativos desenhados especificamente para o fluxo de trabalho da sua empresa. Centralize dados, automatize relatórios e tome decisões baseadas em métricas reais.',
    features: [
      'Painéis administrativos intuitivos',
      'Controle de acesso e permissões granulares',
      'Relatórios em tempo real e exportação de dados',
      'Segurança de dados de nível bancário'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    icon: LayoutDashboard,
  },
  {
    slug: 'automacao-ia',
    title: 'Automação & IA',
    description: 'Integração de inteligência artificial e bots para automatizar atendimento e tarefas repetitivas.',
    longDescription: 'Aumente a produtividade da sua equipe delegando tarefas repetitivas para robôs inteligentes. Implementamos soluções de Inteligência Artificial e automação de processos (RPA) que funcionam 24/7. Desde chatbots de atendimento até processamento automático de notas fiscais, a tecnologia trabalha para você.',
    features: [
      'Chatbots com processamento de linguagem natural',
      'Automação de processos repetitivos (RPA)',
      'Integração com WhatsApp e Telegram',
      'Análise preditiva de dados'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop',
    icon: Cpu,
  },
  {
    slug: 'aplicativos-mobile',
    title: 'Aplicativos Mobile',
    description: 'Desenvolvimento de apps nativos e híbridos (iOS e Android) focados em experiência do usuário.',
    longDescription: 'Coloque sua empresa no bolso do seu cliente. Desenvolvemos aplicativos móveis para iOS e Android utilizando tecnologias híbridas modernas (como React Native e Flutter) que garantem performance de app nativo com menor custo e tempo de desenvolvimento. Focamos em usabilidade (UX) para garantir altas taxas de retenção.',
    features: [
      'Apps para iOS e Android (Cross-platform)',
      'Design de interface (UI) moderno e intuitivo',
      'Notificações Push e Geolocalização',
      'Publicação e gestão nas lojas (App Store e Play Store)'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop',
    icon: Smartphone,
  },
  {
    slug: 'consultoria-tech',
    title: 'Consultoria Tech',
    description: 'Análise técnica e estruturação de projetos digitais para escalar o seu negócio com segurança.',
    longDescription: 'Não sabe qual tecnologia usar ou como escalar seu produto atual? Nossa consultoria técnica oferece um diagnóstico completo da sua infraestrutura. Ajudamos CTOs e fundadores a tomar decisões arquiteturais corretas, reduzir custos de nuvem (AWS/Azure) e preparar o terreno para o crescimento acelerado.',
    features: [
      'Diagnóstico de arquitetura de software',
      'Otimização de custos em nuvem (Cloud)',
      'Auditoria de segurança e código',
      'Planejamento de escalabilidade'
    ],
    image: 'https://images.unsplash.com/photo-1553877615-30c73a63ce44?q=80&w=2000&auto=format&fit=crop',
    icon: MessageSquareCode,
  },
  {
    slug: 'apis-integracoes',
    title: 'APIs & Integrações',
    description: 'Conectamos seus sistemas favoritos para criar um ecossistema digital fluido e eficiente.',
    longDescription: 'Sistemas isolados geram retrabalho. Nós construímos as pontes digitais (APIs) que conectam seu e-commerce ao seu ERP, seu CRM ao seu marketing e seus meios de pagamento ao seu banco. Criamos ecossistemas fluidos onde a informação trafega automaticamente entre todas as suas ferramentas.',
    features: [
      'Desenvolvimento de APIs RESTful e GraphQL',
      'Integração de Gateways de Pagamento',
      'Conexão entre sistemas legados e modernos',
      'Webhooks e sincronização em tempo real'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef526b00ecd2?q=80&w=2000&auto=format&fit=crop',
    icon: Code2,
  },
];

export const STATS: StatItem[] = [
  { label: 'Projetos Entregues', value: '+150' },
  { label: 'Anos de Mercado', value: '5' },
  { label: 'Satisfação', value: '98%' },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Carlos Mendes',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'A Lipeti transformou completamente nossa infraestrutura digital. O sistema que desenvolveram automatizou 70% dos nossos processos internos.',
    image: 'https://picsum.photos/id/1005/100/100',
  },
  {
    name: 'Ana Oliveira',
    role: 'Fundadora',
    company: 'StartUp Nexus',
    content: 'Profissionalismo do início ao fim. O design do nosso aplicativo ficou incrível e a performance é impecável. Recomendo fortemente.',
    image: 'https://picsum.photos/id/338/100/100',
  },
  {
    name: 'Ricardo Santos',
    role: 'Diretor de Ops',
    company: 'Logística Express',
    content: 'A consultoria deles foi um divisor de águas. Conseguimos identificar gargalos que nem sabíamos que existiam. Parceiros estratégicos.',
    image: 'https://picsum.photos/id/64/100/100',
  },
];

export const FEATURES = [
  {
    title: 'Performance Extrema',
    description: 'Códigos otimizados para velocidade máxima.',
    icon: Zap,
  },
  {
    title: 'Segurança de Dados',
    description: 'Protocolos rígidos de proteção e criptografia.',
    icon: ShieldCheck,
  },
  {
    title: 'Escalabilidade',
    description: 'Sistemas preparados para crescer com você.',
    icon: Rocket,
  },
];

export const PROCESS_STEPS = [
  {
    title: 'Descoberta e Planejamento',
    description: 'Tudo começa com uma análise detalhada do seu negócio. Aqui, identificamos desafios, requisitos específicos e objetivos claros.',
    icon: Search
  },
  {
    title: 'Design UI/UX',
    description: 'A experiência do usuário é uma prioridade. Criamos protótipos e wireframes para estruturar a interface do software.',
    icon: Palette
  },
  {
    title: 'Desenvolvimento Ágil',
    description: 'Dividimos o projeto em etapas menores para garantir a qualidade. Você acompanha o progresso e pode sugerir ajustes em tempo real.',
    icon: Globe
  },
  {
    title: 'Implementação',
    description: 'Após a conclusão dos testes, instalamos o software no ambiente de produção e garantimos uma transição tranquila.',
    icon: Server
  }
];

export const WHY_US_POINTS = [
  'Sites web de alta performance',
  'Aplicativos intuitivos e modernos',
  'Consultoria estratégica',
  'Outsourcing de TI qualificado',
  'Alocação de profissionais experientes'
];

export const FAQ_ITEMS = [
  {
    question: 'O que é um software sob demanda?',
    answer: 'Um software sob medida é uma solução criada especialmente para atender às necessidades específicas de uma empresa ou pessoa. Ao invés de usar um programa genérico, esse tipo de software é feito para se ajustar exatamente aos processos e desafios de quem o utiliza.'
  },
  {
    question: 'Quanto tempo leva o desenvolvimento de software?',
    answer: 'Não podemos fornecer uma resposta exata sem antes avaliar o projeto, pois alguns podem ser concluídos em 2 a 3 semanas, enquanto outros podem levar meses. Para dar um prazo preciso, precisamos entender a complexidade e o escopo do trabalho.',
    icon: Clock
  },
  {
    question: 'Quanto custará o trabalho da Lipeti?',
    answer: 'Em nossa empresa, a remuneração é baseada na complexidade do projeto e nas tecnologias empregadas. Fazemos um orçamento personalizado para garantir o melhor custo-benefício para o seu negócio.',
    icon: DollarSign
  },
  {
    question: 'Tenho direito a Suporte e Atualizações?',
    answer: 'Sim! Oferecemos períodos de garantia e pacotes de manutenção contínua para garantir que seu software esteja sempre seguro e atualizado com as últimas tecnologias.',
    icon: Headphones
  }
];