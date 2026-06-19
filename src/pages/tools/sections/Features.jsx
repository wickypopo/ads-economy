import {
  ChartNoAxesCombined,
  Gauge,
  WandSparkles,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: ChartNoAxesCombined,
    title: "Performance Diagnose",
    text: "Das Tool vergleicht Ziele, Benchmarks und aktuelle Kampagnendaten und zeigt die Abweichungen, die zählen.",
  },
  {
    icon: WandSparkles,
    title: "Creative Insights",
    text: "Gewinner, Verlierer, Hooks und Angles werden zu sauberen Learnings statt losem Bauchgefühl.",
  },
  {
    icon: Workflow,
    title: "Next Best Actions",
    text: "Empfehlungen kommen als klare To-dos mit Priorität, Risiko und erwarteter Wirkung.",
  },
  {
    icon: Gauge,
    title: "Impact Scoring",
    text: "Dein Team sieht sofort, welche Aufgabe den größten Hebel hat und was warten kann.",
  },
];

export default function Features() {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="flex min-h-[245px] flex-col justify-between rounded border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200"
            >
              <div className="flex flex-col gap-4">
                <Icon className="size-12 stroke-1 text-blue-600" />

                <div className="flex flex-col gap-2">
                  <h3 className="m-0 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
