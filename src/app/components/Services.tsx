import Link from "next/link";
import { SERVICES } from "@/app/constants/constants";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lipeti-900 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-lipeti-400 font-medium tracking-wider uppercase mb-3 text-sm">
            Nossas Soluções
          </h2>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Tecnologia avançada para <br /> resultados reais
          </h3>

          <p className="text-gray-400">
            Da concepção ao deploy, a Lipeti entrega produtos digitais que unem estética e funcionalidade.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="group relative bg-dark-800 border border-white/5 hover:border-lipeti-500/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lipeti-900/20 overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lipeti-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex-1">
                <div className="w-12 h-12 bg-dark-950 rounded-lg flex items-center justify-center border border-white/10 mb-6 group-hover:bg-royal-600 group-hover:border-royal-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-lipeti-400 group-hover:text-white" />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* <Link
                href={`/servicos/${service.slug}`}
                className="relative z-10 inline-flex items-center text-sm font-medium text-lipeti-400 group-hover:text-lipeti-300 mt-auto"
              >
                Saiba mais
                <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};