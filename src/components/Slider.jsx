import { useState, useEffect } from "react";
import { premierBrands } from "../data/premierBrands";
import { useLocale } from "../utils/useLocale";
import { motion } from "framer-motion";

export default function Slider() {
  const { locale } = useLocale();

  const items = premierBrands[locale].hero.items;

  const itemMap = items.map((item, index) => {
    return (
      <div
        key={`${item.title}-${index}`}
        className="h-full w-[280px] flex-shrink-0 rounded-lg bg-slate-100 p-4 text-xl"
      >
        <img src={item.img} className="h-[250px] w-full rounded object-cover" />

        <div className="mt-2 flex flex-col justify-center">
          <span>{item.text}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-full relative flex gap-4 overflow-hidden">
      <div className="bg-linear-to-l from-white/0 to-white/100 h-full w-25 absolute hidden md:block z-20" />
      <motion.div
        className="flex w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <div className="flex gap-2 pr-2">{itemMap}</div>
        <div className="flex gap-2 pr-2">{itemMap}</div>
      </motion.div>

      <div className="bg-linear-to-r from-white/0 to-white/100 h-full w-25 absolute right-0 hidden md:block" />
    </div>
  );
  {
    /* <div className="flex justify-center w-full gap-8">
      <div className="flex flex-col items-center">
        <img
          src={premierBrands[locale].hero.items.item1.img}
          className="size-30 bg-blue-600 mb-2 object-cover rounded"
        />
        <span className="text-slate-600 text-sm">
          {premierBrands[locale].hero.items.item1.title}
        </span>
        <span className="font-medium">
          {premierBrands[locale].hero.items.item1.text}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={premierBrands[locale].hero.items.item2.img}
          className="size-30 bg-blue-600 mb-2 object-cover rounded"
        />
        <span className="text-slate-600 text-sm">
          {premierBrands[locale].hero.items.item2.title}
        </span>
        <span className="font-medium">
          {premierBrands[locale].hero.items.item2.text}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={premierBrands[locale].hero.items.item3.img}
          className="size-30 bg-blue-600 mb-2 object-cover rounded"
        />
        <span className="text-slate-600 text-sm">
          {premierBrands[locale].hero.items.item3.title}
        </span>
        <span className="font-medium">
          {premierBrands[locale].hero.items.item3.text}
        </span>
      </div>
    </div>*/
  }
}
