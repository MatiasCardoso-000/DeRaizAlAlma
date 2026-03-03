import { Link } from "react-router-dom";
import Header from "../components/Header";

const aspectosConstelaciones = [
  {
    titulo: "Propósito",
    descripcion: "Su objetivo principal es abordar conflictos actuales como problemas de pareja, salud o dinero al explorar las raíces ancestrales y las lealtades invisibles dentro del sistema familiar, permitiendo desatar nudos emocionales que han persistido a través de varias generaciones.",
    icono: "🌳"
  },
  {
    titulo: "Metodología",
    descripcion: "Se utilizan representantes (personas o figuras) para recrear el mapa familiar y visualizar dinámicas ocultas que antes eran invisibles.",
    icono: "👥"
  },
  {
    titulo: "Fundamento Sistémico",
    descripcion: "Se basa en que los problemas no resueltos de los ancestros pueden influir en generaciones actuales, buscando el equilibrio al dar un lugar a cada miembro.",
    icono: "🔄"
  },
  {
    titulo: "Sesiones",
    descripcion: "Pueden ser grupales con representantes humanos o individuales utilizando elementos como muñecos o papeles para representar al sistema.",
    icono: "✨"
  }
];

export default function Constelaciones() {
  return (
    <div className="min-h-screen bg-night text-[#f8e8c5] selection:bg-[#d5b67a]/30">
      <div className="fondo-estelar relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 inline-block rounded-full border border-[#d5b67a]/45 bg-[#1b1730]/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c77f]">
              Orden y Sanación
            </p>
            <h1 className="font-serifDisplay text-4xl text-[#f7dfb1] sm:text-5xl md:text-6xl mb-6">
              Constelaciones Familiares
            </h1>
            <p className="text-base leading-relaxed text-[#e8dcc8]/90 sm:text-lg">
              Un método terapéutico sistémico diseñado para identificar y resolver conflictos o patrones
              heredados. Busca "hacer visible lo invisible" para que puedas ordenar tu sistema y
              alcanzar un mayor bienestar emocional.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2">
            {aspectosConstelaciones.map((aspecto, index) => (
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
            <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">¿Sientes que repites una historia?</h2>
            <p className="text-[#dacfb8]/80 mb-8">
              A veces cargamos con pesos que no nos pertenecen. Las constelaciones te permiten mirar con amor
              hacia atrás para poder caminar con libertad hacia adelante.
            </p>
            <button className="rounded-full bg-gradient-to-r from-[#d5b67a] to-[#f2c77f] px-10 py-4 text-sm font-bold uppercase tracking-[0.17em] text-[#2b1f16] shadow-[0_8px_30px_rgba(242,199,127,0.35)] transition hover:brightness-110">
              Agendar mi Constelación
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
