import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero solicitar una lectura de Tarot Evolutivo. Estoy lista/listo para escuchar lo que mi inconsciente tiene para decirme.")}`;

const claves = [
  {
    num: "I",
    titulo: "Enfoque en el Presente",
    icono: "⏳",
    descripcion:
      "Se concentra en el «aquí y ahora» y en las acciones que puedes tomar hoy, diferenciándose del tarot predictivo que se enfoca en sucesos futuros.",
  },
  {
    num: "II",
    titulo: "Empoderamiento",
    icono: "👑",
    descripcion:
      "Te posicionas como cocreador de tu futuro, utilizando la lectura para tomar las riendas de tu vida y elegir con conciencia.",
  },
  {
    num: "III",
    titulo: "Herramienta Psicoterapéutica",
    icono: "🕯️",
    descripcion:
      "Funciona como un espejo para identificar bloqueos, patrones repetitivos y potenciar tus habilidades personales latentes.",
  },
  {
    num: "IV",
    titulo: "Autoconocimiento",
    icono: "🧘",
    descripcion:
      "Busca entender el «por qué» de las situaciones, promoviendo la introspección y la reflexión profunda sobre tu proceso evolutivo.",
  },
];

/** Forma de carta de tarot abstracta — diamante con ojo interior */
function TarotCardSVG() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" fill="none" className="tarot-svg w-full h-full">
      {/* Outer diamond */}
      <polygon
        points="100,8 192,100 100,192 8,100"
        stroke="rgba(184,89,58,0.16)" strokeWidth="0.8"
      />
      {/* Middle diamond */}
      <polygon
        points="100,36 164,100 100,164 36,100"
        stroke="rgba(184,89,58,0.20)" strokeWidth="0.8"
      />
      {/* Inner diamond */}
      <polygon
        points="100,64 136,100 100,136 64,100"
        stroke="rgba(184,89,58,0.18)" strokeWidth="0.7"
      />
      {/* Center eye */}
      <ellipse cx="100" cy="100" rx="14" ry="8" stroke="rgba(184,89,58,0.32)" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="4" fill="rgba(184,89,58,0.40)" />
      {/* Cross lines through center */}
      <line x1="100" y1="8"   x2="100" y2="192" stroke="rgba(184,89,58,0.06)" strokeWidth="0.5" />
      <line x1="8"   y1="100" x2="192" y2="100" stroke="rgba(184,89,58,0.06)" strokeWidth="0.5" />
      {/* Corner dots */}
      {[
        [100, 8], [192, 100], [100, 192], [8, 100],
        [100, 36], [164, 100], [100, 164], [36, 100],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="rgba(184,89,58,0.25)" />
      ))}
    </svg>
  );
}

export default function TarotEvolutivo() {
  useSeo(
    "Tarot Evolutivo",
    "Lecturas conscientes de tarot para entender tus bloqueos, tomar decisiones y crear tu futuro con conciencia.",
  );
  return (
    <PageLayout>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="carta-hero relative mb-20 overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-20 animate-fade-in-up">
        {/* Tarot card decoration */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[420px] md:h-[420px] opacity-70">
          <TarotCardSVG />
        </div>

        <div className="pointer-events-none absolute top-6 left-12 h-1.5 w-1.5 rounded-full bg-[#B8593A]/28" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-12 left-[40%] h-1 w-1 rounded-full bg-[#B8593A]/20" aria-hidden="true" />

        <div className="relative z-10 max-w-xl">
          <p className="badge-cosmica mb-6">Conciencia y Evolución</p>
          <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] dark:text-white sm:text-6xl md:text-7xl mb-6 transition-colors">
            Tarot Evolutivo
          </h1>
          <p className="text-base leading-relaxed text-black/75 dark:text-[#cccccc] sm:text-lg transition-colors">
            Una herramienta terapéutica centrada en tu crecimiento personal.
            A través de arquetipos, exploramos el inconsciente para comprender
            procesos internos y tomar decisiones conscientes.
          </p>
        </div>
      </section>

      {/* ── Pull quote ────────────────────────────────────────── */}
      <section className="mb-20 text-center animate-fade-in-up" style={{ animationDelay: "0.12s" }}>
        <div className="relative mx-auto max-w-2xl">
          <span className="font-serifDisplay block text-8xl leading-none text-[#B8593A]/15 select-none" aria-hidden="true">"</span>
          <p className="font-serifDisplay text-2xl sm:text-3xl text-black dark:text-[#cccccc] leading-relaxed -mt-8 transition-colors">
            El tarot no predice tu destino. Te ayuda a crearlo.
          </p>
          <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#B8593A]/35 to-transparent mx-auto" />
        </div>
      </section>

      {/* ── Claves ────────────────────────────────────────────── */}
      <section className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-black dark:text-[#888888] font-semibold transition-colors">
          Por qué es diferente
        </p>
        <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white sm:text-4xl mb-10 transition-colors">
          Pilares del Tarot Evolutivo
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {claves.map((c, i) => (
            <article
              key={c.titulo}
              className="group alma-card relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${0.22 + i * 0.08}s` }}
            >
              <span
                className="pointer-events-none absolute -top-4 -right-1 select-none font-serifDisplay text-9xl leading-none text-[#B8593A]/7"
                aria-hidden="true"
              >
                {c.num}
              </span>
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-xl transition-colors group-hover:bg-[#B8593A]/18 dark:group-hover:bg-[#B8593A]/25">
                  {c.icono}
                </div>
                <h3 className="font-serifDisplay text-2xl text-[#B8593A] dark:text-[#FFB89A] mb-3 transition-colors">{c.titulo}</h3>
                <p className="text-sm leading-relaxed text-black/75 dark:text-[#cccccc] transition-colors">{c.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="animate-fade-in-up" style={{ animationDelay: "0.38s" }}>
        <div className="cta-final mx-auto max-w-3xl rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] dark:text-[#FFB89A] mb-4 transition-colors">
            ¿Qué te dice tu inconsciente?
          </h2>
          <p className="text-black/70 dark:text-[#aaaaaa] text-sm max-w-sm mx-auto mb-8 leading-relaxed transition-colors">
            Descubrí las llaves que ya tenés para abrir las puertas de tu evolución.
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
            Solicitar Lectura
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
