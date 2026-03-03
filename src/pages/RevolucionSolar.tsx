import Header from "../components/Header";

const aspectos = [
  { titulo: "«Foto» del cumpleaños",  icono: "📸", descripcion: "Funciona como un mapa natal temporal (un reloj astrológico) que dura exactamente 365 días, marcando el tono de tu nuevo ciclo." },
  { titulo: "Temas del año",          icono: "📅", descripcion: "Ayuda a identificar en qué áreas invertir energía: trabajo, amor, viajes o estudio. Revela el enfoque principal de tus próximos 12 meses." },
  { titulo: "Puntos fundamentales",   icono: "✨", descripcion: "Se analizan principalmente el Sol, la Luna y el Ascendente anual de la revolución para entender el clima emocional y vital del año." },
  { titulo: "Complemento Vital",      icono: "🧩", descripcion: "No reemplaza la carta natal, sino que se interpreta en conjunto con ella para entender cómo se manifiestan las energías actuales sobre tu base energética." },
];

export default function RevolucionSolar() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">

        {/* Hero */}
        <section className="mb-14 text-center max-w-3xl mx-auto animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Ciclo Anual
          </p>
          <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-6xl mb-6">
            Revolución Solar
          </h1>
          <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
            Es una carta astrológica anual calculada para el momento exacto en que el Sol regresa
            al mismo punto de tu nacimiento. Actúa como un mapa para tu año, revelando tendencias,
            oportunidades y desafíos.
          </p>
        </section>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {aspectos.map((a, i) => (
            <article key={i} className="alma-card rounded-3xl p-8 transition-all animate-fade-in-up">
              <div className="text-4xl mb-5">{a.icono}</div>
              <h2 className="font-serifDisplay text-2xl text-[#B8593A] mb-3">{a.titulo}</h2>
              <p className="text-sm leading-relaxed text-[#5C3522]/75">{a.descripcion}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 alma-card rounded-[2rem] p-10 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] mb-4">Tu nuevo año comienza aquí</h2>
          <p className="text-[#5C3522]/70 mb-8 max-w-2xl mx-auto">
            La Revolución Solar te permite anticiparte al clima energético de tu próximo ciclo.
            Ideal para realizar cerca de la fecha de tu cumpleaños.
          </p>
          <button className="btn-terracota px-10 py-4">Encargar mi Revolución</button>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-[#B8593A]/12 text-center">
        <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
      </footer>
    </div>
  );
}
