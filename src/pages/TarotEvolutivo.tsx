import { Link } from "react-router-dom";
import Header from "../components/Header";

const clavesTarot = [
  {
    titulo: "Enfoque en el Presente",
    descripcion: "Se concentra en el «aquí y ahora» y en las acciones que puedes tomar hoy, diferenciándose del tarot predictivo que se enfoca en sucesos futuros.",
    icono: "⏳"
  },
  {
    titulo: "Empoderamiento",
    descripcion: "Te posicionas como cocreador de tu futuro, utilizando la lectura para tomar las riendas de tu vida y elegir con conciencia.",
    icono: "👑"
  },
  {
    titulo: "Herramienta Psicoterapéutica",
    descripcion: "Funciona como un espejo para identificar bloqueos, patrones repetitivos y potenciar tus habilidades personales latentes.",
    icono: "🕯️"
  },
  {
    titulo: "Autoconocimiento",
    descripcion: "Busca entender el «por qué» de las situaciones, promoviendo la introspección y la reflexión profunda sobre tu proceso evolutivo.",
    icono: "🧘"
  }
];

export default function TarotEvolutivo() {
  return (
    <div className="min-h-screen bg-night text-[#f8e8c5] selection:bg-[#d5b67a]/30 font-body">
      <div className="fondo-estelar relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 inline-block rounded-full border border-[#d5b67a]/45 bg-[#1b1730]/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c77f]">
              Conciencia y Evolución
            </p>
            <h1 className="font-serifDisplay text-4xl text-[#f7dfb1] sm:text-5xl md:text-6xl mb-6">
              Tarot Evolutivo
            </h1>
            <p className="text-base leading-relaxed text-[#e8dcc8]/90 sm:text-lg">
              Una herramienta terapéutica centrada en tu crecimiento personal.
              A través de arquetipos, exploramos el inconsciente para comprender procesos internos,
              desbloquear situaciones y tomar decisiones conscientes.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {clavesTarot.map((clave, index) => (
              <article
                key={index}
                className="astro-card rounded-3xl border border-[#d5b67a]/20 p-8 shadow-aura transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{clave.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">
                  {clave.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-[#dacfb8]/85">
                  {clave.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 astro-card rounded-[2rem] border border-[#d5b67a]/30 p-10 text-center max-w-3xl mx-auto">
            <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">¿Qué te dice tu inconsciente?</h2>
            <p className="text-[#dacfb8]/80 mb-8 max-w-2xl mx-auto">
              El tarot no predice tu destino, te ayuda a crearlo.
              Descubre las llaves que ya tienes para abrir las puertas de tu evolución.
            </p>
            <button className="rounded-full bg-gradient-to-r from-[#d5b67a] to-[#f2c77f] px-10 py-4 text-sm font-bold uppercase tracking-[0.17em] text-[#2b1f16] shadow-[0_8px_30px_rgba(242,199,127,0.35)] transition hover:brightness-110">
              Solicitar Lectura
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
