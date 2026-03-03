import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Carta Astral", path: "/carta-astral" },
    { name: "Constelaciones", path: "/constelaciones" },
    { name: "Revolución Solar", path: "/revolucion-solar" },
    { name: "Tarot Evolutivo", path: "/tarot-evolutivo" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mx-auto w-full">
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3 group transition-opacity hover:opacity-90">
          <img
            src={logo}
            alt="De Raíz al Alma"
            className="h-14 w-14 rounded-full object-cover shadow-md ring-2 ring-terracota/30 transition-all group-hover:ring-terracota/60 md:h-16 md:w-16"
          />
          <span className="font-script text-2xl text-arena tracking-wide hidden sm:block">
            De Raíz al Alma
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex w-1/2 justify-between items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-[0.1em] transition-colors ${isActive
                  ? "text-terracota border-b border-terracota"
                  : "text-arena/80 hover:text-terracota"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 mr-4"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-arena transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-arena transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-arena transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <button className="hidden md:block rounded-full border border-terracota/50 bg-marron/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-arena transition hover:bg-terracota/20 hover:border-terracota/80">
          Agendar Sesión
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-marron/80 backdrop-blur-sm border-t border-terracota/20">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-2 text-sm font-medium uppercase tracking-[0.1em] transition-colors ${
                    isActive
                      ? "text-terracota border-l-4 border-terracota pl-3"
                      : "text-arena/80 hover:text-terracota pl-3"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <button className="mt-3 w-full rounded-full border border-terracota/50 bg-marron/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-arena transition hover:bg-terracota/20 hover:border-terracota/80">
              Agendar Sesión
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
