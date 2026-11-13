import { ArrowRight, FileText, Sparkles, Award } from "lucide-react";
import { Counter, Reveal } from "./Reveal";
import { scrollToQuote, type RequestType } from "../quote";

const HERO_IMG =
  "https://images.pexels.com/photos/17018372/pexels-photo-17018372.jpeg?auto=compress&cs=tinysrgb&w=1200";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-navy-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-40">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            <Sparkles className="h-3.5 w-3.5" />
            Pack Consultant – Marque blanche
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            Votre expertise de consultant mérite des outils à sa hauteur.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            La boîte à outils IATF 16949 – Pack Consultant : une bibliothèque professionnelle pour
            structurer vos missions, gagner du temps et apporter davantage de valeur à vos clients.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pack"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-sky-500/30 transition-all hover:bg-sky-400"
            >
              Découvrir le pack
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => scrollToQuote("devis" as RequestType)}
              className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-sky-400 hover:text-sky-300"
            >
              Demander un devis
            </button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: 330, s: "+", l: "fichiers organisés" },
              { v: 13, s: "", l: "familles d'outils" },
              { v: 100, s: "%", l: "personnalisable" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-3xl font-bold text-sky-400">
                  <Counter target={s.v} suffix={s.s} />
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-sky-500/25 via-transparent to-emerald-500/20 blur-2xl" />
            <img
              src={HERO_IMG}
              alt="Classeurs documentaires professionnels organisés sur un bureau de consultant"
              className="relative w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-navy-950"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-white/10 bg-navy-900/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15">
                <Award className="h-5 w-5 text-emerald-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Exigences automobiles</p>
                <p className="text-xs text-slate-400">Approche industrielle européenne</p>
              </div>
            </div>
            <div className="absolute -top-5 right-4 hidden items-center gap-2 rounded-xl border border-white/10 bg-navy-900/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
              <FileText className="h-5 w-5 text-sky-400" />
              <p className="text-sm font-semibold text-white">Plus de 330 fichiers Word &amp; Excel</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
