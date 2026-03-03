import { Routes, Route, Link } from "react-router-dom";
import CartaAstral from "./pages/CartaAstral";
import Constelaciones from "./pages/Constelaciones";
import RevolucionSolar from "./pages/RevolucionSolar";
import TarotEvolutivo from "./pages/TarotEvolutivo";
import Header from "./components/Header";

const servicios = [
  {
    titulo: "Carta Astral",
    descripcion:
      "Descubre tus dones, desafíos y propósito con un mapa energético profundo.",
    link: "/carta-astral",
    icono: "🌅"
  },
  {
    titulo: "Revolución Solar",
    descripcion:
      "Activa tu nuevo ciclo anual con claridad para decisiones, relaciones y trabajo.",
    link: "/revolucion-solar",
    icono: "☀️"
  },
  {
    titulo: "Constelación Familiar",
    descripcion:
      "Sana patrones del linaje y recupera tu fuerza vital desde la raíz del alma.",
    link: "/constelaciones",
    icono: "🌳"
  },
  {
    titulo: "Tarot Evolutivo",
    descripcion:
      "Lecturas conscientes para abrir caminos, entender bloqueos y elegir con confianza.",
    link: "/tarot-evolutivo",
    icono: "🕯️"
  },
];

function Home() {
  return (
    <div className="fondo-terroso relative overflow-hidden text-arena">
      <Header />

      <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-8 md:grid-cols-2 md:items-center md:px-10 md:pb-28">
        <section className="animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-terracota/40 bg-marron/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-terracota">
            Constelaciones · Tarot · Astrología
          </p>
          <h1 className="font-serifDisplay text-5xl leading-[0.95] text-crema sm:text-6xl md:text-7xl">
            Guía cósmica para
            <span className="block text-terracota">volver a tu centro</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-arena/85 sm:text-lg">
            Un espacio cálido, elegante y espiritual para leer tu energía actual,
            ordenar tu sistema y crear un nuevo camino con conciencia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-terracota">
              Reservar Turno
            </button>
            <Link to="/carta-astral" className="btn-sage flex items-center">
              Ver Servicios
            </Link>
          </div>
        </section>

        <section className="alma-card rounded-[2rem] border border-terracota/25 p-8 shadow-aura animate-fade-in-up">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full border border-terracota/50 bg-tierra flex items-center justify-center text-xl">
              🌿
            </div>
            <div>
              <p className="font-serifDisplay text-2xl text-terracota">Carta Astral</p>
              <p className="text-sm text-arena/70">Lectura personalizada</p>
            </div>
          </div>

          <div className="constelacion-wheel mx-auto mb-7 animate-pulse-glow" />

          <p className="text-center text-sm leading-relaxed text-arena/80 italic font-serifDisplay">
            "Cuando una persona constela, sana todo su linaje".
          </p>
        </section>
      </main>

      <div className="organic-divider mx-6 md:mx-10" />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serifDisplay text-4xl text-crema sm:text-5xl">
            Sesiones disponibles
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-sage md:block">
            Modalidad online y presencial
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {servicios.map((servicio, i) => (
            <Link
              to={servicio.link || "/"}
              key={servicio.titulo}
              className="group alma-card rounded-3xl border border-terracota/15 p-7 transition-all hover:-translate-y-1 hover:border-terracota/40 hover:shadow-aura animate-fade-in-up"
            >
              <div className="text-3xl mb-4">{servicio.icono}</div>
              <h3 className="font-serifDisplay text-2xl text-crema group-hover:text-terracota transition-colors">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-arena/75">
                {servicio.descripcion}
              </p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-widest text-terracota/70 group-hover:text-terracota transition-colors">
                Explorar →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-10 border-t border-terracota/10 text-center">
        <p className="text-xs uppercase tracking-widest text-sage/50">
          De Raíz al Alma • 2026
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-tierra text-arena selection:bg-terracota/30 font-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carta-astral" element={<CartaAstral />} />
        <Route path="/constelaciones" element={<Constelaciones />} />
        <Route path="/revolucion-solar" element={<RevolucionSolar />} />
        <Route path="/tarot-evolutivo" element={<TarotEvolutivo />} />
      </Routes>
    </div>
  );
}
