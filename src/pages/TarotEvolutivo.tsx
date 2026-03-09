import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";
import ServiceHero from "../components/ServiceHero";
import ServiceQuote from "../components/ServiceQuote";
import ServiceAspects from "../components/ServiceAspects";
import CTASection from "../components/CTASection";
import { getWAUrl, WA_MESSAGES } from "../constants";
import { TAROT_EVOLUTIVO_CLAVES } from "../data/services";

const WA_URL = getWAUrl(WA_MESSAGES.TAROT_EVOLUTIVO);

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
      <ServiceHero
        badge="Conciencia y Evolución"
        title="Tarot Evolutivo"
        subtitle="Una herramienta terapéutica centrada en tu crecimiento personal. A través de arquetipos, exploramos el inconsciente para comprender procesos internos y tomar decisiones conscientes."
      >
        <TarotCardSVG />
      </ServiceHero>

      <ServiceQuote text="El tarot no predice tu destino. Te ayuda a crearlo." />

      <ServiceAspects
        items={TAROT_EVOLUTIVO_CLAVES}
        title="Pilares del Tarot Evolutivo"
        subtitle="Por qué es diferente"
        columns={3}
        delay="0.18s"
      />

      <CTASection
        title="¿Qué te dice tu inconsciente?"
        description="Descubrí las llaves que ya tenés para abrir las puertas de tu evolución."
        ctaText="Solicitar Lectura"
        ctaUrl={WA_URL}
        delay="0.35s"
      />
    </PageLayout>
  );
}
