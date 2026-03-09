import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/rankings", label: "Rankings" },
  { to: "/methodology", label: "Methodology" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-cream"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="group flex flex-col items-start gap-0">
          <span className="font-serif text-lg font-bold tracking-widest text-navy uppercase">
            AH Bakery
            <span className="inline-block mx-1 h-1.5 w-1.5 rounded-full bg-gold align-middle" />
            Institute
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-navy-light uppercase">
            Est. Every Day
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `font-sans text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-gold-dark font-semibold border-b-2 border-gold pb-0.5"
                      : "text-navy hover:text-gold-dark"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
          className="relative flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-navy transition-transform duration-300 ${
              menuOpen ? "translate-y-[4px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-navy transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded bg-navy transition-transform duration-300 ${
              menuOpen ? "-translate-y-[4px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-80 border-t border-cream-dark" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2.5 font-sans text-sm tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "bg-gold-light/30 text-gold-dark font-semibold"
                      : "text-navy hover:bg-cream-dark/40 hover:text-gold-dark"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
