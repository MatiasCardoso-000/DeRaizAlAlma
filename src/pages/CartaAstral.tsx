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
    <div className="min-h-screen bg-tierra text-arena selection:bg-terracota/30">
      <div className="fondo-terroso relative overflow-hidden min-h-screen">
        <Header />

        <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <section className="mb-16 text-center max-w-3xl mx-auto animate-fade-in-up">
            <p className="mb-4 inline-block rounded-full border border-terracota/40 bg-marron/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-terracota">
              Conocimiento Milenario
            </p>
            <h1 className="font-serifDisplay text-4xl text-crema sm:text-5xl md:text-6xl mb-6">
              La Carta Astral
            </h1>
            <p className="text-base leading-relaxed text-arena/85 sm:text-lg">
              También conocida como mapa natal, es un diagrama que representa las posiciones
              planetarias en el momento exacto de tu nacimiento. Es una guía para entender
              tus dones, desafíos y el propósito de tu alma en esta tierra.
            </p>
          </section>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {componentesCarta.map((item, i) => (
              <article
                key={item.id}
                className="alma-card rounded-3xl border border-terracota/15 p-8 shadow-aura transition-all hover:-translate-y-1 hover:border-terracota/40 animate-fade-in-up"
              >
                <div className="text-4xl mb-6">{item.icono}</div>
                <h2 className="font-serifDisplay text-3xl text-terracota mb-4">
                  {item.titulo}
                </h2>
                <p className="text-sm leading-relaxed text-arena/75">
                  {item.descripcion}
                </p>
              </article>
            ))}
          </div>

          <section className="mt-20 alma-card rounded-[2rem] border border-terracota/25 p-10 text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="font-serifDisplay text-3xl text-terracota mb-6">¿Qué necesitas para calcularla?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-4 rounded-2xl bg-tierra/50 border border-terracota/10">
                <p className="font-bold text-crema">Fecha</p>
                <p className="text-xs text-arena/60">Día, mes y año de nacimiento</p>
              </div>
              <div className="p-4 rounded-2xl bg-tierra/50 border border-terracota/10">
                <p className="font-bold text-crema">Hora Exacta</p>
                <p className="text-xs text-arena/60">Indispensable para el Ascendente</p>
              </div>
              <div className="p-4 rounded-2xl bg-tierra/50 border border-terracota/10">
                <p className="font-bold text-crema">Lugar</p>
                <p className="text-xs text-arena/60">Ciudad y país de origen</p>
              </div>
            </div>
            <button className="btn-terracota mt-10 px-10 py-4">
              Obtener mi Carta Astral
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
