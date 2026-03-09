import { ANIMATION_DELAYS } from "../constants";

interface AspectItem {
  id?: string;
  num?: string;
  titulo: string;
  icono: string;
  descripcion: string;
}

interface ServiceAspectsProps {
  items: AspectItem[];
  title: string;
  subtitle: string;
  columns?: 2 | 3; // default 3
  delay?: string;
}

export default function ServiceAspects({
  items,
  title,
  subtitle,
  columns = 3,
  delay = "0.18s",
}: ServiceAspectsProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <section className="mb-20 animate-fade-in-up" style={{ animationDelay: delay }}>
      <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-black dark:text-[#888888] font-semibold transition-colors">
        {subtitle}
      </p>
      <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white sm:text-4xl mb-10 transition-colors">
        {title}
      </h2>

      <div className={`grid gap-6 ${gridCols}`}>
        {items.map((item, i) => (
          <article
            key={item.id || item.titulo}
            className="group alma-card relative overflow-hidden rounded-xl p-8 transition-all hover:-translate-y-1 animate-fade-in-up"
            style={{
              animationDelay: `${
                ANIMATION_DELAYS.STAGGER_QUOTE + i * ANIMATION_DELAYS.STAGGER
              }s`,
            }}
          >
            {/* Large background roman numeral */}
            {item.num && (
              <span
                className="pointer-events-none absolute -top-4 -right-1 select-none font-serifDisplay text-9xl leading-none text-[#B8593A]/7"
                aria-hidden="true"
              >
                {item.num}
              </span>
            )}

            <div className="relative z-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B8593A]/10 dark:bg-[#B8593A]/15 text-xl transition-colors group-hover:bg-[#B8593A]/18 dark:group-hover:bg-[#B8593A]/25">
                {item.icono}
              </div>
              <h3 className="font-serifDisplay text-xl text-[#B8593A] dark:text-white mb-3 transition-colors">
                {item.titulo}
              </h3>
              <p className="text-sm leading-relaxed text-black/75 dark:text-[#cccccc] transition-colors">
                {item.descripcion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
