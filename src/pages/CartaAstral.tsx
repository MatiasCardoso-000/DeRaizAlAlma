import { Link } from "react-router-dom";
import Header from "../components/Header";

const componentesCarta = [
  {
    id: "ascendente",
    titulo: "Ascendente",
    descripcion: "Es el signo del Zodíaco que se encuentra en el Horizonte Este en el momento preciso del nacimiento. Representa la personalidad, el 'yo' externo y cómo nos mostramos al mundo. Es el punto de partida de las doce casas astrológicas.",
    icono: "🌅"
  },
  {
    id: "planetas",
    titulo: "Planetas",
    descripcion: "En astrología, los planetas (incluyendo al Sol y la Luna) son los 'actores' o funciones psicológicas. Cada uno representa una fuerza vital: el Sol la identidad, la Luna las emociones, Mercurio la comunicación, etc.",
    icono: "🪐"
  },
  {
    id: "casas",
    titulo: "Casas Astrológicas",
    descripcion: "Son doce ámbitos de la actividad humana o escenarios de vida. Se calculan basándose en el lugar y hora de nacimiento. Cada casa representa un área específica: las finanzas, la familia, la profesión, las relaciones, etc.",
    icono: "🏠"
  },
  {
    id: "signos",
    titulo: "Signos Zodiacales",
    descripcion: "Divisiones de la eclíptica en doce sectores de 30°. Cada signo tiene un significado simbólico y se asocia con un elemento (Fuego, Tierra, Aire, Agua). Dan el 'tono' o cualidad a los planetas situados en ellos.",
    icono: "♈"
  },
  {
    id: "aspectos",
    titulo: "Aspectos",
    descripcion: "Son las distancias angulares o ángulos que se forman entre los planetas. Indican cómo fluye la energía entre las diferentes funciones psicológicas, pudiendo ser fluidos o de tensión (desafíos).",
    icono: "📐"
  }
];

export default function CartaAstral() {
  return (
    <div className="min-h-screen bg-night text-[#f8e8c5] selection:bg-[#d5b67a]/30">
      <div className="fondo-estelar relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 inline-block rounded-full border border-[#d5b67a]/45 bg-[#1b1730]/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c77f]">
              Conocimiento Milenario
            </p>
            <h1 className="font-serifDisplay text-4xl text-[#f7dfb1] sm:text-5xl md:text-6xl mb-6">
              La Carta Astral
            </h1>
            <p className="text-base leading-relaxed text-[#e8dcc8]/90 sm:text-lg">
              También conocida como mapa natal, es un diagrama que representa las posiciones
              planetarias en el momento exacto de tu nacimiento. Es una guía para entender
              tus dones, desafíos y el propósito de tu alma en esta tierra.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {componentesCarta.map((item) => (
              <article
                key={item.id}
                className="astro-card rounded-3xl border border-[#d5b67a]/20 p-8 shadow-aura transition-transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-6">{item.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-4">
                  {item.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-[#dacfb8]/85">
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 astro-card rounded-[2rem] border border-[#d5b67a]/30 p-10 text-center max-w-4xl mx-auto">
            <h2 className="font-serifDisplay text-3xl text-[#f2c77f] mb-6">¿Qué necesitas para calcularla?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-[#0f1327]/50 border border-[#d5b67a]/10">
                <p className="font-bold text-[#f7dfb1]">Fecha</p>
                <p className="text-xs text-[#dacfb8]/70">Día, mes y año de nacimiento</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0f1327]/50 border border-[#d5b67a]/10">
                <p className="font-bold text-[#f7dfb1]">Hora Exacta</p>
                <p className="text-xs text-[#dacfb8]/70">Indispensable para el Ascendente</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0f1327]/50 border border-[#d5b67a]/10">
                <p className="font-bold text-[#f7dfb1]">Lugar</p>
                <p className="text-xs text-[#dacfb8]/70">Ciudad y país de origen</p>
              </div>
            </div>
            <button className="mt-10 rounded-full bg-gradient-to-r from-[#d5b67a] to-[#f2c77f] px-10 py-4 text-sm font-bold uppercase tracking-[0.17em] text-[#2b1f16] shadow-[0_8px_30px_rgba(242,199,127,0.35)] transition hover:brightness-110">
              Obtener mi Carta Astral
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
