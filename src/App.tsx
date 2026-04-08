import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CartaAstral from "./pages/CartaAstral";
import Constelaciones from "./pages/Constelaciones";
import RevolucionSolar from "./pages/RevolucionSolar";
import TarotEvolutivo from "./pages/TarotEvolutivo";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OptimizedImage from "./components/OptimizedImage";
import { getWAUrl, WA_MESSAGES, ANIMATION_DELAYS } from "./constants";
import { SERVICIOS, PILARES } from "./data/services";
// @ts-ignore
import cartaAstralImg from "./assets/carta-astral.jpeg";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const WA_URL = getWAUrl(WA_MESSAGES.GENERAL);

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
  const scrollToServices = () => {
    const target = document.getElementById("sesiones-disponibles");
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="fondo-terroso relative overflow-hidden text-[#3A2415] dark:text-white transition-colors">
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
          <h1 className="font-serifDisplay text-6xl leading-tight text-[#3A2415] dark:text-white sm:text-7xl md:text-6xl lg:text-8xl transition-colors">
            Guía cósmica para
            <span className="block text-[#B8593A] dark:text-[#FFB89A]">volver a tu centro</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-black/80 dark:text-[#cccccc] sm:text-2xl md:text-2xl transition-colors">
            Un espacio cálido y espiritual para leer tu energía, ordenar tu sistema
            y crear un nuevo camino con conciencia.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:flex-wrap sm:gap-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-verde text-center"
              aria-label="Reservar turno a través de WhatsApp (se abre en ventana nueva)"
            >
              Reservar Turno
            </a>
            <button
              type="button"
              onClick={scrollToServices}
              className="btn-sage text-center flex items-center justify-center"
              aria-label="Ver servicios disponibles"
            >
              Ver Servicios
            </button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-[0.65rem] uppercase tracking-[0.18em] text-black/45 dark:text-[#888888] font-semibold transition-colors">
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
            <OptimizedImage
              src={cartaAstralImg}
              alt="Carta Astral"
              loading="eager"
              fetchPriority="high"
              className="animate-float relative w-full max-w-[150px] rounded-xl object-cover shadow-aura ring-2 ring-[#B8593A]/25 md:max-w-[360px]"
            />
          </div>
          <p className="text-center text-3xl leading-relaxed text-black/65 dark:text-[#b3b3b3] font-body max-w-xs transition-colors">
            "Cuando una persona constela, sana todo su linaje."
          </p>
        </div>
      </main>

      <div className="organic-divider mx-6 md:mx-10" />

      {/* ── Sesiones disponibles ──────────────────────────────── */}
      <section id="sesiones-disponibles" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-black dark:text-[#888888] font-semibold transition-colors">
            Explora tu camino
          </p>
          <h2 className="font-serifDisplay text-6xl text-[#3A2415] dark:text-white sm:text-7xl transition-colors">Sesiones disponibles</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-black/45 dark:text-[#999999] font-semibold transition-colors">
            Modalidad online y presencial
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {SERVICIOS.map((servicio, i) => (
            <Link
              to={servicio.link}
              key={servicio.titulo}
              className="group alma-card rounded-xl border border-[#B8593A]/15 p-7 transition-all hover:-translate-y-1 hover:border-[#B8593A]/40 animate-fade-in-up dark:border-[#B8593A]/25"
              style={{ animationDelay: `${i * ANIMATION_DELAYS.STAGGER}s` }}
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-full bg-[#B8593A]/8 dark:bg-[#B8593A]/15 text-2xl group-hover:bg-[#B8593A]/15 dark:group-hover:bg-[#B8593A]/25 transition-colors" style={{ width: 52, height: 52 }}>
                {servicio.icono}
              </div>
              <h3 className="font-serifDisplay text-4xl md:text-4xl text-[#3A2415] dark:text-white group-hover:text-[#B8593A] dark:group-hover:text-[#FFB89A] transition-colors">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-lg md:text-lg leading-relaxed text-black/70 dark:text-[#cccccc] transition-colors">{servicio.descripcion}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#B8593A]/70 dark:text-[#FFB89A]/70 group-hover:text-[#B8593A] dark:group-hover:text-[#FFB89A] transition-colors">
                Explorar
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quote Banner ─────────────────────────────────────── */}
      <section className="quote-banner py-20 px-6 md:px-10 text-center">
        <p className="font-body text-4xl sm:text-5xl md:text-6xl text-[#B8593A] dark:text-[#FFB89A] max-w-3xl mx-auto leading-tight transition-colors">
          "El alma siempre sabe el camino.<br className="hidden sm:block" /> Solo necesita ser escuchada."
        </p>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.24em] text-[#5C3522]/40 dark:text-[#666666] font-semibold transition-colors">
          De Raíz al Alma
        </p>
      </section>

      {/* ── 3 Pilares ────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 sm:grid-cols-3 text-center">
          {PILARES.map((p, i) => (
            <div
              key={p.titulo}
              className="flex flex-col items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: `${i * ANIMATION_DELAYS.STAGGER_LARGE}s` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-3xl transition-colors">
                {p.icono}
              </div>
              <h3 className="font-semibold text-[#3A2415] dark:text-white tracking-wide text-sm transition-colors">{p.titulo}</h3>
              <p className="text-sm text-black/65 dark:text-[#999999] leading-relaxed max-w-[200px] transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────── */}
      <section className="mx-6 mb-16 md:mx-10">
        <div className="cta-final rounded-2xl p-10 md:p-14 text-center">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#B8593A]/65 dark:text-[#FFB89A]/65 font-semibold transition-colors">
            ¿Lista para comenzar?
          </p>
          <h2 className="font-serifDisplay text-4xl md:text-5xl text-[#3A2415] dark:text-white mb-4 transition-colors">
            Tu lectura te espera
          </h2>
          <p className="text-black/70 dark:text-[#cccccc] text-sm max-w-md mx-auto mb-8 leading-relaxed transition-colors">
            Da el primer paso hacia tu transformación. Estoy aquí para acompañarte en cada etapa del camino.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-verde"
            aria-label="Contactar por WhatsApp (se abre en ventana nueva)"
          >
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
    <div className="min-h-screen bg-[#FFE6F0] text-[#3A2415] selection:bg-[#B8593A]/25 font-body dark:bg-[#0a0a0a] dark:text-white dark:selection:bg-[#B8593A]/35 transition-colors">
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
