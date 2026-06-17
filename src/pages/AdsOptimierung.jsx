import { adsOptimizationLocale, optimizationItems, kunden } from "../data/Ads";
import { useLocale } from "../utils/useLocale";
import {
  Square,
  ChartColumnBig,
  PackageSearch,
  Cone,
  HeartHandshake,
  ArrowDown,
} from "lucide-react";

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
    <main className="flex flex-col items-center gap-40 pb-20">
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
        <div className="flex flex-col-reverse gap-2 items-center mt-2">
          {/* <a
            href="#bewerben"
            className="p-2 px-6 text-white font-medium blue rounded flex items-center gap-2"
          >
            {adsOptimizationLocale[locale].pageCta}
            <ArrowDown className="size-5" />
          </a> */}
          <Button
            text={adsOptimizationLocale[locale].pageCta}
            link="/bewerben"
            icon={true}
          />
        </div>
      </section>

      <section className="p-4 gap-4 w-full max-w-[1200px] p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col z-30 gap-2">
          <span className="text-slate-100">
            {adsOptimizationLocale[locale].risingBrands.question}
          </span>
          <span className="instrument text-4xl md:text-6xl md:leading-15 text-white">
            {adsOptimizationLocale[locale].risingBrands.title}
          </span>
          <span className="text-slate-100 max-w-[600px]">
            {adsOptimizationLocale[locale].risingBrands.text}
          </span>
        </div>

        <Button
          text={adsOptimizationLocale[locale].pageCta}
          link="/bewerben"
          icon={true}
          variant="white"
        />
        <span className="text-slate-200 text-xs -mt-2">
          {adsOptimizationLocale[locale].risingBrands.info}
        </span>
        <div className="h-full absolute -left-20 -right-20" />
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].clients.title}
        </span>
        <div className="grid grid-cols-8 gap-12 mt-4 place-items-center">
          {kunden.map((item) => (
            <img
              key={item.image}
              src={item.image}
              className="h-12 object-contain invert"
            />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[1200px] h-100 px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].slider.title}
        </span>
        <Slider />
      </section>
      <section className="w-full max-w-[1200px] h-100 flex gap-8">
        <img
          src={adsOptimizationLocale[locale].growth.image}
          className="w-full h-full rounded object-cover"
        ></img>
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <span className="text-slate-700">
            {adsOptimizationLocale[locale].growth.subtitle}
          </span>
          <span className="instrument text-2xl md:text-6xl md:leading-15 ">
            {adsOptimizationLocale[locale].growth.title}
          </span>
          <span className="text-slate-700 max-w-[600px]">
            {adsOptimizationLocale[locale].growth.text}
          </span>
          <div className="flex flex-col-reverse gap-2 mt-2">
            <Button
              text={adsOptimizationLocale[locale].pageCta}
              link="/bewerben"
              icon={true}
            />
            <Button
              text={adsOptimizationLocale[locale].secondaryCta}
              variant="underline"
            />
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].ticker.title}
        </span>
        <Ticker />
      </section>
      <section className="w-full max-w-[1200px] h-100 flex gap-8" id="bewerben">
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <span className="text-slate-700">
            {adsOptimizationLocale[locale].collaboration.subtitle}
          </span>
          <span className="instrument text-2xl md:text-6xl md:leading-15 ">
            {adsOptimizationLocale[locale].collaboration.title}
          </span>
          <span className="text-slate-700 max-w-[600px]">
            {adsOptimizationLocale[locale].collaboration.process}
          </span>
          <span className="instrument text-2xl ">
            {adsOptimizationLocale[locale].collaboration.price}
          </span>
          <div className="flex flex-col-reverse gap-2 mt-2">
            <Button
              text={adsOptimizationLocale[locale].pageCta}
              link="/bewerben"
              icon={true}
            />
            <Button
              text={adsOptimizationLocale[locale].secondaryCta}
              variant="underline"
            />
          </div>{" "}
        </div>
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
          <div className="h-full w-full bg-slate-100 p-4 flex flex-col gap-2 rounded">
            {" "}
            <ChartColumnBig className="size-15 stroke-1 text-blue-600" />{" "}
            {adsOptimizationLocale[locale].collaboration.items[0]}
          </div>
          <div className="h-full w-full bg-slate-100 p-4 flex flex-col gap-2 rounded">
            {" "}
            <PackageSearch className="size-15 stroke-1 text-blue-600" />{" "}
            {adsOptimizationLocale[locale].collaboration.items[1]}
          </div>{" "}
          <div className="h-full w-full bg-slate-100 p-4 flex flex-col gap-2 rounded">
            {" "}
            <Cone className="size-15 stroke-1 text-blue-600 rotate-180" />{" "}
            {adsOptimizationLocale[locale].collaboration.items[2]}
          </div>{" "}
          <div className="h-full w-full bg-slate-100 p-4 flex flex-col gap-2 rounded">
            {" "}
            <HeartHandshake className="size-15 stroke-1 text-blue-600" />{" "}
            {adsOptimizationLocale[locale].collaboration.items[3]}
          </div>
        </div>
      </section>

      <section className="p-4 gap-4 w-full max-w-[1200px] p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col items-center justify-center text-center">
        <div className="flex flex-col z-30 gap-2">
          <span className="text-slate-100">
            {adsOptimizationLocale[locale].risingBrands.question}
          </span>
          <span className="instrument text-4xl md:text-6xl md:leading-15 text-white">
            {adsOptimizationLocale[locale].risingBrands.title}
          </span>
          <span className="text-slate-100 max-w-[600px]">
            {adsOptimizationLocale[locale].risingBrands.text}
          </span>
        </div>

        <Button
          text={adsOptimizationLocale[locale].pageCta}
          link="/bewerben"
          icon={true}
          variant="white"
        />
        <span className="text-slate-200 text-xs -mt-2">
          {adsOptimizationLocale[locale].risingBrands.info}
        </span>
        <div className="h-full absolute -left-20 -right-20" />
      </section>
      <section className="w-full max-w-[1200px] h-100 flex gap-8">
        <img
          src={adsOptimizationLocale[locale].philosophy.image}
          className="w-full h-full rounded object-cover"
        ></img>
        <div className="w-full h-full flex flex-col gap-2 justify-center">
          <span className="text-slate-700">
            {adsOptimizationLocale[locale].philosophy.subtitle}
          </span>
          <span className="instrument text-2xl md:text-6xl md:leading-15 ">
            {adsOptimizationLocale[locale].philosophy.title}
          </span>
          <span className="text-slate-700 max-w-[600px]">
            {adsOptimizationLocale[locale].philosophy.text}
          </span>
          <div className="flex flex-col-reverse gap-2 mt-2">
            <Button
              text={adsOptimizationLocale[locale].pageCta}
              link="/bewerben"
              icon={true}
            />
            <Button
              text={adsOptimizationLocale[locale].secondaryCta}
              variant="underline"
            />
          </div>{" "}
        </div>
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-2 items-center">
        <span className="text-slate-950 text-xl font-medium ">
          {adsOptimizationLocale[locale].ticker.title}
        </span>
        <Ticker />
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
          {adsOptimizationLocale[locale].slider.title}
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
