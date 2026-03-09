import { NavLink } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/rankings", label: "Rankings" },
  { to: "/methodology", label: "Methodology" },
  { to: "/faq", label: "FAQ" },
  { to: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-serif text-xl font-bold tracking-widest text-cream uppercase">
              AH Bakery
              <span className="inline-block mx-1 h-1.5 w-1.5 rounded-full bg-gold align-middle" />
              Institute
            </p>
            <p className="mt-1 font-sans text-[10px] tracking-[0.25em] text-gold uppercase">
              Est. Every Day
            </p>
            <p className="mt-4 font-serif text-sm italic leading-relaxed text-cream/70">
              Dedicated to the proposition that all kaasbroodjes are created
              equal, but some are more equal than others.
            </p>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className="font-sans text-sm text-cream/60 transition-colors duration-200 hover:text-gold"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About this project column */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-sans text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              About This Project
            </h3>
            <p className="font-sans text-sm leading-relaxed text-cream/60">
              The Amsterdam Bakery Institute is an independent civic project
              dedicated to correcting decades of pastry misinformation. We
              accept no advertising, sponsorship, or sourdough.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="font-sans text-xs leading-relaxed text-cream/40">
              &copy; 2024 The Amsterdam Bakery Institute. All rights reserved.
              No affiliation with Albert Heijn, Ahold Delhaize, or any
              organization that would benefit from claiming us.
            </p>
            <p className="font-mono text-[10px] leading-relaxed text-cream/25">
              This website is a work of cultural criticism. We just really like
              kaasbroodjes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
