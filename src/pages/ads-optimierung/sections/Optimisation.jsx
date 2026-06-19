import Button from "../../../components/Button";
import WireframeFunnel from "../../../components/Funnel";
import { adsOptimizationLocale } from "../../../data/Ads";

export default function Optimisation({ locale }) {
  return (
    <section className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 px-4 items-stretch">
      <img
        src={adsOptimizationLocale[locale].growth.image}
        className="w-full md:w-1/2 rounded object-cover aspect-square"
        alt=""
      />

      <div className="w-full md:w-1/2 flex flex-col gap-2 justify-center">
        <span className="text-slate-700">
          {adsOptimizationLocale[locale].growth.subtitle}
        </span>

        <span className="instrument text-4xl md:text-6xl md:leading-15">
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
            link="#bewerben"
          />
        </div>
      </div>
    </section>
  );
}
