import { useState } from "react";
import { pricingData } from "../data/pricingData";
import { useLocale } from "../utils/useLocale";
import { Square } from "lucide-react";

import { Link } from "react-router-dom";
import Funnel from "../components/Funnel";
import Button from "../components/Button";
import { premierBrands } from "../data/premierBrands";

export default function PremiereBrands() {
  const { locale, setLocale, t } = useLocale();
  console.log(premierBrands[locale]);

  return (
    <>
      <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
        <Funnel />
        <span className="instrument text-6xl">
          {premierBrands[locale].hero.title}
        </span>
        <span className="text-slate-600">
          <p
            className="max-w-[400px]"
            dangerouslySetInnerHTML={{
              __html: premierBrands[locale].hero.text,
            }}
          />
        </span>
        <Button
          variant="primary-blue"
          link="/contact"
          text={premierBrands[locale].hero.cta}
        />
      </section>
      <section className="py-10">
        <div className="flex justify-center w-full gap-8">
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
        </div>
      </section>
      <section className="flex flex-col justify-center gap-4 border-y border-slate-300 max-w-[1200px] w-full lg:text-center">
        <div className="flex flex-col lg:items-center h-full w-full px-4 py-40 gap-4">
          <span className="instrument text-4xl">
            {premierBrands[locale].program.title}
          </span>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
          <span className="text-slate-600 max-w-[600px]">
            {premierBrands[locale].program.text}
          </span>
          <Button
            variant="primary-blue"
            text={premierBrands[locale].hero.cta}
          />
        </div>
      </section>
      <section className="flex flex-col gap-4 max-w-[1200px] w-full">
        <div className="flex flex-col items-center justify-center h-full w-full px-4 py-40 gap-4">
          <span className="instrument text-4xl">
            {premierBrands[locale].qualification.title}
          </span>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5" />

          <ul className="flex flex-col gap-2 mt-1">
            {premierBrands[locale].qualification.items.map((item) => (
              <li className="flex items-center gap-1 font-medium">
                <Square className="size-2 fill-blue-500 stroke-none" />
                {item}
              </li>
            ))}
          </ul>
          <Button
            variant="primary-blue"
            text={premierBrands[locale].hero.cta}
          />
          <div className="flex flex-col text-center">
            <span className="text-sm text-slate-600">
              {premierBrands[locale].qualification.fallbackText}
            </span>
            <Link to="/rising-brands">
              <span className="underline font-medium">
                {premierBrands[locale].qualification.fallbackLink}
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col  rounded items-center gap-4 blue -ml-4 -mr-4 p-4 text-white lg:max-w-[1200px] lg:w-full">
        <div className="flex flex-col h-full w-full px-4 py-40 gap-4">
          <span className="instrument text-4xl">
            {premierBrands[locale].partnership.title}
          </span>
          <span className="text-slate-300">
            {premierBrands[locale].partnership.subtitle}
          </span>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {premierBrands[locale].partnership.tools.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {premierBrands[locale].partnership.tools.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {premierBrands[locale].partnership.adsManagement.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {premierBrands[locale].partnership.adsManagement.items.map(
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
              {premierBrands[locale].partnership.studies.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {premierBrands[locale].partnership.studies.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded text-black p-4">
            <span className="text-sm text-slate-600">
              {premierBrands[locale].partnership.coms.title}
            </span>

            <ul className="flex flex-col gap-2 mt-1">
              {premierBrands[locale].partnership.coms.items.map((item) => (
                <li className="flex items-center gap-1 font-medium">
                  <Square className="size-2 fill-blue-500 stroke-none" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <span className="text-slate-200">
            {premierBrands[locale].partnership.minimumFee}
          </span>

          <span className="text-4xl font-semibold leading-none">
            {premierBrands[locale].partnership.risingBrandsFee}
          </span>
          <span className="text-sm text-slate-200 leading-none">
            {premierBrands[locale].partnership.feeTaxInfo}
          </span>
          <Button
            variant="primary-blue"
            variant="white"
            text={premierBrands[locale].hero.cta}
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 max-w-[1200px] w-full">
        <div className="flex flex-col h-full w-full px-4 py-40 gap-4">
          <span className="instrument text-4xl">
            {premierBrands[locale].applicationProcess.title}
          </span>
          <div className="border-b border-slate-300 border-zinc-500 w-2/5" />

          <ul className="flex flex-col gap-2 mt-1">
            {premierBrands[locale].applicationProcess.items.map((item) => (
              <li className="flex items-center gap-1 font-medium">
                <Square className="size-2 fill-blue-500 stroke-none" />
                {item}
              </li>
            ))}
          </ul>
          <Button
            variant="primary-blue"
            text={premierBrands[locale].hero.cta}
          />
        </div>
      </section>

      <section className="flex flex-col rounded-t items-center gap-4 blue p-4 text-white lg:max-w-[1200px] md:w-full">
        <div className="flex flex-col items-center h-full w-screen md:w-full px-4 py-40 gap-4">
          <span className="text-center text-6xl instrument">
            {premierBrands[locale].footerCta.title}
          </span>
          <div className="border-b border-slate-300 border-zinc-300 w-2/5" />
          <span className="w-[300px]">
            {premierBrands[locale].footerCta.text}
          </span>
          <div className="flex gap-2">
            <Button
              variant="primary-blue"
              text={premierBrands[locale].footerCta.cta}
              link="/"
              variant={"white"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
