import { Link } from "react-router-dom";
import Header from "../components/Header";

const aspectosRevolucion = [
  {
    titulo: "«Foto» del cumpleaños",
    descripcion: "Funciona como un mapa natal temporal (un reloj astrológico) que dura exactamente 365 días, marcando el tono de tu nuevo ciclo.",
    icono: "📸"
  },
  {
    titulo: "Temas del año",
    descripcion: "Ayuda a identificar en qué áreas invertir energía: trabajo, amor, viajes o estudio. Revela el enfoque principal de tus próximos 12 meses.",
    icono: "📅"
  },
  {
    titulo: "Puntos fundamentales",
    descripcion: "Se analizan principalmente el Sol, la Luna y el Ascendente anual de la revolución para entender el clima emocional y vital del año.",
    icono: "✨"
  },
  {
    titulo: "Complemento Vital",
    descripcion: "No reemplaza la carta natal, sino que se interpreta en conjunto con ella para entender cómo se manifiestan las energías actuales sobre tu base energética.",
    icono: "🧩"
  }
];

export default function RevolucionSolar() {
  return (
    <div className="min-h-screen bg-night text-[#f8e8c5] selection:bg-[#d5b67a]/30">
      <div className="fondo-estelar relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 inline-block rounded-full border border-[#d5b67a]/45 bg-[#1b1730]/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c77f]">
              Ciclo Anual
            </p>
            <h1 className="font-serifDisplay text-4xl text-[#f7dfb1] sm:text-5xl md:text-6xl mb-6">
              Revolución Solar
            </h1>
            <p className="text-base leading-relaxed text-[#e8dcc8]/90 sm:text-lg">
              Es una carta astrológica anual calculada para el momento exacto en que el Sol regresa al mismo punto de tu nacimiento. Actúa como un mapa para tu año, revelando tendencias, oportunidades y desafíos.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {aspectosRevolucion.map((aspecto, index) => (
              <article
                key={index}
                className="astro-card rounded-3xl border border-[#d5b67a]/20 p-8 shadow-aura transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{aspecto.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">
                  {aspecto.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-[#dacfb8]/85">
                  {aspecto.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 astro-card rounded-[2rem] border border-[#d5b67a]/30 p-10 text-center max-w-3xl mx-auto">
            <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">Tu nuevo año comienza aquí</h2>
            <p className="text-[#dacfb8]/80 mb-8 max-w-2xl mx-auto">
              La Revolución Solar te permite anticiparte al clima energético de tu próximo ciclo.
              Ideal para realizar cerca de la fecha de tu cumpleaños.
            </p>
            <button className="rounded-full bg-gradient-to-r from-[#d5b67a] to-[#f2c77f] px-10 py-4 text-sm font-bold uppercase tracking-[0.17em] text-[#2b1f16] shadow-[0_8px_30px_rgba(242,199,127,0.35)] transition hover:brightness-110">
              Encargar mi Revolución
            </button>
          </section>
        </main>

        <footer className="mt-20 py-10 border-t border-[#d5b67a]/10 text-center">
          <p className="text-xs uppercase tracking-widest text-[#cbb996]/50">
            De Raiz al Alma • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
