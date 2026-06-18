import Button from "../../../components/Button";
import { home } from "../../../data/home";

export default function CTA({ locale }) {
  return (
    <div className="w-full max-w-[1200px] px-4">
      <section className="p-4 gap-4 px-8 py-20 text-left lg:text-center lg:p-30 bg-linear-to-tr from-blue-950 via-blue-600 to-blue-300 rounded-2xl relative shadow-xl flex flex-col lg:items-center justify-center">
        <div className="flex flex-col gap-2">
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
          link="#bewerben"
          icon={true}
          variant="white"
        />
        <span className="text-slate-200 text-xs -mt-2">
          {home[locale].risingBrands.info}
        </span>
      </section>
    </div>
  );
}
