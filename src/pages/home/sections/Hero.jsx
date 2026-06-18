import Button from "../../../components/Button";
import AnimatedGlobe from "../../../components/AnimatedGlobe";
import { home } from "../../../data/home";

export default function Hero({ locale }) {
  return (
    <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
      <AnimatedGlobe />

      <span
        className="text-center text-4xl md:text-5xl lg:text-6xl instrument"
        dangerouslySetInnerHTML={{
          __html: home[locale].hero.title,
        }}
      />
      <span className="text-zinc-500">{home[locale].hero.subtitle}</span>
      <div className="flex gap-2">
        <Button
          text={home[locale].hero.buttons.risingBrands}
          link="/rising-brands"
          variant={"primary"}
        />
        <Button
          text={home[locale].hero.buttons.premiereBrands}
          link="/premier-brands"
          variant={"secondary"}
        />
      </div>
    </section>
  );
}
