interface ServiceQuoteProps {
  text: string;
  delay?: string;
}

export default function ServiceQuote({ text, delay = "0.12s" }: ServiceQuoteProps) {
  return (
    <section
      className="mb-20 text-center animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="relative mx-auto max-w-2xl">
        <span
          className="font-serifDisplay block text-8xl leading-none text-[#B8593A]/15 select-none"
          aria-hidden="true"
        >
          "
        </span>
        <p className="font-serifDisplay text-2xl sm:text-3xl text-black dark:text-[#e0e0e0] leading-relaxed -mt-8 transition-colors">
          {text}
        </p>
        <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#B8593A]/35 to-transparent mx-auto" />
      </div>
    </section>
  );
}
