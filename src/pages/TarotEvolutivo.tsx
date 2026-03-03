import Header from "../components/Header";

const claves = [
  { titulo: "Enfoque en el Presente",        icono: "⏳", descripcion: "Se concentra en el «aquí y ahora» y en las acciones que puedes tomar hoy, diferenciándose del tarot predictivo que se enfoca en sucesos futuros." },
  { titulo: "Empoderamiento",                icono: "👑", descripcion: "Te posicionas como cocreador de tu futuro, utilizando la lectura para tomar las riendas de tu vida y elegir con conciencia." },
  { titulo: "Herramienta Psicoterapéutica",  icono: "🕯️", descripcion: "Funciona como un espejo para identificar bloqueos, patrones repetitivos y potenciar tus habilidades personales latentes." },
  { titulo: "Autoconocimiento",              icono: "🧘", descripcion: "Busca entender el «por qué» de las situaciones, promoviendo la introspección y la reflexión profunda sobre tu proceso evolutivo." },
];

export default function TarotEvolutivo() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">

        {/* Hero */}
        <section className="mb-14 text-center max-w-3xl mx-auto animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Conciencia y Evolución
          </p>
          <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-6xl mb-6">
            Tarot Evolutivo
          </h1>
          <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
            Una herramienta terapéutica centrada en tu crecimiento personal.
            A través de arquetipos, exploramos el inconsciente para comprender procesos internos,
            desbloquear situaciones y tomar decisiones conscientes.
          </p>
        </section>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {claves.map((c, i) => (
            <article key={i} className="alma-card rounded-3xl p-8 transition-all animate-fade-in-up">
              <div className="text-4xl mb-5">{c.icono}</div>
              <h2 className="font-serifDisplay text-2xl text-[#B8593A] mb-3">{c.titulo}</h2>
              <p className="text-sm leading-relaxed text-[#5C3522]/75">{c.descripcion}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 alma-card rounded-[2rem] p-10 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] mb-4">¿Qué te dice tu inconsciente?</h2>
          <p className="text-[#5C3522]/70 mb-8 max-w-2xl mx-auto">
            El tarot no predice tu destino, te ayuda a crearlo.
            Descubre las llaves que ya tienes para abrir las puertas de tu evolución.
          </p>
          <button className="btn-terracota px-10 py-4">Solicitar Lectura</button>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-[#B8593A]/12 text-center">
        <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
      </footer>
    </div>
  );
}
