import { ShieldCheck, Lock } from "lucide-react";

const NAV = [
  { href: "#pack", label: "Le pack" },
  { href: "#organisation", label: "Organisation" },
  { href: "#marque-blanche", label: "Marque blanche" },
  { href: "#videos", label: "Démonstrations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#public", label: "Pour qui" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-bold text-white">
              Boîte à Outils <span className="text-sky-400">IATF 16949</span> – Pack Consultant
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              Une bibliothèque documentaire professionnelle de plus de 330 fichiers, conçue pour les
              consultants, auditeurs et experts du secteur automobile.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Navigation
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-sky-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Informations
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                Propriété et droits d'utilisation réservés au vendeur du pack.
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-start gap-2 transition-colors hover:text-sky-400"
                  aria-label="Politique de confidentialité (à venir)"
                >
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Boîte à Outils IATF 16949 – Pack Consultant. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
}
