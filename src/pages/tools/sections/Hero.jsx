import { Bot, TrendingUp } from "lucide-react";
import Button from "../../../components/Button";

export default function Hero({ content }) {
  return (
    <section className="w-full max-w-[1200px] min-w-0 px-0 pt-12 sm:px-4 md:pt-18">
      <div className="flex flex-col items-center text-center">
        <span className="instrument m-0 max-w-full px-1 text-4xl leading-[1.02] sm:text-5xl md:max-w-[950px] md:text-7xl md:leading-[0.98]">
          {content.title1}
        </span>
        <span className="instrument-italic m-0 max-w-full px-1 text-4xl leading-[1.02] sm:text-5xl md:max-w-[950px] md:text-7xl md:leading-[0.98]">
          {content.title2}
        </span>

        <p className="mt-5 max-w-[340px] px-1 text-base leading-7 text-slate-600 sm:max-w-[700px] md:text-lg">
          {content.text}
        </p>

        <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row">
          <Button
            text={content.cta.text}
            link={content.cta.link}
            icon={true}
          />
        </div>
      </div>

      <div className="relative w-full min-w-0">
        <div className="mx-auto grid hidden max-w-[920px] grid-cols-1 gap-2 sm:grid-cols-3">
          {content.metrics.map((item) => (
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

        <div className="relative mx-auto flex w-full min-w-0 justify-center overflow-hidden rounded-b-[50px] bg-linear-to-t from-indigo-950 from-0% via-blue-600 via-20% to-white to-80%">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="relative z-10 w-full max-w-[1100px] translate-y-10"
          />

          <div className="absolute left-5 top-[12%] z-20 hidden w-[260px] rounded border border-slate-200 bg-white p-4 text-left shadow-xl lg:block">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded bg-blue-600 text-white">
                <Bot className="size-4" />
              </span>
              <span className="text-sm font-semibold text-slate-950">
                {content.recommendation.title}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              {content.recommendation.text}
            </p>
          </div>

          <div className="absolute right-5 top-[28%] z-20 hidden w-[230px] rounded border border-slate-200 bg-white p-4 text-left shadow-xl md:block">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-slate-500">
                {content.forecast.title}
              </span>
              <TrendingUp className="size-4 text-emerald-600" />
            </div>
            <span className="mt-2 block text-3xl font-semibold text-slate-950">
              {content.forecast.value}
            </span>
            <span className="text-sm text-slate-500">
              {content.forecast.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
