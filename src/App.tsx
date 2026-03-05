import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CartaAstral from "./pages/CartaAstral";
import Constelaciones from "./pages/Constelaciones";
import RevolucionSolar from "./pages/RevolucionSolar";
import TarotEvolutivo from "./pages/TarotEvolutivo";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
// @ts-ignore
import cartaAstralImg from "./assets/carta-astral.jpeg";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Me gustaría reservar una sesión. Podes contarme mas sobre tus servicios?")}`;

const servicios = [
  { titulo: "Carta Astral",          descripcion: "Descubre tus dones, desafíos y propósito con un mapa energético profundo.", link: "/carta-astral",     icono: "🌅" },
  { titulo: "Revolución Solar",      descripcion: "Activa tu nuevo ciclo anual con claridad para decisiones, relaciones y trabajo.", link: "/revolucion-solar", icono: "☀️" },
  { titulo: "Constelación Familiar", descripcion: "Sana patrones del linaje y recupera tu fuerza vital desde la raíz del alma.", link: "/constelaciones",   icono: "🌳" },
  { titulo: "Tarot Evolutivo",       descripcion: "Lecturas conscientes para abrir caminos, entender bloqueos y elegir con confianza.", link: "/tarot-evolutivo",  icono: "🕯️" },
];

const pilares = [
  { icono: "🌐", titulo: "Online & Presencial", desc: "Sesiones adaptadas a tu lugar y ritmo de vida, desde cualquier rincón." },
  { icono: "✨", titulo: "Totalmente Personalizado", desc: "Cada lectura es única, diseñada para tu momento y tu historia." },
  { icono: "🌱", titulo: "Enfoque Transformador", desc: "Herramientas para sanar desde la raíz y avanzar con conciencia." },
];

function StarDot({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 10 10"
      aria-hidden="true"
      style={style}
      className="absolute pointer-events-none animate-star-pulse"
    >
      <circle cx="5" cy="5" r="2.5" fill="#B8593A" />
    </svg>
  );
}

function Home() {
  return (
    <div className="fondo-terroso relative overflow-hidden text-[#3A2415]">
      {/* Decoraciones celestes de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#B8593A]/8" />
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#B8593A]/12" />
        <div className="absolute -left-32 bottom-32 h-[360px] w-[360px] rounded-full border border-[#7A8C6E]/10" />
        <StarDot style={{ top: "7%",  left: "12%", width: 8,  height: 8,  animationDelay: "0s"    }} />
        <StarDot style={{ top: "14%", left: "32%", width: 5,  height: 5,  animationDelay: "0.8s"  }} />
        <StarDot style={{ top: "6%",  right: "18%", width: 6, height: 6,  animationDelay: "1.4s"  }} />
        <StarDot style={{ top: "38%", left: "5%",  width: 4,  height: 4,  animationDelay: "0.4s"  }} />
        <StarDot style={{ top: "60%", right: "8%", width: 7,  height: 7,  animationDelay: "1.9s"  }} />
        <StarDot style={{ bottom: "20%", left: "22%", width: 5, height: 5, animationDelay: "1.1s" }} />
        {/* Crescent decoration */}
        <svg className="absolute bottom-48 right-12 h-20 w-20 opacity-10" viewBox="0 0 80 80" aria-hidden="true">
          <path d="M40 8 A32 32 0 1 0 40 72 A22 22 0 1 1 40 8" fill="#B8593A" />
        </svg>
      </div>

      <Header />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <main className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:items-center md:px-10 md:pb-28">
        <section className="animate-fade-in-up">
          <p className="badge-cosmica mb-6">
            Constelaciones · Tarot · Astrología
          </p>
          <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] sm:text-6xl md:text-5xl lg:text-7xl">
            Guía cósmica para
            <span className="block text-[#B8593A]">volver a tu centro</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5C3522]/80 sm:text-xl md:text-xl">
            Un espacio cálido y espiritual para leer tu energía, ordenar tu sistema
            y crear un nuevo camino con conciencia.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:flex-wrap sm:gap-4">
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde text-center">
              Reservar Turno
            </a>
            <Link to="/carta-astral" className="btn-sage text-center flex items-center justify-center">
              Ver Servicios
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-[0.65rem] uppercase tracking-[0.18em] text-[#5C3522]/45 font-semibold">
            <span>Online & Presencial</span>
            <span aria-hidden="true">·</span>
            <span>Sesiones Individuales</span>
            <span aria-hidden="true">·</span>
            <span>Enfoque Transformador</span>
          </div>
        </section>

        {/* Imagen con anillos de aura */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
          <div className="relative flex items-center justify-center">
            {/* Anillos decorativos */}
            <div className="absolute h-[calc(100%+48px)] w-[calc(100%+48px)] rounded-2xl border border-[#B8593A]/10 animate-aura-ring" />
            <div className="absolute h-[calc(100%+24px)] w-[calc(100%+24px)] rounded-xl border border-[#B8593A]/18" />
            <img
              src={cartaAstralImg}
              alt="Carta Astral"
              decoding="async"
              fetchPriority="high"
              className="animate-float relative w-full max-w-[300px] rounded-xl object-cover shadow-aura ring-2 ring-[#B8593A]/25 md:max-w-[360px]"
            />
          </div>
          <p className="text-center text-sm leading-relaxed text-[#5C3522]/65 italic font-serifDisplay max-w-xs">
            "Cuando una persona constela, sana todo su linaje."
          </p>
        </div>
      </main>

      <div className="organic-divider mx-6 md:mx-10" />

      {/* ── Sesiones disponibles ──────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#7A8C6E] font-semibold">
            Explora tu camino
          </p>
          <h2 className="font-serifDisplay text-5xl text-[#3A2415] sm:text-6xl">Sesiones disponibles</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#5C3522]/45 font-semibold">
            Modalidad online y presencial
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {servicios.map((servicio, i) => (
            <Link
              to={servicio.link}
              key={servicio.titulo}
              className="group alma-card rounded-xl border border-[#B8593A]/15 p-7 transition-all hover:-translate-y-1 hover:border-[#B8593A]/40 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#B8593A]/8 text-2xl group-hover:bg-[#B8593A]/15 transition-colors" style={{ width: 52, height: 52 }}>
                {servicio.icono}
              </div>
              <h3 className="font-serifDisplay text-3xl md:text-3xl text-[#3A2415] group-hover:text-[#B8593A] transition-colors">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-base md:text-base leading-relaxed text-[#5C3522]/70">{servicio.descripcion}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B8593A]/70 group-hover:text-[#B8593A] transition-colors">
                Explorar
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quote Banner ─────────────────────────────────────── */}
      <section className="quote-banner py-20 px-6 md:px-10 text-center">
        <p className="font-serifDisplay text-4xl sm:text-5xl md:text-6xl text-[#B8593A] max-w-3xl mx-auto leading-tight">
          "El alma siempre sabe el camino.<br className="hidden sm:block" /> Solo necesita ser escuchada."
        </p>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.24em] text-[#5C3522]/40 font-semibold">
          De Raíz al Alma
        </p>
      </section>

      {/* ── 3 Pilares ────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 sm:grid-cols-3 text-center">
          {pilares.map((p, i) => (
            <div
              key={p.titulo}
              className="flex flex-col items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8593A]/10 text-3xl">
                {p.icono}
              </div>
              <h3 className="font-semibold text-[#3A2415] tracking-wide text-sm">{p.titulo}</h3>
              <p className="text-sm text-[#5C3522]/65 leading-relaxed max-w-[200px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────── */}
      <section className="mx-6 mb-16 md:mx-10">
        <div className="cta-final rounded-2xl p-10 md:p-14 text-center">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#B8593A]/65 font-semibold">
            ¿Lista para comenzar?
          </p>
          <h2 className="font-serifDisplay text-4xl md:text-5xl text-[#3A2415] mb-4">
            Tu lectura te espera
          </h2>
          <p className="text-[#5C3522]/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Da el primer paso hacia tu transformación. Estoy aquí para acompañarte en cada etapa del camino.
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
            Escribime por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFE6F0] text-[#3A2415] selection:bg-[#B8593A]/25 font-body">
      <ScrollToTop />
      <Routes>
        <Route path="/"                 element={<Home />} />
        <Route path="/carta-astral"     element={<CartaAstral />} />
        <Route path="/constelaciones"   element={<Constelaciones />} />
        <Route path="/revolucion-solar" element={<RevolucionSolar />} />
        <Route path="/tarot-evolutivo"  element={<TarotEvolutivo />} />
        <Route path="*"                 element={<NotFound />} />
      </Routes>
    </div>
  );
}
