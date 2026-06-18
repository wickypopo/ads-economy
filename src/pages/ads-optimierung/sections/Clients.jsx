import Button from "../../../components/Button";
import Slider from "../../../components/Slider";
import { adsOptimizationLocale, kunden } from "../../../data/Ads";

export default function Hero({ locale }) {
  return (
    <section className="w-full max-w-[1200px] px-4 xl:px-0 flex flex-col gap-4 items-center">
      <span className="text-slate-950 text-xl font-medium">
        {adsOptimizationLocale[locale].clients.title}
      </span>
      <Slider />
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-12 mt-4 place-items-center mt-4">
        {kunden.map((item) => (
          <img
            key={item.image}
            src={item.image}
            className="h-12 object-contain invert"
          />
        ))}
      </div>
    </section>
  );
}
