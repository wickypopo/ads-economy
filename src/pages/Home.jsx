import { homeLocale } from "../data/HomeLocale";
import { useLocale } from "../utils/useLocale";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  const test = "Ludwig";

  console.log(homeLocale);

  const adSpentMap = homeLocale[locale].adSpend.categories.map((item) => (
    <div key={item.id} className="flex justify-between">
      <input type="range" value={item.percentage} />
      <span>{item.label}</span>
    </div>
  ));
  return (
    <main className="overflow-y-hidden">
      {/* HERO */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center gap-4 px-4">
        <h1 className="text-center text-6xl instrument">
          {homeLocale[locale].hero.title}
        </h1>
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].hero.subtitle}
        </span>
        <div className="flex gap-2">
          <button className="bg-blue-600 p-2 px-6 text-white font-medium">
            {homeLocale[locale].hero.buttons.risingBrands}
          </button>
          <button className="border-2 border-blue-600 p-2 px-6 text-black    font-medium">
            {homeLocale[locale].hero.buttons.premiereBrands}
          </button>
        </div>
      </section>
      {/* DISCOVER */}
      <section className="h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-y px-4">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].discover.title}
        </h2>
        <div className="border-b border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].discover.subtitle}
        </span>
        <div className="flex gap-2 font-medium">
          <div className="size-30 bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.news}</span>
          </div>
          <div className="size-30 bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.learn}</span>
          </div>
          <div className="size-30 bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.tools}</span>
          </div>
        </div>
      </section>
      {/* NEWS */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].news.title}
        </h2>
        <div className="border-b border-zinc-500 w-2/5" />

        <div className="flex flex-col gap-2 w-full">
          <div className="flex gap-4 w-full">
            <div className="bg-blue-600 w-1/3" />
            <div className="flex flex-col text-start w-2/3">
              <span className="font-bold">Title</span>
              <span>
                em ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b py-20 blue text-white">
        <h2 className="text-center text-6xl instrument">
          {homeLocale[locale].risingBrands.title}
        </h2>
        <div className="border-b border-zinc-300 w-2/5" />
        <span className="w-[300px]">
          {homeLocale[locale].risingBrands.subtitle}
        </span>
        <div className="flex gap-2">
          <button className="bg-white p-2 px-6 text-black font-medium">
            {homeLocale[locale].hero.buttons.risingBrands}
          </button>
          <button className="border-2 border-white p-2 px-6 text-white font-medium">
            {homeLocale[locale].hero.buttons.premiereBrands}
          </button>
        </div>
      </section>
      {/* STATS */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].adSpend.title}
        </h2>
        <div className="border-b border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].adSpend.subtitle}
        </span>
        <div>{adSpentMap}</div>
      </section>
    </main>
  );
}
