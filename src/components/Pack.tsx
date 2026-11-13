import { ClipboardList, Building2, Gauge, FileSearch } from "lucide-react";
import { Counter, Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Modèles Word et Excel",
    description: "Des documents professionnels entièrement personnalisables, structurés et prêts à adapter.",
  },
  {
    icon: FileSearch,
    title: "Méthodes, procédures et matrices",
    description: "Méthodes, procédures, formulaires et matrices couvrant les exigences du référentiel.",
  },
  {
    icon: Gauge,
    title: "Tableaux de bord et pilotage",
    description: "Indicateurs et outils de suivi pour piloter le système de management de vos clients.",
  },
  {
    icon: Building2,
    title: "Fichiers d'accompagnement",
    description: "Aide à l'utilisation intégrée pour prendre en main chaque outil rapidement.",
  },
];

export default function Pack() {
  return (
    <section id="pack" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Un pack documentaire numérique conçu pour les consultants
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              La Boîte à Outils IATF 16949 – Pack Consultant est une bibliothèque de documents
              numériques dédiée aux professionnels de l'accompagnement qualité automobile. Non pas
              une boîte physique, mais une véritable infrastructure de mission.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-6 text-center">
                <p className="text-4xl font-bold text-sky-700">
                  <Counter target={330} />
                  <span className="text-sky-500">+</span>
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">fichiers organisés</p>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-6 text-center">
                <p className="text-4xl font-bold text-emerald-700">
                  <Counter target={13} />
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">familles d'outils</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <f.icon className="h-8 w-8 text-sky-600" />
                  <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
