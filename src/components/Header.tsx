import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Carta Astral", path: "/carta-astral" },
    { name: "Constelaciones", path: "/constelaciones" },
    { name: "Revolución Solar", path: "/revolucion-solar" },
    { name: "Tarot Evolutivo", path: "/tarot-evolutivo" },
  ];

  return (
    <header className="mx-auto flex w-full items-center justify-between px-6 py-4 md:px-10">
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
      <button className="rounded-full border border-terracota/50 bg-marron/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-arena transition hover:bg-terracota/20 hover:border-terracota/80">
        Agendar Sesión
      </button>
    </header>
  );
}
