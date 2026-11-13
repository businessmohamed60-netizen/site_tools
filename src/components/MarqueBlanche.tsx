import { BadgeCheck, ArrowRight, Palette } from "lucide-react";
import { Reveal } from "./Reveal";

const BENEFITS = [
  "Intégration du logo du consultant",
  "Personnalisation de l'identité visuelle",
  "Adaptation des documents à vos méthodes de travail",
  "Valorisation de vos prestations auprès de vos clients",
  "Constitution d'une bibliothèque professionnelle réutilisable",
];

export default function MarqueBlanche() {
  return (
    <section id="marque-blanche" className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Palette className="h-3.5 w-3.5" />
            L'avantage marque blanche
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Votre identité. Votre expertise. Vos clients.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Personnalisez les documents selon votre identité professionnelle et celle de votre
            cabinet : c'est votre nom, votre logo et votre image qui apparaissent face à vos clients.
          </p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-200">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-400">
              La personnalisation est réalisée par vos soins : les documents sont fournis sous forme
              de modèles modifiables que vous adaptez librement à votre image.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-slate-700">
                  <span className="text-xs font-bold text-slate-300">GÉNÉRIQUE</span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Document standard</p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded bg-slate-700/80" />
                  <div className="h-2 w-4/5 rounded bg-slate-700/60" />
                  <div className="h-2 w-3/5 rounded bg-slate-700/40" />
                </div>
              </div>

              <div className="mx-auto rotate-90 sm:rotate-0">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 shadow-lg shadow-sky-500/40">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </div>

              <div className="rounded-xl border border-sky-400/40 bg-gradient-to-br from-sky-500/15 to-emerald-500/10 p-6 text-center shadow-lg shadow-sky-500/10">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-emerald-500">
                  <span className="text-xs font-bold text-white">VOTRE LOGO</span>
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-sky-300">Votre document</p>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded bg-sky-400/70" />
                  <div className="h-2 w-4/5 rounded bg-sky-400/50" />
                  <div className="h-2 w-3/5 rounded bg-emerald-400/50" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
