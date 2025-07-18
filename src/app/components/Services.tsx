export function Services() {
  return (
    <section className="py-20 px-6 bg-white text-center" id="services">
      <h2 className="text-3xl font-semibold text-indigo-700 mb-10">Serviços</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { title: "Criação de Sites", desc: "Sites modernos, rápidos e com excelente experiência de usuário." },
          { title: "Sistemas sob Medida", desc: "Plataformas e painéis para automatizar e gerenciar o seu negócio." },
          { title: "Automatizações", desc: "Soluções que economizam tempo e reduzem erros operacionais." },
        ].map(({ title, desc }, i) => (
          <div key={i} className="p-6 rounded-2xl shadow bg-indigo-50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}