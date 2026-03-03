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
      "Descubre tus dones, desafios y proposito con un mapa energetico profundo.",
    link: "/carta-astral"
  },
  {
    titulo: "Revolucion Solar",
    descripcion:
      "Activa tu nuevo ciclo anual con claridad para decisiones, relaciones y trabajo.",
    link: "/revolucion-solar"
  },
  {
    titulo: "Constelacion Familiar",
    descripcion:
      "Sana patrones del linaje y recupera tu fuerza vital desde la raiz del alma.",
    link: "/constelaciones"
  },
  {
    titulo: "Tarot Evolutivo",
    descripcion:
      "Lecturas conscientes para abrir caminos, entender bloqueos y elegir con confianza.",
    link: "/tarot-evolutivo"
  },
];

function Home() {
  return (
    <div className="fondo-estelar relative overflow-hidden text-[#f8e8c5]">
      <Header />

      <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-8 md:grid-cols-2 md:items-center md:px-10 md:pb-28">
        <section>
          <p className="mb-4 inline-block rounded-full border border-[#d5b67a]/45 bg-[#1b1730]/75 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#f2c77f]">
            Constelaciones + Tarot
          </p>
          <h1 className="font-serifDisplay text-5xl leading-[0.95] text-[#f7dfb1] sm:text-6xl md:text-7xl">
            Guia cosmica para
            <span className="block text-[#f2c77f]">volver a tu centro</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#e8dcc8]/90 sm:text-lg">
            Un espacio moderno, elegante y espiritual para leer tu energia actual,
            ordenar tu sistema y crear un nuevo camino con conciencia.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-full bg-gradient-to-r from-[#d5b67a] to-[#f2c77f] px-7 py-3 text-sm font-bold uppercase tracking-[0.17em] text-[#2b1f16] shadow-[0_8px_30px_rgba(242,199,127,0.35)] transition hover:brightness-110">
              Reservar Turno
            </button>
            <Link to="/carta-astral" className="rounded-full border border-[#d5b67a]/60 bg-[#140f2a]/55 px-7 py-3 text-sm font-bold uppercase tracking-[0.17em] text-[#f8e8c5] transition hover:bg-[#261c49] flex items-center">
              Ver Servicios
            </Link>
          </div>
        </section>

        <section className="astro-card rounded-[2rem] border border-[#d5b67a]/30 p-8 shadow-aura">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full border border-[#f2c77f]/60 bg-[#120f23]" />
            <div>
              <p className="font-serifDisplay text-2xl text-[#f2c77f]">Carta Astral</p>
              <p className="text-sm text-[#dacfb8]/85">Lectura personalizada</p>
            </div>
          </div>

          <div className="constelacion-wheel mx-auto mb-7" />

          <p className="text-center text-sm leading-relaxed text-[#e4d9c3]/90">
            "Cuando una persona constela, sana todo su linaje".
          </p>
        </section>
      </main>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-serifDisplay text-4xl text-[#f2c77f] sm:text-5xl">
            Sesiones disponibles
          </h2>
          <span className="hidden text-xs uppercase tracking-[0.24em] text-[#cbb996] md:block">
            Modalidad online y presencial
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {servicios.map((servicio) => (
            <Link
              to={servicio.link || "/"}
              key={servicio.titulo}
              className="rounded-3xl border border-[#d5b67a]/20 bg-[#0f1327]/75 p-6 transition hover:-translate-y-1 hover:border-[#f2c77f]/40"
            >
              <h3 className="font-serifDisplay text-3xl text-[#f3d4a2]">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#ddd0b7]/85">
                {servicio.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-night text-[#f8e8c5] selection:bg-[#d5b67a]/30 font-body">
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
