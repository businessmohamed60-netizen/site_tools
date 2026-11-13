import { Lightbulb, FileSpreadsheet, FileType2 } from "lucide-react";
import { Reveal } from "./Reveal";

export default function DocumentsGuides() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md rounded-xl border border-slate-200 bg-slate-50 shadow-xl">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-3">
                <FileType2 className="h-4 w-4 text-sky-700" />
                <span className="text-sm font-semibold text-slate-700">Plan_d_audit_IATF.docx</span>
                <FileSpreadsheet className="ml-auto h-4 w-4 text-emerald-700" />
              </div>
              <div className="space-y-3 p-6">
                <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3">
                  <p className="flex items-center gap-2 text-xs font-bold text-amber-700">
                    <Lightbulb className="h-3.5 w-3.5" />
                    Barre d'aide
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-amber-800">
                    Indiquez ici le périmètre audité, les exigences concernées et les références des
                    processus à couvrir lors de l'audit.
                  </p>
                </div>
                <div className="space-y-2.5 pt-1">
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-11/12 rounded bg-slate-200" />
                  <div className="h-8 rounded border border-slate-200 bg-white" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                  <div className="h-8 rounded border border-slate-200 bg-white" />
                  <div className="h-2 w-3/5 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Des outils conçus pour faciliter le travail du consultant
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Les documents du pack intègrent des barres d'aide et des informations directement dans
              les fichiers : elles vous guident pour renseigner chaque section et utiliser chaque
              outil correctement, sans formation préalable.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Vous savez ainsi toujours quoi saisir, où et pourquoi : un gain de temps immédiat lors
              de la préparation de vos missions et de vos dossiers clients.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
