import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero encargar mi Revolucion Solar. Estoy lista/listo para vivir este ciclo con conciencia y direccion.")}`;

const aspectos = [
  {
    num: "I",
    titulo: "Temas del año",
    icono: "📅",
    descripcion:
      "Nos muestra cuáles serán los temas centrales del ciclo, dónde estará puesta la energía, qué áreas pedirán mayor atención y qué oportunidades de crecimiento se activarán.",
  },
  {
    num: "II",
    titulo: "Conciencia y alineación",
    icono: "🧭",
    descripcion:
      "Trabajar con tu Revolución Solar no es para \"anticipar el futuro\", sino para atravesar el año con mayor conciencia, alineación y coherencia.",
  },
  {
    num: "III",
    titulo: "De reaccionar a crear",
    icono: "🌱",
    descripcion:
      "Cuando sabés qué energía está disponible, podés usarla a tu favor. En lugar de reaccionar, empezás a crear.",
  },
];

/** Órbitas solares: elipses concéntricas a distintos ángulos */
function SolarOrbitSVG() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" fill="none" className="solar-orbit-svg w-full h-full">
      {/* Outer orbit */}
      <ellipse cx="100" cy="100" rx="88" ry="34"
        stroke="rgba(184,89,58,0.13)" strokeWidth="0.8"
        transform="rotate(-18 100 100)" />
      {/* Middle orbit */}
      <ellipse cx="100" cy="100" rx="65" ry="25"
        stroke="rgba(184,89,58,0.18)" strokeWidth="0.8"
        transform="rotate(14 100 100)" />
      {/* Inner orbit */}
      <ellipse cx="100" cy="100" rx="42" ry="16"
        stroke="rgba(184,89,58,0.16)" strokeWidth="0.7"
        transform="rotate(-6 100 100)" />
      {/* Sun */}
      <circle cx="100" cy="100" r="8"  fill="rgba(184,89,58,0.38)" />
      <circle cx="100" cy="100" r="14" stroke="rgba(184,89,58,0.14)" strokeWidth="0.7" />
      {/* Planet dots */}
      <circle cx="188" cy="100" r="3"  fill="rgba(184,89,58,0.30)" />
      <circle cx="40"  cy="87"  r="2.5" fill="rgba(184,89,58,0.25)" />
      <circle cx="130" cy="138" r="2"  fill="rgba(184,89,58,0.22)" />
      {/* Ray lines from sun */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={100 + 10 * Math.cos(a)} y1={100 + 10 * Math.sin(a)}
            x2={100 + 17 * Math.cos(a)} y2={100 + 17 * Math.sin(a)}
            stroke="rgba(184,89,58,0.22)" strokeWidth="0.8"
          />
        );
      })}
    </svg>
  );
}

export default function RevolucionSolar() {
  useSeo(
    "Revolución Solar",
    "Conocé el mapa energético de tu nuevo año solar y viví cada ciclo con conciencia y dirección.",
  );
  return (
    <PageLayout>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="carta-hero relative mb-20 overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-20 animate-fade-in-up">
        {/* Orbits decoration */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[440px] md:h-[440px] opacity-75">
          <SolarOrbitSVG />
        </div>

        {/* Scattered dots */}
        <div className="pointer-events-none absolute top-8 left-16 h-1.5 w-1.5 rounded-full bg-[#B8593A]/28" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-10 left-[30%] h-1 w-1 rounded-full bg-[#B8593A]/20" aria-hidden="true" />

        <div className="relative z-10 max-w-xl">
          <p className="badge-cosmica mb-6">Ciclo Anual</p>
          <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] dark:text-white sm:text-6xl md:text-7xl mb-6 transition-colors">
            Revolución Solar
          </h1>
          <p className="text-base leading-relaxed text-black/75 dark:text-[#cccccc] sm:text-lg transition-colors">
            El mapa energético de tu año personal, desde un cumpleaños al siguiente.
          </p>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────── */}
      <section className="mb-20 text-center animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
        <div className="relative mx-auto max-w-2xl">
          <span className="font-serifDisplay block text-8xl leading-none text-[#B8593A]/15 select-none" aria-hidden="true">"</span>
          <p className="font-serifDisplay text-2xl sm:text-3xl text-black dark:text-[#cccccc] leading-relaxed -mt-8 transition-colors">
            Es una herramienta de claridad y dirección para que tu año
            no pase por vos… sino que lo vivas de manera activa y consciente.
          </p>
          <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#B8593A]/35 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Aspectos ──────────────────────────────────────────── */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#7A8C6E] dark:text-[#888888] font-semibold transition-colors">Lo que revela</p>
        <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white sm:text-4xl mb-10 transition-colors">Tu ciclo, en foco</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {aspectos.map((a, i) => (
            <article
              key={a.titulo}
              className="group alma-card relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.22 + i * 0.08}s` }}
            >
              <span
                className="pointer-events-none absolute -top-4 -right-1 select-none font-serifDisplay text-9xl leading-none text-[#B8593A]/7"
                aria-hidden="true"
              >
                {a.num}
              </span>
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-xl transition-colors group-hover:bg-[#B8593A]/18 dark:group-hover:bg-[#B8593A]/25">
                  {a.icono}
                </div>
                <h3 className="font-serifDisplay text-xl text-[#B8593A] dark:text-[#FFB89A] mb-3 transition-colors">{a.titulo}</h3>
                <p className="text-sm leading-relaxed text-black/75 dark:text-[#cccccc] transition-colors">{a.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Cuándo realizarla ─────────────────────────────────── */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.32s" }}>
        <div className="grid gap-5 sm:grid-cols-3 text-center">
          {[
            { icono: "🎂", titulo: "Antes de tu cumpleaños", desc: "Lo ideal es realizarla días antes de tu fecha para llegar al nuevo ciclo con claridad." },
            { icono: "🗓️", titulo: "Una vez al año",         desc: "Se hace una vez por ciclo solar. Es tu brújula para los próximos 12 meses." },
            { icono: "🌍", titulo: "Online o presencial",    desc: "Podés hacerla desde cualquier lugar del mundo." },
          ].map((p, i) => (
            <div
              key={p.titulo}
              className="flex flex-col items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: `${0.36 + i * 0.08}s` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-2xl transition-colors">
                {p.icono}
              </div>
              <h3 className="font-semibold text-[#3A2415] dark:text-white text-sm tracking-wide transition-colors">{p.titulo}</h3>
              <p className="text-xs text-black/60 dark:text-[#aaaaaa] leading-relaxed max-w-[190px] transition-colors">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div className="cta-final mx-auto max-w-3xl rounded-2xl p-10 md:p-14 text-center">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#B8593A]/65 dark:text-[#FFB89A]/70 font-semibold transition-colors">
            ¿Ya se acerca tu cumpleaños?
          </p>
          <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white mb-4 transition-colors">Encargá tu Revolución Solar</h2>
          <p className="text-black/65 dark:text-[#aaaaaa] text-sm max-w-sm mx-auto mb-8 leading-relaxed transition-colors">
            Viví este ciclo con intención. Tu próximo año empieza con conciencia.
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
            Encargar mi Revolución
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
