import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";
import { getWAUrl, WA_MESSAGES, ANIMATION_DELAYS } from "../constants";
import { CONSTELACIONES_HERRAMIENTAS } from "../data/services";
// @ts-ignore
import arbolLibroImg from "../assets/arbol-libro.jpeg";

const WA_URL = getWAUrl(WA_MESSAGES.CONSTELACIONES);

/** Constelación familiar: nodos conectados por líneas finas */
function ConstellationSVG() {
  const nodes = [
    { x: 35,  y: 60  },
    { x: 90,  y: 25  },
    { x: 155, y: 45  },
    { x: 175, y: 105 },
    { x: 115, y: 140 },
    { x: 50,  y: 120 },
    { x: 100, y: 82  }, // centro
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
    [1, 6], [2, 6], [4, 6], [0, 6],
  ];
  return (
    <svg viewBox="0 0 210 170" aria-hidden="true" fill="none" className="w-full h-full">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(184,89,58,0.22)"
          strokeWidth="0.9"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y}
          r={i === 6 ? 4.5 : 2.8}
          fill={i === 6 ? "rgba(184,89,58,0.45)" : "rgba(184,89,58,0.28)"}
        />
      ))}
    </svg>
  );
}

export default function Constelaciones() {
  useSeo(
    "Constelaciones y Reprogramación Emocional",
    "Explorá las dinámicas de tu sistema familiar y saná patrones emocionales con constelaciones, hipnosis clínica y desprogramación emocional.",
  );
  return (
    <PageLayout>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="carta-hero relative mb-20 overflow-hidden rounded-2xl px-8 py-14 md:px-14 md:py-20 animate-fade-in-up">
        {/* Constelación SVG de fondo */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-[260px] h-[220px] md:w-[380px] md:h-[310px] opacity-75">
          <ConstellationSVG />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 md:items-center gap-10">
          <div>
            <p className="badge-cosmica mb-6">Sanación Sistémica</p>
            <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] dark:text-white sm:text-6xl md:text-5xl lg:text-6xl mb-6 transition-colors">
              Constelaciones y<span className="block text-[#B8593A] dark:text-[#FFB89A]">Reprogramación</span>
            </h1>
            <p className="text-base leading-relaxed text-black/75 dark:text-[#cccccc] sm:text-lg transition-colors">
              Integro diferentes herramientas terapéuticas para acompañarte a encontrar
              la raíz de aquello que hoy genera bloqueo, dolor o repetición en tu vida.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="pointer-events-none absolute h-[calc(100%+40px)] w-[calc(100%+40px)] -top-5 -left-5 rounded-xl border border-[#B8593A]/12 animate-aura-ring" />
              <div className="pointer-events-none absolute h-[calc(100%+20px)] w-[calc(100%+20px)] -top-2.5 -left-2.5 rounded-xl border border-[#B8593A]/18" />
              <img
                src={arbolLibroImg}
                alt="Árbol de la vida"
                decoding="async"
                fetchPriority="high"
                className="relative w-full max-w-[280px] rounded-xl object-cover shadow-aura ring-2 ring-[#B8593A]/20 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────── */}
      <section className="mb-20 text-center animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
        <div className="relative mx-auto max-w-2xl">
          <span className="font-serifDisplay block text-8xl leading-none text-[#B8593A]/15 select-none" aria-hidden="true">"</span>
          <p className="font-serifDisplay text-2xl sm:text-3xl text-black dark:text-[#cccccc] leading-relaxed -mt-8 transition-colors">
            Este proceso no busca borrar el pasado, sino integrarlo
            desde un lugar más consciente y amoroso.
          </p>
          <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#B8593A]/35 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Herramientas ──────────────────────────────────────── */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-black dark:text-[#888888] font-semibold transition-colors">El método</p>
        <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white sm:text-4xl mb-10 transition-colors">Herramientas que integro</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {CONSTELACIONES_HERRAMIENTAS.map((h, i) => (
            <article
              key={h.titulo}
              className="group alma-card relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${ANIMATION_DELAYS.STAGGER_QUOTE + i * ANIMATION_DELAYS.STAGGER}s` }}
            >
              <span
                className="pointer-events-none absolute -top-4 -right-1 select-none font-serifDisplay text-9xl leading-none text-[#B8593A]/7"
                aria-hidden="true"
              >
                {h.num}
              </span>
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-xl transition-colors group-hover:bg-[#B8593A]/18 dark:group-hover:bg-[#B8593A]/25">
                  {h.icono}
                </div>
                <h3 className="font-serifDisplay text-xl text-[#B8593A] dark:text-black mb-3 transition-colors">{h.titulo}</h3>
                <p className="text-sm leading-relaxed text-black/75 dark:text-[#cccccc] transition-colors">{h.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
        <div className="alma-card mx-auto max-w-3xl rounded-2xl p-10 md:p-14">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-black dark:text-[#888888] font-semibold transition-colors">
            Sesión individual
          </p>
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] dark:text-black mb-4 transition-colors">¿Sentís que es tu momento?</h2>
          <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#B8593A]/55 dark:text-[#FFB89A]/70 mb-8 transition-colors">
            Virtual o presencial · A tu ritmo
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
            Agendar mi Sesión
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
