import { Bot, Check, Database, Rocket } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Daten verbinden",
    text: "Meta, Google, Shop und Creative Daten werden täglich synchronisiert.",
  },
  {
    icon: Bot,
    title: "AI analysiert",
    text: "Der Agent findet Chancen, Risiken und Muster auf Kampagnenebene.",
  },
  {
    icon: Check,
    title: "Team approved",
    text: "Empfehlungen landen als To-dos mit Impact Score und Kontext.",
  },
  {
    icon: Rocket,
    title: "Skalieren",
    text: "Gewinner werden schneller ausgerollt, Leaks werden früher geschlossen.",
  },
];

export default function Workflow() {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => {
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
