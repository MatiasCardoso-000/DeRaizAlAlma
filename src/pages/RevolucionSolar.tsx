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
    <div className="min-h-screen bg-tierra text-arena selection:bg-terracota/30">
      <div className="fondo-terroso relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto animate-fade-in-up">
            <p className="mb-4 inline-block rounded-full border border-terracota/40 bg-marron/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-terracota">
              Ciclo Anual
            </p>
            <h1 className="font-serifDisplay text-4xl text-crema sm:text-5xl md:text-6xl mb-6">
              Revolución Solar
            </h1>
            <p className="text-base leading-relaxed text-arena/85 sm:text-lg">
              Es una carta astrológica anual calculada para el momento exacto en que el Sol regresa al mismo punto de tu nacimiento. Actúa como un mapa para tu año, revelando tendencias, oportunidades y desafíos.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {aspectosRevolucion.map((aspecto, index) => (
              <article
                key={index}
                className="alma-card rounded-3xl border border-terracota/15 p-8 shadow-aura transition-all hover:-translate-y-1 hover:border-terracota/40 animate-fade-in-up"
              >
                <div className="text-4xl mb-6">{aspecto.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-terracota mb-4">
                  {aspecto.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-arena/75">
                  {aspecto.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 alma-card rounded-[2rem] border border-terracota/25 p-10 text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-serifDisplay text-3xl text-terracota mb-4">Tu nuevo año comienza aquí</h2>
            <p className="text-arena/70 mb-8 max-w-2xl mx-auto">
              La Revolución Solar te permite anticiparte al clima energético de tu próximo ciclo.
              Ideal para realizar cerca de la fecha de tu cumpleaños.
            </p>
            <button className="btn-terracota px-10 py-4">
              Encargar mi Revolución
            </button>
          </section>
        </main>

        <footer className="mt-20 py-10 border-t border-terracota/10 text-center">
          <p className="text-xs uppercase tracking-widest text-sage/50">
            De Raíz al Alma • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
