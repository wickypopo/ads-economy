import { ChartColumnBig, Layers, LineChart, PackageSearch } from "lucide-react";

const useCases = [
  {
    icon: ChartColumnBig,
    title: "Performance Teams",
    text: "Tagesstarts mit klaren Prioritäten statt Reporting-Marathon.",
    metric: "+31%",
    label: "schnellere Entscheidungen",
  },
  {
    icon: Layers,
    title: "Creative Teams",
    text: "Gewinner verstehen, neue Varianten briefen und Tests sauber clustern.",
    metric: "48h",
    label: "von Insight zu neuem Test",
  },
  {
    icon: PackageSearch,
    title: "Founder & Leads",
    text: "Account Health, Risiken und Hebel ohne Operative-Detailarbeit sehen.",
    metric: "1",
    label: "zentrale Wahrheit",
  },
];

export default function UseCases() {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-2 lg:order-2">
          <span className="text-slate-600">Gebaut für Wachstum</span>
          <span className="instrument m-0 leading-tight text-4xl md:leading-[1.05]">
            Ein Tool für Teams, die schneller entscheiden müssen.
          </span>
          <p className="leading-7 text-slate-600">
            Nicht noch ein Dashboard. Ein Arbeitsbereich, der Zahlen, Creatives
            und nächste Schritte in eine gemeinsame Richtung bringt.
          </p>

          <div className="flex items-center gap-3 rounded border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <LineChart className="size-5 shrink-0 text-emerald-600" />
            Empfehlungen werden mit Account-Zielen und historischen Ergebnissen
            abgeglichen, bevor dein Team sie sieht.
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 lg:order-1">
          <img
            src="/growth.png"
            alt="Ads Economy Growth Team"
            className="h-[520px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
