import { Brain, Database, ScanSearch, Target } from "lucide-react";

const signals = [
  {
    icon: Database,
    title: "Daten verbinden",
    text: "Ad Accounts, Shop Events, Creative Learnings und Ziele laufen in einem Modell zusammen.",
  },
  {
    icon: ScanSearch,
    title: "Muster erkennen",
    text: "Die AI findet Anomalien, Saisonalität und Budget-Leaks, bevor sie im Reporting offensichtlich werden.",
  },
  {
    icon: Target,
    title: "Prioritäten setzen",
    text: "Jede Empfehlung bekommt Impact, Aufwand und den nächsten konkreten Schritt dazu.",
  },
];

export default function Intelligence() {
  return (
    <section
      id="intelligence"
      className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4"
    >
      <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <span className="text-slate-600">AI Intelligence Layer</span>
          <span className="instrument m-0 text-3xl leading-tight sm:text-4xl md:text-4xl md:leading-[1.05]">
            Nicht mehr suchen. Wissen, was zu tun ist.
          </span>
          <p className="max-w-[620px] leading-7 text-slate-600">
            Das Tool fasst die wichtigsten Performance-Signale zusammen und
            übersetzt sie in klare Entscheidungen. Dein Team sieht nicht nur,
            was passiert ist, sondern wo der nächste Hebel liegt.
          </p>
        </div>

        <div className="relative min-w-0 overflow-hidden hidden md:block">
          <div className="mt-4 grid gap-2">
            {signals.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-4 border-t border-slate-200 py-4 first:border-t-0"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-50 text-blue-600">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-950">
                      {item.title}
                    </span>
                    <span className="text-sm leading-6 text-slate-600">
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
