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
    <div className="min-h-screen bg-tierra text-arena selection:bg-terracota/30 font-body">
      <div className="fondo-terroso relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto animate-fade-in-up">
            <p className="mb-4 inline-block rounded-full border border-terracota/40 bg-marron/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-terracota">
              Conciencia y Evolución
            </p>
            <h1 className="font-serifDisplay text-4xl text-crema sm:text-5xl md:text-6xl mb-6">
              Tarot Evolutivo
            </h1>
            <p className="text-base leading-relaxed text-arena/85 sm:text-lg">
              Una herramienta terapéutica centrada en tu crecimiento personal.
              A través de arquetipos, exploramos el inconsciente para comprender procesos internos,
              desbloquear situaciones y tomar decisiones conscientes.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {clavesTarot.map((clave, index) => (
              <article
                key={index}
                className="alma-card rounded-3xl border border-terracota/15 p-8 shadow-aura transition-all hover:-translate-y-1 hover:border-terracota/40 animate-fade-in-up"
              >
                <div className="text-4xl mb-6">{clave.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-terracota mb-4">
                  {clave.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-arena/75">
                  {clave.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 alma-card rounded-[2rem] border border-terracota/25 p-10 text-center max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-serifDisplay text-3xl text-terracota mb-4">¿Qué te dice tu inconsciente?</h2>
            <p className="text-arena/70 mb-8 max-w-2xl mx-auto">
              El tarot no predice tu destino, te ayuda a crearlo.
              Descubre las llaves que ya tienes para abrir las puertas de tu evolución.
            </p>
            <button className="btn-terracota px-10 py-4">
              Solicitar Lectura
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
