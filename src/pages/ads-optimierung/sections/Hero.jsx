import Button from "../../../components/Button";
import WireframeFunnel from "../../../components/Funnel";
import {
  adsOptimizationLocale,
  optimizationItems,
  kunden,
  reviews,
} from "../../../data/Ads";

export default function Hero({ locale }) {
  return (
    <section className="w-full flex flex-col items-center py-15 gap-2 text-center p-4 lg:p-0">
      <WireframeFunnel />
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
  );
}
