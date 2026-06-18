import Button from "../../../components/Button";
import AnimatedGlobe from "../../../components/AnimatedGlobe";
import { home } from "../../../data/home";

export default function Hero({ locale }) {
  return (
    <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
      <AnimatedGlobe />
      <span className="text-zinc-500">{home[locale].hero.subtitle}</span>
      <span className="instrument text-4xl md:text-6xl md:leading-15">
        {home[locale].hero.title1}
      </span>
      <span className="instrument-italic text-4xl md:text-6xl md:leading-15">
        {home[locale].hero.title2}
      </span>
      <span className="text-slate-600">{home[locale].hero.subtitle}</span>

      <div className="flex flex-col-reverse gap-2 items-center mt-2">
        <Button
          text={home[locale].pageCta}
          link="/ads-optimierung"
          icon={true}
        />
      </div>
    </section>
  );
}
