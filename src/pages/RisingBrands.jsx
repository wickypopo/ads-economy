import { useState } from "react";
import { pricingData } from "../data/pricingData";
import { useLocale } from "../utils/useLocale";
import { Square } from "lucide-react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Funnel from "../components/Funnel";

import { risingBrands } from "../data/risingBrands";

export default function RisingBrands() {
  const { locale, setLocale, t } = useLocale();

  return (
    <>
      <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
        <Funnel />
        <span className="instrument text-6xl">
          {risingBrands[locale].hero.title}
        </span>
        <span className="text-slate-600">
          <p
            className="max-w-[400px]"
            dangerouslySetInnerHTML={{
              __html: risingBrands[locale].hero.text,
            }}
          />
        </span>
        <Button link="/contact" text={risingBrands[locale].hero.cta} />
      </section>
      <section className="py-10">
        <div className="flex justify-center w-full gap-8">
          <div className="flex flex-col items-center">
            <img
              src={risingBrands[locale].hero.items.item1.img}
              className="size-30 bg-blue-600 mb-2 object-cover rounded"
            />
            <span className="text-slate-600 text-sm">
              {risingBrands[locale].hero.items.item1.title}
            </span>
            <span className="font-medium">
              {risingBrands[locale].hero.items.item1.text}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={risingBrands[locale].hero.items.item2.img}
              className="size-30 bg-blue-600 mb-2 object-cover rounded"
            />
            <span className="text-slate-600 text-sm">
              {risingBrands[locale].hero.items.item2.title}
            </span>
            <span className="font-medium">
              {risingBrands[locale].hero.items.item2.text}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={risingBrands[locale].hero.items.item3.img}
              className="size-30 bg-blue-600 mb-2 object-cover rounded"
            />
            <span className="text-slate-600 text-sm">
              {risingBrands[locale].hero.items.item3.title}
            </span>
            <span className="font-medium">
              {risingBrands[locale].hero.items.item3.text}
            </span>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center gap-4 border-y border-slate-300 max-w-[1200px] w-full lg:text-center">
        <div className="flex flex-col lg:items-center h-full w-full px-4 py-40 gap-4">
          <h2 className="instrument text-4xl">
            {risingBrands[locale].program.title}
          </h2>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
          <span className="text-slate-600 max-w-[600px]">
            {risingBrands[locale].program.text}
          </span>
          <Button link="/contact" text={risingBrands[locale].hero.cta} />
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 border-b border-slate-300 max-w-[1200px] w-full">
        <div className="flex flex-col lg:items-center h-full w-full px-4 py-40 gap-4">
          <h2 className="instrument text-4xl">
            {risingBrands[locale].qualification.title}
          </h2>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5 lg:items-center" />

          <ul className="flex flex-col gap-2 mt-1 lg:items-center">
            {risingBrands[locale].qualification.items.map((item) => (
              <li className="flex items-center gap-1 font-medium">
                <Square className="size-2 fill-blue-500 stroke-none" />
                {item}
              </li>
            ))}
          </ul>
          <Button link="/contact" text={risingBrands[locale].hero.cta} />
          <div className="flex flex-col  lg:text-center">
            <span className="text-sm text-slate-600">
              {risingBrands[locale].qualification.fallbackText}
            </span>
            <Link to="/premier-brands">
              <span className="underline font-medium">
                {risingBrands[locale].qualification.fallbackLink}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 blue -ml-4 -mr-4 p-4 text-white lg:max-w-[1200px] lg:w-full">
        <div className="flex flex-col h-full w-full px-4 py-40 gap-4">
          <h2 className="instrument text-4xl">
            {risingBrands[locale].partnership.title}
          </h2>
          <span className="text-slate-300">
            {risingBrands[locale].partnership.subtitle}
          </span>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {risingBrands[locale].partnership.tools.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {risingBrands[locale].partnership.tools.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {risingBrands[locale].partnership.adsManagement.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {risingBrands[locale].partnership.adsManagement.items.map(
                (item) => (
                  <li className="flex items-center gap-1 font-medium">
                    <Square className="size-2 fill-blue-500 stroke-none" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {risingBrands[locale].partnership.studies.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {risingBrands[locale].partnership.studies.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {risingBrands[locale].partnership.coms.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {risingBrands[locale].partnership.coms.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <span className="line-through text-slate-200">
            {risingBrands[locale].partnership.minimumFee}
          </span>
          <span className="text-xl leading-none">
            {risingBrands[locale].partnership.risingBrandsFeeLabel}
          </span>
          <span className="text-4xl font-semibold leading-none">
            {risingBrands[locale].partnership.risingBrandsFee}
          </span>
          <span className="text-sm text-slate-200 leading-none">
            {risingBrands[locale].partnership.feeTaxInfo}
          </span>
          <Button
            link="/contact"
            variant="white"
            text={risingBrands[locale].hero.cta}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 border-b border-slate-300 max-w-[1200px] w-full">
        <div className="flex flex-col h-full w-full px-4 py-40 gap-4">
          <h2 className="instrument text-4xl">
            {risingBrands[locale].applicationProcess.title}
          </h2>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5" />

          <ul className="flex flex-col gap-2 mt-1">
            {risingBrands[locale].applicationProcess.items.map((item) => (
              <li className="flex items-center gap-1 font-medium">
                <Square className="size-2 fill-blue-500 stroke-none" />
                {item}
              </li>
            ))}
          </ul>
          <Button link="/contact" text={risingBrands[locale].hero.cta} />
        </div>
      </section>
      <section className="flex flex-col items-center gap-4 blue p-4 text-white lg:max-w-[1200px] md:w-full">
        <div className="flex flex-col items-center h-full w-screen md:w-full px-4 py-40 gap-4">
          <h2 className="text-center text-6xl instrument">
            {risingBrands[locale].footerCta.title}
          </h2>
          <div className="border-b border-slate-300 border-zinc-300 w-2/5" />
          <span className="w-[300px]">
            {risingBrands[locale].footerCta.text}
          </span>
          <div className="flex gap-2">
            <Button
              link="/contact"
              text={risingBrands[locale].footerCta.cta}
              variant={"white"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
