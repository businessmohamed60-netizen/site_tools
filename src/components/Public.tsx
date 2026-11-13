import { UserCheck, MapPin } from "lucide-react";
import { PROFILES } from "../content";
import { Reveal } from "./Reveal";

export default function Public() {
  return (
    <section id="public" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            <UserCheck className="h-3.5 w-3.5" />
            Public concerné
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pour qui est destiné le pack ?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <div className="h-full rounded-xl border-l-4 border-sky-600 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-50/60 hover:shadow-lg">
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-xl">
          <div className="grid md:grid-cols-2">
            <img
              src="https://images.pexels.com/photos/35383622/pexels-photo-35383622.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Contrôleur qualité examinant des documents dans une usine automobile"
              className="h-56 w-full object-cover md:h-full"
              loading="lazy"
            />
            <div className="bg-navy-950 p-8 lg:p-10">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                <MapPin className="h-3.5 w-3.5" />
                Positionnement
              </p>
              <h3 className="mt-3 text-xl font-bold leading-snug text-white lg:text-2xl">
                Une expertise issue de l'industrie automobile européenne, mise au service des
                professionnels et consultants en Algérie.
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                Le pack est adapté aux réalités et aux besoins des consultants et des entreprises du
                secteur automobile algérien, avec une attention particulière portée aux exigences
                automobiles et aux exigences spécifiques clients, notamment celles liées à
                Stellantis lorsque les documents correspondants sont présents dans le pack.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Le pack est un outil de travail documentaire. Il ne constitue pas une certification,
                une accréditation ni un produit agréé par l'IATF ou un constructeur.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
