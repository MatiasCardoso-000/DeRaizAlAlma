// Phone and WhatsApp configuration
export const WA_PHONE = '+5493425221890';

export const getWAUrl = (message: string): string =>
  `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;

// Pre-defined WhatsApp messages for different contexts
export const WA_MESSAGES = {
  GENERAL: "Hola! Me gustaría reservar una sesión. Podes contarme mas sobre tus servicios?",
  HEADER: "Hola! Me gustaría agendar una sesión. Podes contarme mas sobre tus servicios?",
  CARTA_ASTRAL: "Hola! Quiero conocer mi Carta Astral. Estoy lista/listo para descubrir el mapa de mi alma.",
  CONSTELACIONES: "Hola! Me interesa explorar las Constelaciones Familiares. Quiero sanar desde la raíz.",
  REVOLUCION_SOLAR: "Hola! Quiero encargar mi Revolución Solar. Estoy lista/listo para activar mi nuevo ciclo.",
  TAROT_EVOLUTIVO: "Hola! Me gustaría solicitar una lectura de Tarot Evolutivo. Quiero entender mejor mi camino.",
} as const;

// Color palette
export const COLORS = {
  TERRACOTA: '#B8593A',
  BROWN_DARK: '#3A2415',
  BROWN_DARK_2: '#5C3522',
  CREAM: '#F5EDE0',
  PINK_LIGHT: '#FFE6F0',
  PINK_LIGHT_2: '#FFD9E6',
  PINK_LIGHT_3: '#FFC9D9',
  BLACK_DARK: '#0a0a0a',
  GREY_DARK: '#1a1a1a',
  GREY_DARK_2: '#222222',
  GREEN_SAGE: '#7fceb0',
  GREEN_DARK: '#4E7565',
  GREEN_COMPLEMENT: '#7A8C6E',
  ORANGE_LIGHT: '#FFB89A',
} as const;

// Animation durations (in seconds)
export const ANIMATION_DURATIONS = {
  ZODIAC_ROTATE: 80,
  FLOAT: 6,
  STAR_PULSE: 3.5,
  DIAMOND_PULSE: 7,
  AURA_RING: 5,
  FADE_IN_UP: 0.65,
} as const;

// Animation delays (in seconds)
export const ANIMATION_DELAYS = {
  STAGGER: 0.08,
  STAGGER_LARGE: 0.12,
  STAGGER_QUOTE: 0.22,
} as const;
