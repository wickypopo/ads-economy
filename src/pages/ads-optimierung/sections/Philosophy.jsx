import Button from "../../../components/Button";
import { adsOptimizationLocale } from "../../../data/Ads";

export default function Philosophy({ locale }) {
  const philosophy = adsOptimizationLocale[locale].philosophy;

  return (
    <section className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 p-4 items-stretch">
      <img
        src={philosophy.image}
        alt=""
        className="w-full md:w-1/2 rounded object-cover aspect-square"
      />

      <div className="w-full md:w-1/2 flex flex-col gap-2 justify-center items-start">
        <span className="text-slate-700">{philosophy.subtitle}</span>

        <span className="instrument text-2xl md:text-6xl md:leading-15">
          {philosophy.title}
        </span>

        <span className="text-slate-700 max-w-[600px]">{philosophy.text}</span>

        <div className="flex flex-col-reverse gap-2 mt-2">
          <Button
            text={adsOptimizationLocale[locale].pageCta}
            link="#bewerben"
            icon={true}
          />

          <Button
            text={adsOptimizationLocale[locale].secondaryCta}
            variant="underline"
            link="/anfragen"
          />
        </div>
      </div>
    </section>
  );
}
