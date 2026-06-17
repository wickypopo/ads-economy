import { adsOptimizationLocale, optimizationItems } from "../data/Ads";
import { useLocale } from "../utils/useLocale";
import { Square } from "lucide-react";

import Funnel from "../components/Funnel";
import Button from "../components/Button";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";

export default function AdsOptimierung() {
  const { locale, setLocale, t } = useLocale();
  console.log(adsOptimizationLocale[locale]);

  const map = optimizationItems.map((item) => (
    <div className="flex flex-shrink-0 bg-slate-100 px-4 py-8 rounded justify-between">
      <div className="flex flex-col h-full w-full border-r border-slate-400 gap-1">
        <span className="text-slate-500 text-sm">Umgesetzte Maßnahme</span>
        <span className="text-xl text-slate-600 ">{item.action}</span>
      </div>
      <div className="flex flex-col h-full w-full pl-8 gap-1">
        <span className="text-slate-500 text-sm">Erzielte Wirkung</span>
        <span className="text-xl text-blue-600 font-medium">{item.effect}</span>
      </div>
    </div>
  ));
  return (
    <main className="flex flex-col items-center gap-40">
      <section className="w-full flex flex-col items-center py-15 gap-2 text-center p-4 lg:p-0">
        <Funnel />
        <span className="text-slate-600">
          {adsOptimizationLocale[locale].hero.subtitle}
        </span>
        <span className="instrument text-4xl md:text-6xl md:leading-15">
          {adsOptimizationLocale[locale].hero.title1}
        </span>
        <span className="instrument-italic text-4xl md:text-6xl md:leading-15">
          {adsOptimizationLocale[locale].hero.title2}
        </span>
        <Button text="Werde 1 von 15 Rising Brands ->" />
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].latestOptimizationSingle.title}
        </span>
        <Ticker />
      </section>
      <section className="w-full max-w-[1200px] h-100 px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].latestOptimizationSingle.title}
        </span>
        <Slider />
      </section>
      <section className="p-4 gap-4 w-full max-w-[1200px] p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col z-30 gap-2">
          <span className="text-slate-100">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.question}
          </span>
          <span className="instrument text-4xl md:text-6xl md:leading-15 text-white">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.title}
          </span>
          <span className="text-slate-100 max-w-[600px]">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.text}
          </span>
        </div>

        <Button text="Jetzt bewerben" variant="white" />
        <span className="text-slate-200 text-xs -mt-2">
          {adsOptimizationLocale[locale].risingBrandsChanceBottom.info}
        </span>
        <div className="h-full absolute -left-20 -right-20" />
      </section>
      <section className="w-full max-w-[1200px] h-100 flex gap-8">
        <img
          src={adsOptimizationLocale[locale].dataBasedGrowth.image}
          className="w-full h-full rounded"
        ></img>
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <span className="text-slate-700">
            {adsOptimizationLocale[locale].dataBasedGrowth.subtitle}
          </span>
          <span className="instrument text-2xl md:text-6xl md:leading-15 ">
            {adsOptimizationLocale[locale].dataBasedGrowth.title}
          </span>
          <span className="text-slate-700 max-w-[600px]">
            {adsOptimizationLocale[locale].dataBasedGrowth.text}
          </span>
          <Button text="Jetzt bewerben" />
        </div>
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].latestOptimizationSingle.title}
        </span>
        <Ticker />
        <Ticker />
        <Ticker />
      </section>
      <section className="w-full max-w-[1200px] h-100 bg-blue-200">
        Zusammenarbeit
      </section>
      <section className="p-4 gap-4 w-full max-w-[1200px] p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col z-30 gap-2">
          <span className="text-slate-100">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.question}
          </span>
          <span className="instrument text-4xl md:text-6xl md:leading-15 text-white">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.title}
          </span>
          <span className="text-slate-100 max-w-[600px]">
            {adsOptimizationLocale[locale].risingBrandsChanceBottom.text}
          </span>
        </div>

        <Button text="Jetzt bewerben" variant="white" />
        <span className="text-slate-200 text-xs -mt-2">
          {adsOptimizationLocale[locale].risingBrandsChanceBottom.info}
        </span>
        <div className="h-full absolute -left-20 -right-20" />
      </section>
      <section className="w-full max-w-[1200px] h-100 bg-blue-200">
        Wachstums Philosophie
      </section>
      {/* 
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

      ==========================
        <section className="w-full max-w-[1200px] h-100 flex flex-col items-center justify-center gap-4">
        <span className="text-slate-950 text-xl font-medium">
          {adsOptimizationLocale[locale].latestOptimizationSingle.title}
        </span>
        <div className="flex flex-col gap-2 overflow-hidden relative max-w-[1200px] w-full rounded">
          {map}
        </div>
      </section>
      <section className="w-full max-w-[1200px] h-100 flex flex-col items-center justify-center gap-4">
        <span className="text-slate-600">
          {adsOptimizationLocale[locale].hero.subtitle}
        </span>
        <div className="flex gap-4 overflow-hidden relative max-w-[1200px]">
          <div className="h-full w-50 absolute bg-linear-to-l from-white/0 to-white/100" />
          
          {map}
          <div className="h-full w-50 absolute bg-linear-to-r from-white/0 to-white/100 right-0" />
        </div>
      </section>

      */}
    </main>
  );
}
