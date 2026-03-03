import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="fondo-terroso relative overflow-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center animate-fade-in-up">
        <p className="text-8xl mb-6 animate-float">🌿</p>
        <p className="mb-3 inline-block rounded-full border border-[#B8593A]/40 bg-[#B8593A]/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#B8593A]">
          Error 404
        </p>
        <h1 className="font-serifDisplay text-4xl text-[#3A2415] sm:text-5xl mt-4 mb-5 leading-tight">
          Esta página no existe
        </h1>
        <p className="text-base text-[#5C3522]/70 max-w-md mb-10 leading-relaxed">
          Parece que te perdiste en el camino. No hay nada aquí, pero hay mucho por descubrir.
        </p>
        <Link to="/" className="btn-terracota">
          Volver al inicio
        </Link>
      </main>
      <Footer />
    </div>
  );
}
