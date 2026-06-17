import { useState } from "react";
import { premierBrands } from "../data/premierBrands";
import { useLocale } from "../utils/useLocale";
import { motion } from "framer-motion";

export default function Slider() {
  const { locale, setLocale, t } = useLocale();
  const [num, setNum] = useState(0);

  const map = premierBrands[locale].hero.items.map((item) => {
    return (
      <div className="h-full bg-slate-100 rounded-lg flex-shrink-0 flex flex-col p-4 text-2xl w-full md:w-1/3 lg:w-1/4">
        <img
          src={item.img}
          className="object-cover size-full max-h-[250px] rounded"
        />
        <div className="h-full flex flex-col justify-center">
          <span>{item.title}</span>
          <span>{item.text}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-full relative flex gap-4 overflow-hidden">
      <div className="bg-linear-to-l from-white/0 to-white/100 h-full w-25 absolute hidden md:block" />
      <motion.div className="w-full">
        {map}
        {map}
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
