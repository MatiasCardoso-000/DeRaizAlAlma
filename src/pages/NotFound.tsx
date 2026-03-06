import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

/** Constelación rota — dots con una línea discontinua, evocando "camino perdido" */
function LostConstellationSVG() {
  const stars = [
    { x: 60,  y: 40  },
    { x: 120, y: 25  },
    { x: 180, y: 55  },
    { x: 210, y: 100 },
    { x: 170, y: 145 },
    // gap — camino roto aquí
    { x: 80,  y: 130 },
    { x: 40,  y: 90  },
  ];
  return (
    <svg viewBox="0 0 250 180" aria-hidden="true" fill="none" className="w-full h-full">
      {/* Connected segment 1 */}
      {[[0,1],[1,2],[2,3],[3,4]].map(([a,b],i) => (
        <line key={i}
          x1={stars[a].x} y1={stars[a].y}
          x2={stars[b].x} y2={stars[b].y}
          stroke="rgba(184,89,58,0.25)" strokeWidth="0.9"
        />
      ))}
      {/* Broken segment — dashed */}
      <line
        x1={stars[4].x} y1={stars[4].y}
        x2={stars[5].x} y2={stars[5].y}
        stroke="rgba(184,89,58,0.15)" strokeWidth="0.8"
        strokeDasharray="4 5"
      />
      {/* Connected segment 2 */}
      <line
        x1={stars[5].x} y1={stars[5].y}
        x2={stars[6].x} y2={stars[6].y}
        stroke="rgba(184,89,58,0.22)" strokeWidth="0.9"
      />
      {/* Stars */}
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y}
          r={i === 4 || i === 5 ? 2 : 3}
          fill={i === 4 ? "rgba(184,89,58,0.20)" : "rgba(184,89,58,0.35)"}
        />
      ))}
      {/* Scattered ambient dots */}
      {[[30,60],[200,30],[230,150],[15,140],[140,165]].map(([cx,cy],i) => (
        <circle key={`d${i}`} cx={cx} cy={cy} r="1.2" fill="rgba(184,89,58,0.18)" />
      ))}
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen flex flex-col">
      <Header />

      {/* Decoraciones de fondo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-20 h-[320px] w-[320px] rounded-full border border-[#B8593A]/8" />
        <div className="absolute -left-16 bottom-24 h-[240px] w-[240px] rounded-full border border-[#B8593A]/7" />
      </div>

      <main className="relative flex-1 flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in-up">
        {/* Constelación rota */}
        <div className="mb-6 w-[240px] h-[175px] opacity-70">
          <LostConstellationSVG />
        </div>

        {/* 404 grande en Great Vibes */}
        <p
          className="font-serifDisplay select-none leading-none text-[#B8593A]/18 -mt-4 mb-2"
          style={{ fontSize: "clamp(5rem, 20vw, 10rem)" }}
          aria-hidden="true"
        >
          404
        </p>

        <p className="badge-cosmica mb-5 -mt-2">Página no encontrada</p>

        <h1 className="font-serifDisplay text-4xl text-[#3A2415] dark:text-white sm:text-5xl mb-4 leading-tight transition-colors">
          Te perdiste en el camino
        </h1>
        <p className="text-base text-black/65 dark:text-[#aaaaaa] max-w-sm mb-10 leading-relaxed transition-colors">
          No hay nada aquí, pero hay mucho por descubrir. Volvé al inicio y encontrá tu camino.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link to="/" className="btn-verde">
            Volver al inicio
          </Link>
          <Link to="/carta-astral" className="btn-sage">
            Ver servicios
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
