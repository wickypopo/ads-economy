import Button from "../../../components/Button";
import { home } from "../../../data/home";

export default function CTA({ locale }) {
  return (
    <section className="p-4 gap-4 w-full max-w-[1200px] p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col items-center justify-center text-center">
      <div className="flex flex-col z-30 gap-2">
        <span className="text-slate-100">
          {home[locale].risingBrands.question}
        </span>
        <span className="instrument text-4xl md:text-6xl md:leading-15 text-white">
          {home[locale].risingBrands.title}
        </span>
        <span className="text-slate-100 max-w-[600px]">
          {home[locale].risingBrands.text}
        </span>
      </div>
      <Button
        text={home[locale].pageCta}
        link="/bewerben"
        icon={true}
        variant="white"
      />
      <span className="text-slate-200 text-xs -mt-2">
        {home[locale].risingBrands.info}
      </span>
      <div className="h-full absolute -left-20 -right-20" />
    </section>
  );
}
