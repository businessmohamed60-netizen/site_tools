import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#pack", label: "Le pack" },
  { href: "#organisation", label: "Organisation" },
  { href: "#marque-blanche", label: "Marque blanche" },
  { href: "#videos", label: "Démonstrations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#public", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy-900/95 shadow-lg shadow-navy-950/30 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#accueil" className="flex items-center gap-2.5" aria-label="Boîte à Outils IATF 16949 – Pack Consultant, retour à l'accueil">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-sky-700 font-bold text-white shadow-md shadow-sky-500/30">
            IA
          </span>
          <span className="text-sm font-bold leading-tight text-white sm:text-base">
            Boîte à Outils <span className="text-sky-400">IATF 16949</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-sky-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#tarifs"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400"
          >
            Offre Algérie −50 %
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-navy-950 px-4 pb-6 pt-2 shadow-xl lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-sky-400"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-sky-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Demander un devis
          </a>
        </div>
      )}
    </header>
  );
}
