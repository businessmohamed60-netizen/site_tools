import { ArrowRight, ShoppingBag, Check, Globe, MapPin } from "lucide-react";
import { scrollToQuote } from "../quote";
import { Reveal } from "./Reveal";

const INCLUDED = [
  "Accès complet aux plus de 330 fichiers organisés",
  "13 familles d'outils couvrant tout le référentiel",
  "Modèles Word et Excel personnalisables",
  "Marque blanche : votre logo, votre identité",
  "Barres d'aide intégrées aux documents",
];

export default function Pricing() {
  return (
    <section id="tarifs" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-700">
            <Globe className="h-3.5 w-3.5" />
            Tarifs
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Un investissement unique pour toute votre activité
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Une bibliothèque complète, réutilisable sur toutes vos missions, au prix d'une fraction
            du temps de rédaction qu'elle remplace.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Offre internationale
              </p>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight text-slate-900">999 €</span>
                <span className="pb-1.5 text-sm text-slate-500">paiement unique</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToQuote("devis")}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-3 font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
              >
                Demander mon devis
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-emerald-500 bg-navy-950 p-8 shadow-xl shadow-emerald-500/10 transition-shadow hover:shadow-2xl">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                  <MapPin className="h-3.5 w-3.5" />
                  Offre Algérie
                </p>
                <span className="rounded-full bg-emerald-500 px-3.5 py-1 text-xs font-bold text-white shadow-lg shadow-emerald-500/40">
                  −50 %
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className="text-5xl font-bold tracking-tight text-white">60 000 DA</span>
                <span className="pb-1.5 text-sm text-slate-400">
                  au lieu de <span className="line-through">120 000 DA</span> · ≈ 400 €
                </span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {INCLUDED.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollToQuote("achat")}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 transition-colors hover:bg-emerald-400"
              >
                <ShoppingBag className="h-4 w-4" />
                Profiter de l'offre Algérie
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
            Le pack est un produit documentaire numérique. Les modalités de livraison et de licence
            sont définies directement avec le vendeur lors de votre demande. Prix indicatifs : un
            devis personnalisé vous sera confirmé.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
