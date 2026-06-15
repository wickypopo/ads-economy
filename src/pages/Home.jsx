import { useEffect, useState } from "react";
import { homeLocale } from "../data/homeLocale";
import { useLocale } from "../utils/useLocale";
import { supabase } from "../lib/supabase";
import Button from "../components/Button";
import { Globe } from "lucide-react";
import AnimatedGlobe from "../components/AnimatedGlobe";
import { Link } from "react-router-dom";
import AreaChart from "../components/AreaChart";
import LearnChart from "../components/LearnChart";
import ToolChart from "../components/ToolChart";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getNews() {
      const { data, error } = await supabase.from("news").select().limit(3);
      if (error) {
        return;
      }
      if (data) {
        setNewsData(data);
      }
    }
    getNews();
  }, []);

  let length = 0;
  const newsMap = newsData.map((item) => {
    if (item.published === false) {
      return;
    }

    return (
      <div key={item.id} className="flex flex-col gap-2 w-full mt-4">
        <div className="flex flex-col md:flex-row gap-4 w-full items-center">
          <img
            src={item.image}
            className="md:w-2/4 w-full h-[250px] object-cover"
          />
          <div className="flex flex-col text-start md:w-2/4">
            <span className="font-medium text-sm text-blue-600 max-w-[600px]">
              {item.category}
            </span>
            <span className="font-bold md:text-xl max-w-[600px]">
              {item.title}
            </span>
            <span className="text-slate-700 md:text-base text-sm max-w-[600px]">
              {item.excerpt}
            </span>
            <div className="mt-2">
              <Button
                text="zum Artikel"
                variant="underline"
                link={`news/${item.slug}`}
              />
            </div>
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
    <main className="overflow-y-hidden flex flex-col items-center overflow-hidden">
      {/* HERO */}
      <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
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
            link="/premier-brands"
            variant={"secondary"}
          />
        </div>
      </section>
      {/* DISCOVER */}
      <section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-y border-slate-300 py-8 px-4">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].discover.title}
        </h2>
        <div className="border-b border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {homeLocale[locale].discover.subtitle}
        </span>
        <div className="flex flex-col lg:flex-row gap-2 font-medium w-full">
          <div className="flex-1">
            <LearnChart />
          </div>
          <div className="flex-1">
            <ToolChart />
          </div>
        </div>
        <Button
          link="/rising-brands"
          variant="primary"
          text={homeLocale[locale].discover.cta}
        />
      </section>
      {/* NEWS */}
      <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].news.title}
        </h2>

        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        <div className="max-w-[700px] w-full">
          {newsData.length === 0 ? (
            <span className="text-slate-500">No News available</span>
          ) : (
            newsMap
          )}
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 blue text-white">
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
            link="/premier-brands"
            variant={"white-outline"}
          />
        </div>
      </section>
      {/* STATS */}
      <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 px-4">
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
      <section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4">
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
          link="/premier-brands"
        />
      </section>
      {/* TOOLS */}
      <section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4 py-20">
        <h2 className="text-center text-4xl instrument">
          {homeLocale[locale].tools.title}
        </h2>
        <AreaChart />
        <Button text={homeLocale[locale].tools.cta} variant={"black"} />
      </section>
    </main>
  );
}
