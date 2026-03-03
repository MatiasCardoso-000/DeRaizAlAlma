import Header from "../components/Header";

const componentesCarta = [
  { id: "ascendente", titulo: "Ascendente",        icono: "🌅", descripcion: "Es el signo del Zodíaco que se encuentra en el Horizonte Este en el momento preciso del nacimiento. Representa la personalidad, el \'yo\' externo y cómo nos mostramos al mundo. Es el punto de partida de las doce casas astrológicas." },
  { id: "planetas",   titulo: "Planetas",           icono: "🪐", descripcion: "En astrología, los planetas (incluyendo al Sol y la Luna) son los \'actores\' o funciones psicológicas. Cada uno representa una fuerza vital: el Sol la identidad, la Luna las emociones, Mercurio la comunicación, etc." },
  { id: "casas",      titulo: "Casas Astrológicas", icono: "🏠", descripcion: "Son doce ámbitos de la actividad humana o escenarios de vida. Se calculan basándose en el lugar y hora de nacimiento. Cada casa representa un área específica: las finanzas, la familia, la profesión, las relaciones, etc." },
  { id: "signos",     titulo: "Signos Zodiacales",  icono: "♈", descripcion: "Divisiones de la eclíptica en doce sectores de 30°. Cada signo tiene un significado simbólico y se asocia con un elemento (Fuego, Tierra, Aire, Agua). Dan el \'tono\' o cualidad a los planetas situados en ellos." },
  { id: "aspectos",   titulo: "Aspectos",           icono: "📐", descripcion: "Son las distancias angulares o ángulos que se forman entre los planetas. Indican cómo fluye la energía entre las diferentes funciones psicológicas, pudiendo ser fluidos o de tensión (desafíos)." },
];

export default function CartaAstral() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">

        {/* Hero */}
        <section className="mb-16 animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Conocimiento Milenario
          </p>
          <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-6xl mb-6">
            La Carta Astral
          </h1>
          <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg max-w-2xl">
            También conocida como mapa natal, es un diagrama que representa las posiciones
            planetarias en el momento exacto de tu nacimiento. Es una guía para entender
            tus dones, desafíos y el propósito de tu alma en esta tierra.
          </p>
        </section>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {componentesCarta.map((item) => (
            <article
              key={item.id}
              className="alma-card rounded-3xl p-8 transition-all animate-fade-in-up"
            >
              <div className="text-4xl mb-5">{item.icono}</div>
              <h2 className="font-serifDisplay text-2xl text-[#B8593A] mb-3">{item.titulo}</h2>
              <p className="text-sm leading-relaxed text-[#5C3522]/75">{item.descripcion}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 alma-card rounded-[2rem] p-10 text-center max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] mb-6">¿Qué necesitás para calcularla?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "Fecha",      sub: "Día, mes y año de nacimiento" },
              { label: "Hora Exacta",sub: "Indispensable para el Ascendente" },
              { label: "Lugar",      sub: "Ciudad y país de origen" },
            ].map((d) => (
              <div key={d.label} className="p-4 rounded-2xl bg-[#EDE0CF]/60 border border-[#B8593A]/15">
                <p className="font-bold text-[#3A2415]">{d.label}</p>
                <p className="text-xs text-[#5C3522]/60 mt-1">{d.sub}</p>
              </div>
            ))}
          </div>
          <button className="btn-terracota mt-10 px-10 py-4">Obtener mi Carta Astral</button>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-[#B8593A]/12 text-center">
        <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
      </footer>
    </div>
  );
}
