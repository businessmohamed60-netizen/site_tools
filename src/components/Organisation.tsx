import { FolderTree, ArrowUpRight } from "lucide-react";
import { FAMILIES } from "../content";
import { Counter, Reveal } from "./Reveal";

export default function Organisation() {
  return (
    <section id="organisation" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
                <FolderTree className="h-3.5 w-3.5" />
                Organisation
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Une organisation
                <span className="block bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                  structurée
                </span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Plus de 330 fichiers répartis en 13 grandes familles, pensées pour couvrir
                l'ensemble d'une mission d'accompagnement IATF 16949, du diagnostic au suivi des
                performances.
              </p>
              <div className="mt-8 flex gap-4">
                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-navy-900">
                    <Counter target={330} />
                    <span className="text-sky-600">+</span>
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    fichiers
                  </p>
                </div>
                <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-3xl font-bold text-emerald-700">
                    <Counter target={13} />
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    familles
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAMILIES.map((f, i) => (
              <Reveal key={f.title} delay={Math.min(i * 40, 200)}>
                <div className="group flex items-start gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 sm:p-6">
                  <span className="hidden w-10 shrink-0 bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-2xl font-bold text-transparent sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-950 shadow-md transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-900">
                      <span className="mr-2 text-sm font-bold text-sky-600 sm:hidden">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.description}</p>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
