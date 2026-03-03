import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero encargar mi Revolucion Solar. Estoy lista/listo para vivir este ciclo con conciencia y direccion.")}`;

const aspectos = [
  {
    titulo: "Temas del año",
    icono: "📅",
    descripcion: "Nos muestra cuáles serán los temas centrales del ciclo, dónde estará puesta la energía, qué áreas pedirán mayor atención y qué oportunidades de crecimiento se activarán.",
  },
  {
    titulo: "Conciencia y alineación",
    icono: "🧭",
    descripcion: "Trabajar con tu Revolución Solar no es para \"anticipar el futuro\", sino para atravesar el año con mayor conciencia, alineación y coherencia.",
  },
  {
    titulo: "De reaccionar a crear",
    icono: "🌱",
    descripcion: "Cuando sabés qué energía está disponible, podés usarla a tu favor. En lugar de reaccionar, empezás a crear.",
  },
];

export default function RevolucionSolar() {
  useSeo("Revolución Solar", "Conocé el mapa energético de tu nuevo año solar y viví cada ciclo con conciencia y dirección.");
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mb-14 max-w-3xl animate-fade-in-up">
        <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
          Ciclo Anual
        </p>
        <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-5xl mb-6 leading-tight">
          Revolución Solar
        </h1>
        <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
          La Revolución Solar es el mapa energético de tu año personal, desde un cumpleaños al siguiente.
        </p>
      </section>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up">
        {aspectos.map((a) => (
          <article key={a.titulo} className="alma-card rounded-xl p-8 transition-all">
            <div className="text-4xl mb-5">{a.icono}</div>
            <h2 className="font-serifDisplay text-xl text-[#B8593A] mb-3">{a.titulo}</h2>
            <p className="text-sm leading-relaxed text-[#5C3522]/75">{a.descripcion}</p>
          </article>
        ))}
      </div>

      {/* Cierre */}
      <section className="mt-16 alma-card rounded-xl p-10 max-w-3xl animate-fade-in-up">
        <p className="text-base leading-relaxed text-[#5C3522]/80 sm:text-lg mb-8">
          Es una herramienta de claridad y dirección para que tu año no pase por vos… sino que lo vivas de manera activa y consciente.
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
          Encargar mi Revolución
        </a>
      </section>
    </PageLayout>
  );
}
