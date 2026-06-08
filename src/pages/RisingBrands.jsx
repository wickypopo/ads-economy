import { useState } from "react";
import { pricingData } from "../data/pricingData";
import { useLocale } from "../utils/useLocale";
import { Check } from "lucide-react";

export default function RisingBrands() {
  const { locale, setLocale, t } = useLocale();
  console.log(pricingData[locale]);

  return (
    <section className="flex flex-col items-center gap-4">
      <div className="flex flex-col h-full w-full bg-slate-100 border border-slate-300 rounded-4xl px-6 py-40 gap-4">
        <span>{pricingData[locale].badge}</span>
        <h2 className="instrument text-5xl">{pricingData[locale].label}</h2>
        <span className="text-slate-600">
          {pricingData[locale].description}
        </span>
        <ul>
          <li className="flex items-center">
            <Check className="size-5" />
            {pricingData[locale].feature_1}
          </li>
          <li className="flex items-center">
            <Check className="size-5" />
            {pricingData[locale].feature_2}
          </li>
          <li className="flex items-center">
            <Check className="size-5" />
            {pricingData[locale].feature_3}
          </li>
          <li className="flex items-center">
            <Check className="size-5" />
            {pricingData[locale].feature_4}
          </li>
        </ul>
        <span className="instrument text-6xl">{pricingData[locale].price}</span>
        <span className="text-slate-600">{pricingData[locale].period}</span>
      </div>
    </section>
  );
}
