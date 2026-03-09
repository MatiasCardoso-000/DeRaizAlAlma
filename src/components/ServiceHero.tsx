import { ReactNode } from "react";

interface ServiceHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  children: ReactNode; // SVG component
}

export default function ServiceHero({
  badge,
  title,
  subtitle,
  children,
}: ServiceHeroProps) {
  return (
    <section className="carta-hero relative mb-20 overflow-hidden rounded-2xl px-8 py-16 md:px-16 md:py-20 animate-fade-in-up">
      {/* Decoración SVG a la derecha */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[440px] md:h-[440px] opacity-75">
        {children}
      </div>

      {/* Scattered dots */}
      <div className="pointer-events-none absolute top-8 left-16 h-1.5 w-1.5 rounded-full bg-[#B8593A]/28" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-10 left-[30%] h-1 w-1 rounded-full bg-[#B8593A]/20" aria-hidden="true" />

      <div className="relative z-10 max-w-xl">
        <p className="badge-cosmica mb-6">{badge}</p>
        <h1 className="font-serifDisplay text-5xl leading-tight text-[#3A2415] dark:text-white sm:text-6xl md:text-7xl mb-6 transition-colors">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-black/75 dark:text-[#cccccc] sm:text-lg transition-colors">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
