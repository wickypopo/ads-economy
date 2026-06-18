import {
  adsOptimizationLocale,
  optimizationItems,
  kunden,
  reviews,
} from "../data/Ads";
import { useLocale } from "../utils/useLocale";
import {
  Square,
  ChartColumnBig,
  PackageSearch,
  Cone,
  HeartHandshake,
  ArrowDown,
  Star,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Funnel from "../components/Funnel";
import Button from "../components/Button";
import Ticker from "../components/Ticker";
import Slider from "../components/Slider";
import Reviews from "../components/Reviews";

export default function AdsOptimierung() {
  const { locale, setLocale, t } = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);

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
    <main className="flex flex-col items-center gap-40 pb-20 overflow-hidden">
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
          <Button
            text={adsOptimizationLocale[locale].pageCta}
            link="/bewerben"
            icon={true}
          />
        </div>
      </section>
      <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-4 items-center">
        <span className="text-slate-950 text-xl font-medium">
          {adsOptimizationLocale[locale].clients.title}
        </span>
        <Slider />
        <div className="grid grid-cols-8 gap-12 mt-4 place-items-center mt-4">
          {kunden.map((item) => (
            <img
              key={item.image}
              src={item.image}
              className="h-12 object-contain invert"
            />
          ))}
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
      <section className="w-full max-w-[1200px] flex gap-8">
        <img
          src={adsOptimizationLocale[locale].growth.image}
          className="w-1/2 h-full rounded object-cover"
        ></img>
        <div className="w-full h-full flex flex-col gap-2 justify-center pt-10">
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
      <section
        className="w-full max-w-[800px] flex gap-8 mx-auto px-4 py-24"
        id="bewerben"
      >
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center text-center">
          <span className="text-slate-700">
            {adsOptimizationLocale[locale].collaboration.subtitle}
          </span>
          <span className="instrument text-2xl md:text-6xl md:leading-15 ">
            {adsOptimizationLocale[locale].collaboration.title}
          </span>
          <span className="text-slate-700 max-w-[600px]">
            {adsOptimizationLocale[locale].collaboration.text}
          </span>
          <ul className="w-full flex flex-col gap-2 mb-4">
            {adsOptimizationLocale[locale].collaboration.items.map(
              (item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.li
                    layout="position"
                    key={index}
                    className={`w-full rounded overflow-hidden text-left transition-colors ${
                      isActive
                        ? "bg-slate-100 border-slate-300"
                        : "bg-slate-50 border-transparent hover:bg-slate-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="w-full p-4 flex items-start gap-3 text-left group"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`font-bold shrink-0 transition-colors ${
                          isActive ? "text-blue-600" : "text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </span>

                      <div className="flex-1 min-w-0">
                        <span
                          className={`block font-medium transition-colors ${
                            isActive ? "text-slate-950" : "text-slate-700"
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      <motion.span
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="shrink-0 mt-1 text-slate-400 group-hover:text-slate-700"
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            },
                            opacity: {
                              duration: 0.2,
                            },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 pb-4 pl-11 text-sm leading-relaxed text-slate-600">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              },
            )}
          </ul>
          <span className="text-xl leading-none">
            {adsOptimizationLocale[locale].collaboration.price}
          </span>
          <span className="text-xl font-semibold leading-none">
            {adsOptimizationLocale[locale].collaboration.risingBrandsCta}
          </span>
          <div className="flex flex-col-reverse gap-2 mt-2">
            <Button text="Jetzt Bewerben" link="/bewerben" icon={true} />
          </div>{" "}
        </div>
        {/* 
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
        */}
      </section>
      <section className="w-full max-w-[1200px] flex gap-4">
        <Reviews />
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
