import { ArrowRight, ShoppingBag } from "lucide-react";
import { scrollToQuote } from "../quote";
import { Reveal } from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
          Donnez une nouvelle dimension à votre activité de consultant.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Équipez vos missions d'une bibliothèque professionnelle structurée, personnalisable et
          pensée pour les exigences de l'industrie automobile.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => scrollToQuote("devis")}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-sky-500/30 transition-all hover:bg-sky-400"
          >
            Demander mon devis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollToQuote("achat")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-emerald-500/25 transition-all hover:bg-emerald-400"
          >
            <ShoppingBag className="h-4 w-4" />
            Exprimer mon intention d'achat
          </button>
        </div>
      </Reveal>
    </section>
  );
}
