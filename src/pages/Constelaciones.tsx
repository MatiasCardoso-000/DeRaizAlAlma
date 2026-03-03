import Header from "../components/Header";

const aspectos = [
  { titulo: "Propósito",            icono: "🌳", descripcion: "Su objetivo principal es abordar conflictos actuales como problemas de pareja, salud o dinero al explorar las raíces ancestrales y las lealtades invisibles dentro del sistema familiar, permitiendo desatar nudos emocionales que han persistido a través de varias generaciones." },
  { titulo: "Metodología",          icono: "👥", descripcion: "Se utilizan representantes (personas o figuras) para recrear el mapa familiar y visualizar dinámicas ocultas que antes eran invisibles." },
  { titulo: "Fundamento Sistémico", icono: "🔄", descripcion: "Se basa en que los problemas no resueltos de los ancestros pueden influir en generaciones actuales, buscando el equilibrio al dar un lugar a cada miembro." },
  { titulo: "Sesiones",             icono: "✨", descripcion: "Pueden ser grupales con representantes humanos o individuales utilizando elementos como muñecos o papeles para representar al sistema." },
];

export default function Constelaciones() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">

        {/* Hero */}
        <section className="mb-14 text-center max-w-3xl mx-auto animate-fade-in-up">
          <p className="mb-4 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
            Orden y Sanación
          </p>
          <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl md:text-6xl mb-6">
            Constelaciones Familiares
          </h1>
          <p className="text-base leading-relaxed text-[#5C3522]/75 sm:text-lg">
            Un método terapéutico sistémico diseñado para identificar y resolver conflictos o patrones
            heredados. Busca "hacer visible lo invisible" para que puedas ordenar tu sistema y
            alcanzar un mayor bienestar emocional.
          </p>
        </section>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {aspectos.map((a, i) => (
            <article key={i} className="alma-card rounded-3xl p-8 transition-all animate-fade-in-up">
              <div className="text-4xl mb-5">{a.icono}</div>
              <h2 className="font-serifDisplay text-2xl text-[#B8593A] mb-3">{a.titulo}</h2>
              <p className="text-sm leading-relaxed text-[#5C3522]/75">{a.descripcion}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-16 alma-card rounded-[2rem] p-10 text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-serifDisplay text-3xl text-[#B8593A] mb-4">¿Sentís que repetís una historia?</h2>
          <p className="text-[#5C3522]/70 mb-8">
            A veces cargamos con pesos que no nos pertenecen. Las constelaciones te permiten mirar con amor
            hacia atrás para poder caminar con libertad hacia adelante.
          </p>
          <button className="btn-terracota px-10 py-4">Agendar mi Constelación</button>
        </section>
      </main>

      <footer className="mt-20 py-10 border-t border-[#B8593A]/12 text-center">
        <p className="text-xs uppercase tracking-widest text-[#8A7A6E]/60">De Raíz al Alma • 2026</p>
      </footer>
    </div>
  );
}
