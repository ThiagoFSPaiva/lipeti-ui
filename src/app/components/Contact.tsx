export function Contact() {
  return (
    <section className="py-20 px-6 text-center bg-indigo-600 text-white" id="contact">
      <h2 className="text-3xl font-semibold mb-6">Vamos conversar?</h2>
      <p className="text-lg mb-6">Nos chame para tirar ideias do papel. Estamos prontos para criar a solução ideal para você.</p>
      <a
        href="https://wa.me/SEUNUMERO"
        target="_blank"
        className="bg-white text-indigo-700 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition"
      >
        Falar no WhatsApp
      </a>
    </section>
  );
}