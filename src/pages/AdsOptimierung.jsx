import { adsOptimizationLocale, optimizationItems } from "../data/Ads";
import { useLocale } from "../utils/useLocale";
import Funnel from "../components/Funnel";
import Button from "../components/Button";

export default function AdsOptimierung() {
  const { locale, setLocale, t } = useLocale();

  const map = optimizationItems.map((item) => (
    <div className="flex flex-col flex-shrink-0 h-full min-h-70 bg-slate-100 px-4 py-8 w-80 rounded justify-between">
      <div className="flex flex-col h-full ">
        <span className="text-slate-600">Umgesetzte Maßnahme</span>
        <span className="text-2xl text-slate-950 ">{item.action}</span>
      </div>
      <div className="w-full border-b border-slate-400" />
      <div className="flex flex-col h-full justify-end">
        <span className="text-slate-600">Erzielte Wirkung</span>
        <span className="text-2xl text-slate-950 font-medium">
          {item.effect}
        </span>
      </div>
    </div>
  ));
  return (
    <main className="flex flex-col items-center gap-4">
      <section className="w-full flex flex-col items-center py-15 gap-2">
        <Funnel />
        <span className="text-slate-600">
          {adsOptimizationLocale[locale].hero.subtitle}
        </span>
        <span className="instrument text-6xl leading-15">
          {adsOptimizationLocale[locale].hero.title1}
        </span>
        <span className="instrument-italic text-6xl leading-15">
          {adsOptimizationLocale[locale].hero.title2}
        </span>
        <Button text="Jetzt bewerben" />
      </section>
      <section className="w-full max-w-[1200px] h-100 flex flex-col items-center justify-center gap-4">
        <span className="text-slate-600">
          {adsOptimizationLocale[locale].hero.subtitle}
        </span>
        <div className="flex gap-4 overflow-hidden relative max-w-[1200px]">
          <div className="h-full w-50 absolute bg-linear-to-l from-white/0 to-white/100" />
          {map}
          {map}
          <div className="h-full w-50 absolute bg-linear-to-r from-white/0 to-white/100 right-0" />
        </div>
      </section>
      <section className="w-full max-w-[1200px] h-100 bg-blue-200"></section>
      <section className="w-full max-w-[1200px] h-100 flex gap-4">
        <div className="w-full h-full bg-blue-200"></div>
        <div className="w-full h-full bg-blue-200"></div>
      </section>
      <section className="w-full max-w-[1200px] h-100 flex gap-4">
        <div className="w-full h-full bg-blue-200"></div>
        <div className="w-full h-full bg-blue-200"></div>
        <div className="w-full h-full bg-blue-200"></div>
      </section>
    </main>
  );
}
