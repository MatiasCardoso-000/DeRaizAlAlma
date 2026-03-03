import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero conocer mi Carta Astral. Estoy lista/listo para descubrir el mapa de mi alma.")}`;

const aspectos = [
  {
    id: "exploracion",
    titulo: "Tus dones y desafíos",
    icono: "✨",
    descripcion: "A través de ella exploramos tus dones, tus desafíos, tus patrones emocionales y las experiencias que tu alma eligió transitar para evolucionar.",
  },
  {
    id: "comprension",
    titulo: "Patrones que se repiten",
    icono: "🔄",
    descripcion: "Nos permite comprender por qué ciertas situaciones se repiten, qué energías te impulsan y cuáles necesitan ser integradas.",
  },
  {
    id: "vinculos",
    titulo: "Vínculos y espejos",
    icono: "🪞",
    descripcion: "La misma nos dice como sos en la vida, en los vínculos y porque ciertas personas se acercan a vos como espejo para evolucionar.",
  },
];

export default function CartaAstral() {
  useSeo("Carta Astral", "Descubrí tus dones, desafíos y propósito con tu carta astral. Un mapa energético profundo de tu alma.");
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mb-14 max-w-3xl animate-fade-in-up">
        <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
          Conocimiento Milenario
        </p>
        <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-5xl mb-6 leading-tight">
          La Carta Astral
        </h1>
        <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg mb-3">
          La Carta Astral es el mapa de tu alma al momento de tu nacimiento.
        </p>
        <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
          No es un destino fijo, sino una guía de conciencia.
        </p>
      </section>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up">
        {aspectos.map((item) => (
          <article key={item.id} className="alma-card rounded-xl p-8 transition-all">
            <div className="text-4xl mb-5">{item.icono}</div>
            <h2 className="font-serifDisplay text-xl text-[#B8593A] mb-3">{item.titulo}</h2>
            <p className="text-sm leading-relaxed text-[#5C3522]/75">{item.descripcion}</p>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="mt-16 alma-card rounded-xl p-10 max-w-4xl mx-auto animate-fade-in-up">
        <h2 className="font-serifDisplay text-3xl text-[#B8593A] mb-6">¿Qué necesitás para calcularla?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { label: "Fecha",       sub: "Día, mes y año de nacimiento" },
            { label: "Hora Exacta", sub: "Indispensable para el Ascendente" },
            { label: "Lugar",       sub: "Ciudad y país de origen" },
          ].map((d) => (
            <div key={d.label} className="p-4 rounded-lg bg-[#EDE0CF]/60 border border-[#B8593A]/15">
              <p className="font-bold text-[#3A2415]">{d.label}</p>
              <p className="text-xs text-[#5C3522]/60 mt-1">{d.sub}</p>
            </div>
          ))}
        </div>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-terracota mt-10 inline-block px-10 py-4">
          Obtener mi Carta Astral
        </a>
      </section>
    </PageLayout>
  );
}
