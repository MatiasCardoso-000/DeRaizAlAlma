import { Link, useLocation } from "react-router-dom";

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
    <header className="mx-auto flex w-full items-center justify-between px-6 py-7 md:px-10">
      <Link to="/" className="font-serifDisplay text-2xl font-semibold tracking-wide text-[#f2c77f] hover:opacity-80 transition-opacity">
        De Raiz al Alma
      </Link>
      <nav className="hidden lg:flex w-1/2 justify-between items-center">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-[0.1em] transition-colors ${isActive
                  ? "text-[#f2c77f] border-b border-[#f2c77f]"
                  : "text-[#e8dcc8] hover:text-[#f2c77f]"
                }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <button className="rounded-full border border-[#d5b67a]/55 bg-[#130f26]/65 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8e8c5] transition hover:bg-[#2a1f4d]">
        Agendar Sesion
      </button>
    </header>
  );
}
