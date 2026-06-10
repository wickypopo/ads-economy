import { useEffect, useState } from "react";
import { homeLocale } from "../data/homeLocale";
import { useLocale } from "../utils/useLocale";
import { supabase } from "../lib/supabase";
import Button from "../components/Button";
import { Globe } from "lucide-react";
import AnimatedGlobe from "../components/AnimatedGlobe";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getNews() {
      const { data, error } = await supabase.from("news").select();
      if (error) {
        return;
      }
      if (data) {
        setNewsData(data);
      }
    }
    getNews();
  }, []);

  const newsMap = newsData.map((item) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-4 w-full">
          <img src={item.image} className="w-1/3" />
          <div className="flex flex-col text-start w-2/3">
            <span className="font-bold">{item.title}</span>
            <span>{item.excerpt}</span>
          </div>
        </div>
      </div>
    );
  });

  const adSpentMap = homeLocale[locale].adSpend.categories.map((item) => (
    <div key={item.id} className="flex flex-col items-start">
      <span className="text-sm">{item.label}</span>
      <div className="flex w-full">
        <div className="w-full h-10 bg-slate-200">
          <div
            className={`bg-blue-500 h-full`}
            style={{ width: item.percentage }}
          />
        </div>
        <span>{item.value}</span>
      </div>
    </div>
  ));

  return (
    <main className="overflow-y-hidden">
      {/* HERO */}
      <section className="h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
        <AnimatedGlobe />
        <h1 className="text-center text-6xl instrument">
          {homeLocale[locale].hero.title}
        </h1>
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].hero.subtitle}
        </span>
        <div className="flex gap-2">
          <Button
            text={homeLocale[locale].hero.buttons.risingBrands}
            link="/rising-brands"
            variant={"primary"}
          />
          <Button
            text={homeLocale[locale].hero.buttons.premiereBrands}
            link="/premiere-brands"
            variant={"secondary"}
          />
        </div>
      </section>
      {/* DISCOVER */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-y border-slate-300 px-4">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].discover.title}
        </h2>
        <div className="border-b border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].discover.subtitle}
        </span>
        <div className="flex gap-2 font-medium w-full h-30">
          <div className="size-full bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.news}</span>
          </div>
          <div className="size-full bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.learn}</span>
          </div>
          <div className="size-full bg-slate-200 flex items-center justify-center">
            <span>{homeLocale[locale].discover.tabs.tools}</span>
          </div>
        </div>
        <div className="h-30 w-full bg-blue-500 flex items-center justify-center text-white -mt-2">
          <span>{homeLocale[locale].discover.cta}</span>
        </div>
      </section>
      {/* NEWS */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].news.title}
        </h2>

        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        {newsData.length === 0 ? (
          <span className="text-slate-500">No News available</span>
        ) : (
          newsMap
        )}
      </section>
      {/* CTA */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 blue text-white">
        <h2 className="text-center text-6xl instrument">
          {homeLocale[locale].risingBrands.title}
        </h2>
        <div className="border-b border-slate-300 border-zinc-300 w-2/5" />
        <span className="w-[300px]">
          {homeLocale[locale].risingBrands.subtitle}
        </span>
        <div className="flex gap-2">
          <Button
            text={homeLocale[locale].hero.buttons.risingBrands}
            link="/rising-brands"
            variant={"white"}
          />
          <Button
            text={homeLocale[locale].hero.buttons.premiereBrands}
            link="/premiere-brands"
            variant={"white-outline"}
          />
        </div>
      </section>
      {/* STATS */}
      <section className="flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].adSpend.title}
        </h2>
        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].adSpend.subtitle}
        </span>
        <div className="w-full flex flex-col gap-2">{adSpentMap}</div>
      </section>
      {/* WERBEKONTO */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].adAccountAnalysis.title}
        </h2>
        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].adAccountAnalysis.text}
        </span>

        <Button
          text={homeLocale[locale].adAccountAnalysis.cta}
          variant={"black"}
        />
      </section>
      {/* TOOLS */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4 py-20">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].tools.title}
        </h2>
        <div className="w-full bg-blue-600 rounded-4xl h-140 shadow-xl"></div>
        <Button text={homeLocale[locale].tools.cta} variant={"black"} />
      </section>
    </main>
  );
}
