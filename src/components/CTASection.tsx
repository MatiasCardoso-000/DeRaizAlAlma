interface CTASectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  label?: string;
  delay?: string;
  ctaAriaLabel?: string;
}

export default function CTASection({
  title,
  description,
  ctaText,
  ctaUrl,
  label = "¿Lista para comenzar?",
  delay = "0.4s",
  ctaAriaLabel,
}: CTASectionProps) {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: delay }}>
      <div className="cta-final mx-auto max-w-3xl rounded-2xl p-10 md:p-14 text-center">
        <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#B8593A]/65 dark:text-[#FFB89A]/70 font-semibold transition-colors">
          {label}
        </p>
        <h2 className="font-serifDisplay text-3xl text-[#3A2415] dark:text-white mb-4 transition-colors">
          {title}
        </h2>
        <p className="text-black/65 dark:text-[#aaaaaa] text-sm max-w-sm mx-auto mb-8 leading-relaxed transition-colors">
          {description}
        </p>
        <a
          href={ctaUrl}
          target="_blank"
          rel="noreferrer"
          className="btn-verde"
          aria-label={ctaAriaLabel || `${ctaText} (se abre en WhatsApp)`}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
