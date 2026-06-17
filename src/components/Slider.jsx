import { premierBrands } from "../data/premierBrands";
import { useLocale } from "../utils/useLocale";

export default function Slider() {
  const { locale, setLocale, t } = useLocale();
  console.log(premierBrands[locale].hero.items);
  const map = premierBrands[locale].hero.items.map((item) => {
    return (
      <div className="h-full bg-slate-300 rounded shadow-xl shadow-slate-500/15 flex-shrink-0 flex flex-col p-4 text-2xl w-1/4">
        <img
          src={item.img}
          className="object-cover size-full max-h-[250px] rounded"
        />
        <div className="h-full flex flex-col justify-center">
          <span>{item.title}</span>
          <span>{item.text}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="w-full h-full relative flex gap-4 overflow-hidden">
      <div className="bg-linear-to-l from-white/0 to-white/100 h-full w-25 absolute" />
      {map}
      {map}
      <div className="bg-linear-to-r from-white/0 to-white/100 h-full w-25 absolute right-0" />
    </div>
  );
  {
    /* <div className="flex justify-center w-full gap-8">
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
    </div>*/
  }
}
