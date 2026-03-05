import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const WA_URL = `https://wa.me/5491162373100?text=${encodeURIComponent("Hola! Me gustaría agendar una sesión. Podes contarme mas sobre tus servicios?")}`;
// @ts-ignore
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio",           path: "/" },
    { name: "Carta Astral",     path: "/carta-astral" },
    { name: "Constelaciones",   path: "/constelaciones" },
    { name: "Revolución Solar", path: "/revolucion-solar" },
    { name: "Tarot Evolutivo",  path: "/tarot-evolutivo" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#F5EDE0]/92 backdrop-blur-md border-b border-[#B8593A]/15 shadow-sm">
      <div className="flex w-full items-center justify-between px-6 py-3 md:px-10">
        <Link to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
          <div className="relative">
            <img
              src={logo}
              alt="De Raíz al Alma"
              decoding="async"
              fetchPriority="high"
              className="h-24 w-24 rounded-full object-cover shadow-md ring-2 ring-[#B8593A]/30 transition-all group-hover:ring-[#B8593A]/60 md:h-32 md:w-32"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-body text-5xl md:text-6xl text-[#5C3522]">De Raíz al Alma</span>
            <span className="text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.22em] text-[#8A7A6E] font-semibold whitespace-nowrap">
              Constelaciones · Tarot · Astrología
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex gap-7 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-[0.03em] transition-colors pb-0.5 ${
                  isActive
                    ? "text-[#B8593A] border-b-2 border-[#B8593A]"
                    : "text-[#5C3522]/75 hover:text-[#B8593A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href={WA_URL} target="_blank" rel="noreferrer" className="hidden lg:block btn-verde">
            Agendar Sesión
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#5C3522] transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#5C3522] transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#5C3522] transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-[#EDE0CF]/95 backdrop-blur-sm border-t border-[#B8593A]/15">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-xl text-sm font-semibold tracking-[0.02em] transition-colors ${
                    isActive ? "text-[#B8593A] bg-[#B8593A]/10" : "text-[#5C3522]/80 hover:text-[#B8593A]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
