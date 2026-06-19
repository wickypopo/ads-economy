import { Bot, Check, Sparkles, TrendingUp } from "lucide-react";
import Button from "../../../components/Button";

const metrics = [
  { value: "24/7", label: "Account Monitoring" },
  { value: "18%", label: "CPA Potenzial erkannt" },
  { value: "6h", label: "Analysezeit gespart" },
];

export default function Hero() {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 pt-12 sm:px-4 md:pt-18">
      <div className="flex flex-col items-center text-center">
        <span className="instrument m-0 max-w-full px-1 text-4xl leading-[1.02] sm:text-5xl md:max-w-[950px] md:text-7xl md:leading-[0.98]">
          Multipliziere dein Marketing Team
        </span>
        <span className="instrument-italic m-0 max-w-full px-1 text-4xl leading-[1.02] sm:text-5xl md:max-w-[950px] md:text-7xl md:leading-[0.98]">
          mit einem Ki Tool
        </span>

        <p className="mt-5 max-w-[340px] px-1 text-base leading-7 text-slate-600 sm:max-w-[700px] md:text-lg">
          Ein Tool, das Kampagnen, Creatives und Shop-Signale zusammenführt,
          klare Prioritäten setzt und deinem Team jeden Tag die besten nächsten
          Schritte zeigt.
        </p>

        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
          <Button text="Tool Demo anfragen" link="/anfragen" icon={true} />
        </div>
      </div>

      <div className="relative w-full min-w-0">
        <div className="mx-auto grid max-w-[920px] grid-cols-1 gap-2 sm:grid-cols-3 hidden">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded border border-slate-200 bg-white/90 p-4 text-left shadow-sm"
            >
              <span className="block text-2xl font-semibold text-slate-950">
                {item.value}
              </span>
              <span className="text-sm text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="relative mx-auto w-full min-w-0 overflow-hidden bg-linear-to-t from-indigo-950 from-0% via-20% to-80%  via-blue-600 to-white flex justify-center rounded-b-[50px]">
          <img
            src="/mac.png"
            alt="Ads Economy AI Tool Interface"
            className="relative z-10 w-full translate-y-10 max-w-[1100px]"
          />

          <div className="absolute left-5 top-[12%] z-20 hidden w-[260px] rounded border border-slate-200 bg-white p-4 text-left shadow-xl lg:block">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                <Bot className="size-4" />
              </span>
              <span className="text-sm font-semibold text-slate-950">
                AI Empfehlung
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Kampagne 03 pausieren, Budget in Prospecting 01 verschieben.
            </p>
          </div>

          <div className="absolute right-5 top-[28%] z-20 hidden w-[230px] rounded border border-slate-200 bg-white p-4 text-left shadow-xl md:block">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">Forecast</span>
              <TrendingUp className="size-4 text-emerald-600" />
            </div>
            <span className="mt-2 block text-3xl font-semibold text-slate-950">
              +12.4%
            </span>
            <span className="text-sm text-slate-500">erwarteter ROAS Lift</span>
          </div>
        </div>
      </div>
    </section>
  );
}
