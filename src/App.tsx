import { Routes, Route, Link } from "react-router-dom";
import CartaAstral from "./pages/CartaAstral";
import Constelaciones from "./pages/Constelaciones";
import RevolucionSolar from "./pages/RevolucionSolar";
import TarotEvolutivo from "./pages/TarotEvolutivo";
import Header from "./components/Header";

const servicios = [
  { titulo: "Carta Astral",           descripcion: "Descubre tus dones, desafíos y propósito con un mapa energético profundo.",                             link: "/carta-astral",     icono: "🌅" },
  { titulo: "Revolución Solar",       descripcion: "Activa tu nuevo ciclo anual con claridad para decisiones, relaciones y trabajo.",                        link: "/revolucion-solar", icono: "☀️" },
  { titulo: "Constelación Familiar",  descripcion: "Sana patrones del linaje y recupera tu fuerza vital desde la raíz del alma.",                           link: "/constelaciones",   icono: "🌳" },
  { titulo: "Tarot Evolutivo",        descripcion: "Lecturas conscientes para abrir caminos, entender bloqueos y elegir con confianza.",                     link: "/tarot-evolutivo",  icono: "🕯️" },
];

function Home() {
  return (
    <div className="fondo-terroso relative overflow-hidden text-[#3A2415]">
      <Header />

      <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:items-center md:px-10 md:pb-28">
        <section className="animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/08 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Constelaciones · Tarot · Astrología
          </p>
          <h1 className="font-serifDisplay text-5xl leading-[0.95] text-[#3A2415] sm:text-6xl md:text-7xl">
            Guía cósmica para
            <span className="block text-[#B8593A]">volver a tu centro</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5C3522]/80 sm:text-lg">
            Un espacio cálido y espiritual para leer tu energía, ordenar tu sistema
            y crear un nuevo camino con conciencia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-terracota">Reservar Turno</button>
            <Link to="/carta-astral" className="btn-sage flex items-center">Ver Servicios</Link>
          </div>
        </section>

        <div className="flex flex-col items-center gap-6 animate-fade-in-up">
          <div className="constelacion-wheel animate-float" />
          <p className="text-center text-sm leading-relaxed text-[#5C3522]/70 italic font-serifDisplay max-w-xs">
            "Cuando una persona constela, sana todo su linaje."
          </p>
        </div>
      </main>

      <div className="organic-divider mx-6 md:mx-10" />

      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl">Sesiones disponibles</h2>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-[#7A8C6E] md:block">Modalidad online y presencial</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {servicios.map((servicio) => (
            <Link
              to={servicio.link}
              key={servicio.titulo}
              className="group alma-card rounded-3xl border border-[#B8593A]/15 p-7 transition-all hover:-translate-y-1 hover:border-[#B8593A]/40 animate-fade-in-up"
            >
              <div className="text-3xl mb-4">{servicio.icono}</div>
              <h3 className="font-serifDisplay text-2xl text-[#3A2415] group-hover:text-[#B8593A] transition-colors">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5C3522]/70">{servicio.descripcion}</p>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-[#B8593A]/70 group-hover:text-[#B8593A] transition-colors">
                Explorar →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="py-10 border-t border-[#B8593A]/12 text-center">
        <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5EDE0] text-[#3A2415] selection:bg-[#B8593A]/25 font-body">
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/carta-astral"    element={<CartaAstral />} />
        <Route path="/constelaciones"  element={<Constelaciones />} />
        <Route path="/revolucion-solar" element={<RevolucionSolar />} />
        <Route path="/tarot-evolutivo" element={<TarotEvolutivo />} />
      </Routes>
    </div>
  );
}
