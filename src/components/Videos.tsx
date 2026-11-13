import { useState } from "react";
import { Play, MonitorPlay } from "lucide-react";
import { VIDEO_1, VIDEO_2 } from "../content";
import { Reveal } from "./Reveal";

type VideoCardProps = {
  src: string;
  title: string;
  description: string;
  delay?: number;
};

function VideoCard({ src, title, description, delay = 0 }: VideoCardProps) {
  const [available, setAvailable] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl">
        <div className="relative aspect-video bg-navy-950">
          {available && started ? (
            <video src={src} controls className="h-full w-full" preload="metadata">
              Votre navigateur ne prend pas en charge la lecture vidéo.
            </video>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (available) setStarted(true);
              }}
              disabled={!available}
              className="group relative flex h-full w-full items-center justify-center"
              aria-label={available ? `Lire : ${title}` : "Démonstration bientôt disponible"}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-950 to-sky-950"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-center gap-4 px-6 text-center">
                {available ? (
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 shadow-xl shadow-sky-500/40 transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 text-white" />
                  </span>
                ) : (
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
                    <MonitorPlay className="h-7 w-7 text-sky-300" />
                  </span>
                )}
                {available ? (
                  <span className="text-sm font-medium text-slate-300">Cliquez pour lancer la vidéo</span>
                ) : (
                  <span className="text-sm font-medium text-slate-400">
                    Démonstration bientôt disponible
                  </span>
                )}
              </div>
            </button>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Découvrez le pack en action
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Deux démonstrations pour explorer la bibliothèque et voir comment l'utiliser dans vos
            missions au quotidien.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <VideoCard {...VIDEO_1} />
          <VideoCard {...VIDEO_2} delay={120} />
        </div>
      </div>
    </section>
  );
}
