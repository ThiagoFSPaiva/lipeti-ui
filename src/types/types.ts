import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}