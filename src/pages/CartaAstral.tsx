import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero conocer mi Carta Astral. Estoy lista/listo para descubrir el mapa de mi alma.")}`;

const aspectos = [
  {
    id: "exploracion",
    num: "I",
    titulo: "Tus dones y desafíos",
    icono: "✨",
    descripcion:
      "A través de ella exploramos tus dones, tus desafíos, tus patrones emocionales y las experiencias que tu alma eligió transitar para evolucionar.",
  },
  {
    id: "comprension",
    num: "II",
    titulo: "Patrones que se repiten",
    icono: "🔄",
    descripcion:
      "Nos permite comprender por qué ciertas situaciones se repiten, qué energías te impulsan y cuáles necesitan ser integradas.",
  },
  {
    id: "vinculos",
    num: "III",
    titulo: "Vínculos y espejos",
    icono: "🪞",
    descripcion:
      "La misma nos dice como sos en la vida, en los vínculos y porque ciertas personas se acercan a vos como espejo para evolucionar.",
  },
];

const requisitos = [
  { label: "Fecha de Nacimiento", sub: "Día, mes y año exactos",            icono: "📅" },
  { label: "Hora Exacta",         sub: "Indispensable para el Ascendente",  icono: "🕐" },
  { label: "Lugar de Origen",     sub: "Ciudad y país donde naciste",       icono: "📍" },
];

function ZodiacWheel() {
  const ticks = Array.from({ length: 12 });
  const cardinals = [0, 90, 180, 270];

  return (
    <svg
      viewBox="0 0 200 200"
      className="zodiac-wheel"
      aria-hidden="true"
      fill="none"
    >
      <circle cx="100" cy="100" r="95" stroke="rgba(184,89,58,0.16)" strokeWidth="0.7" />
      <circle cx="100" cy="100" r="72" stroke="rgba(184,89,58,0.12)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="48" stroke="rgba(184,89,58,0.09)" strokeWidth="0.6" />
      <circle cx="100" cy="100" r="4"  fill="rgba(184,89,58,0.28)" />

      {/* Cross axes */}
      <line x1="100" y1="4"   x2="100" y2="196" stroke="rgba(184,89,58,0.05)" strokeWidth="0.5" />
      <line x1="4"   y1="100" x2="196" y2="100" stroke="rgba(184,89,58,0.05)" strokeWidth="0.5" />
      <line x1="32"  y1="32"  x2="168" y2="168" stroke="rgba(184,89,58,0.04)" strokeWidth="0.4" />
      <line x1="168" y1="32"  x2="32"  y2="168" stroke="rgba(184,89,58,0.04)" strokeWidth="0.4" />

      {/* 12 tick marks */}
      {ticks.map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={100 + 87 * Math.sin(a)}
            y1={100 - 87 * Math.cos(a)}
            x2={100 + 95 * Math.sin(a)}
            y2={100 - 95 * Math.cos(a)}
            stroke="rgba(184,89,58,0.28)"
            strokeWidth="1.2"
          />
        );
      })}

      {/* Cardinal dots on middle ring */}
      {cardinals.map((deg) => {
        const a = (deg * Math.PI) / 180;
        return (
          <circle
            key={deg}
            cx={100 + 72 * Math.sin(a)}
            cy={100 - 72 * Math.cos(a)}
            r="2.8"
            fill="rgba(184,89,58,0.32)"
          />
        );
      })}

      {/* Smaller dots on inner ring */}
      {ticks.map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={100 + 48 * Math.sin(a)}
            cy={100 - 48 * Math.cos(a)}
            r="1.2"
            fill="rgba(184,89,58,0.18)"
          />
        );
      })}
    </svg>
  );
}

export default function CartaAstral() {
  useSeo(
    "Carta Astral",
    "Descubrí tus dones, desafíos y propósito con tu carta astral. Un mapa energético profundo de tu alma.",
  );

  return (
    <PageLayout>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="carta-hero relative mb-20 overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-20 animate-fade-in-up">
        {/* Zodiac wheel — right side decoration */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[460px] md:h-[460px] opacity-70">
          <ZodiacWheel />
        </div>

        {/* Scattered dots */}
        <div className="pointer-events-none absolute top-6 left-10 h-1.5 w-1.5 rounded-full bg-[#B8593A]/30" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-8 left-[38%] h-2 w-2 rounded-full bg-[#B8593A]/18" aria-hidden="true" />
        <div className="pointer-events-none absolute top-12 right-[32%] h-1 w-1 rounded-full bg-[#B8593A]/25" aria-hidden="true" />

        <div className="relative z-10 max-w-xl">
          <p className="badge-cosmica mb-6">Conocimiento Milenario</p>
          <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] dark:text-white sm:text-6xl md:text-7xl mb-6 transition-colors">
            La Carta Astral
          </h1>
          <p className="text-base leading-relaxed text-black/75 dark:text-[#cccccc] sm:text-lg mb-2 transition-colors">
            El mapa de tu alma al momento de tu nacimiento.
          </p>
          <p className="text-base leading-relaxed text-black/60 dark:text-[#b3b3b3] sm:text-lg transition-colors">
            No es un destino fijo, sino una guía de conciencia.
          </p>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────── */}
      <section
        className="mb-20 text-center animate-fade-in-up"
        style={{ animationDelay: "0.12s" }}
      >
        <div className="relative mx-auto max-w-2xl">
          <span
            className="font-serifDisplay block text-8xl leading-none text-[#B8593A]/15 select-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="font-serifDisplay text-2xl sm:text-3xl text-black dark:text-[#e0e0e0] leading-relaxed -mt-8 transition-colors">
            A través de tu carta exploramos quién sos, por qué vivís lo que vivís
            y hacia dónde puede ir tu alma.
          </p>
          <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#B8593A]/35 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Aspectos que exploramos ───────────────────────────── */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#7A8C6E] dark:text-[#888888] font-semibold transition-colors">
          Lo que descubrimos juntas
        </p>
        <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white sm:text-4xl mb-10 transition-colors">
          Aspectos que exploramos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {aspectos.map((item, i) => (
            <article
              key={item.id}
              className="group alma-card relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.22 + i * 0.08}s` }}
            >
              {/* Large background roman numeral */}
              <span
                className="pointer-events-none absolute -top-4 -right-1 select-none font-serifDisplay text-9xl leading-none text-[#B8593A]/7"
                aria-hidden="true"
              >
                {item.num}
              </span>

              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-xl transition-colors group-hover:bg-[#B8593A]/18 dark:group-hover:bg-[#B8593A]/25">
                  {item.icono}
                </div>
                <h3 className="font-serifDisplay text-xl text-[#B8593A] dark:text-[#FFB89A] mb-3 transition-colors">{item.titulo}</h3>
                <p className="text-sm leading-relaxed text-black/75 dark:text-[#cccccc] transition-colors">{item.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Qué necesitás ─────────────────────────────────────── */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
        <div className="alma-card mx-auto max-w-4xl rounded-2xl p-10 md:p-14">
          <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#7A8C6E] dark:text-[#888888] font-semibold transition-colors">
            Para calcularla
          </p>
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] dark:text-[#FFB89A] mb-8 transition-colors">¿Qué necesitás?</h2>

          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {requisitos.map((d) => (
              <div
                key={d.label}
                className="rounded-xl border border-[#B8593A]/15 dark:border-[#B8593A]/25 bg-[#EDE0CF]/50 dark:bg-[#2a2a2a] p-5 transition-colors"
              >
                <div className="mb-3 text-2xl">{d.icono}</div>
                <p className="mb-1 text-sm font-semibold text-[#3A2415] dark:text-white transition-colors">{d.label}</p>
                <p className="text-xs leading-relaxed text-black/60 dark:text-[#999999] transition-colors">{d.sub}</p>
              </div>
            ))}
          </div>

          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
            Obtener mi Carta Astral
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
