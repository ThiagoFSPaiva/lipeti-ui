export function Differentials() {
  return (
    <section className="py-20 px-6 text-center bg-indigo-100" id="differentials">
      <h2 className="text-3xl font-semibold text-indigo-800 mb-10">Por que escolher a Lipeti?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          "Design UI/UX de alto nível",
          "Entrega rápida e comunicação clara",
          "Foco em resultados reais para o cliente",
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow">
            <p className="text-gray-800 text-lg">✅ {item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
