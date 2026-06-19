import { LineChart } from "lucide-react";

export default function UseCases({ content }) {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4">
      <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col gap-2 lg:order-2">
          <span className="text-slate-600">{content.eyebrow}</span>
          <span className="instrument m-0 text-4xl leading-tight md:leading-[1.05]">
            {content.title}
          </span>
          <p className="leading-7 text-slate-600">{content.text}</p>

          <div className="flex items-center gap-3 rounded border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <LineChart className="size-5 shrink-0 text-emerald-600" />
            {content.note}
          </div>
        </div>

        <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 lg:order-1">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="h-[520px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
