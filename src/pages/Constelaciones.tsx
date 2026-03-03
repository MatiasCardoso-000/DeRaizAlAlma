import PageLayout from "../components/PageLayout";
import { useSeo } from "../hooks/useSeo";
// @ts-ignore
import arbolLibroImg from "../assets/arbol-libro.jpeg";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Quiero agendar mi sesion de Constelaciones. Siento que es el momento de sanar desde la raiz.")}`;

const herramientas = [
  {
    titulo: "Constelaciones Familiares",
    icono: "🌳",
    descripcion: "A través de las Constelaciones Familiares, exploramos los vínculos y dinámicas del sistema al que pertenecés, para identificar posibles lealtades invisibles, mandatos o heridas emocionales que pueden estar actuando de manera consciente o inconsciente.",
  },
  {
    titulo: "Regresiones con Hipnosis Clínica",
    icono: "🌀",
    descripcion: "Profundizamos ese origen mediante regresiones con hipnosis clínica, accediendo a memorias que el cuerpo y el inconsciente aún sostienen.",
  },
  {
    titulo: "Desprogramación Emocional",
    icono: "✨",
    descripcion: "Una vez que la herida es traída a la luz y comprendida, trabajamos con técnicas de desprogramación emocional. Esto implica resignificar la experiencia, transformando la carga asociada al recuerdo. El cerebro, al incorporar una nueva vivencia interna más segura y reparadora, puede experimentar alivio, bienestar y una sensación genuina de liberación.",
  },
];

export default function Constelaciones() {
  useSeo("Constelaciones y Reprogramación Emocional", "Explorá las dinámicas de tu sistema familiar y saná patrones emocionales con constelaciones, hipnosis clínica y desprogramación emocional.");
  return (
    <PageLayout>
      {/* Hero */}
      <section className="mb-14 grid md:grid-cols-2 md:items-center gap-10 animate-fade-in-up">
        <div>
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Sanación Sistémica
          </p>
          <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-5xl mb-6 leading-tight">
            Constelaciones y Reprogramación Emocional
          </h1>
          <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
            En mi trabajo integro diferentes herramientas terapéuticas para acompañarte a encontrar
            la raíz de aquello que hoy genera bloqueo, dolor o repetición en tu vida.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={arbolLibroImg}
            alt="Árbol de la vida"
            decoding="async"
            fetchPriority="high"
            className="w-full max-w-[340px] rounded-xl object-cover shadow-aura ring-2 ring-[#B8593A]/25 animate-float"
          />
        </div>
      </section>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 animate-fade-in-up">
        {herramientas.map((h) => (
          <article key={h.titulo} className="alma-card rounded-xl p-8 transition-all">
            <div className="text-4xl mb-5">{h.icono}</div>
            <h2 className="font-serifDisplay text-xl text-[#B8593A] mb-3">{h.titulo}</h2>
            <p className="text-sm leading-relaxed text-[#5C3522]/75">{h.descripcion}</p>
          </article>
        ))}
      </div>

      {/* Cierre */}
      <section className="mt-16 alma-card rounded-xl p-10 max-w-3xl animate-fade-in-up">
        <p className="text-base leading-relaxed text-[#5C3522]/80 sm:text-lg mb-6">
          Este proceso no busca borrar el pasado, sino integrarlo desde un lugar más consciente y amoroso.
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.20em] text-[#B8593A]/70 mb-8">
          Sesión individual · Virtual o presencial
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-verde">
          Agendar mi Sesión
        </a>
      </section>
    </PageLayout>
  );
}
