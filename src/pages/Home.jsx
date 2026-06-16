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
import { motion, scale } from "framer-motion";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getNews() {
      const { data, error } = await supabase.from("news").select();
      //.limit(3);
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
  const newsMap = newsData.map((item, index) => {
    const isFirst = index === 0;
    const isSecond = index === 1;

    if (item.published === false) {
      return;
    }

    if (isFirst === true) {
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

  const sideArticles = newsData.filter((item) => item.published).slice(1, 3);

  const sideMap = sideArticles.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-2 w-full border-b border-slate-300 pb-4 last:border-b-0 last:pt-4"
    >
      <div className="flex flex-col md:flex-row gap-4 w-full items-start ">
        <div className="flex flex-col text-start md:w-2/3">
          <span className="font-medium text-sm text-blue-600">
            {item.category}
          </span>

          <span className="font-bold md:text-xl">{item.title}</span>

          <span className="text-slate-700 md:text-base text-sm">
            {item.excerpt}
          </span>

          <div className="mt-2">
            <Button
              text="zum Artikel"
              variant="underline"
              link={`/news/${item.slug}`}
            />
          </div>
        </div>

        <img
          src={item.image}
          className="w-full md:w-1/3 h-[140px] object-cover rounded"
        />
      </div>
    </div>
  ));

  const bottomArticles = newsData.filter((item) => item.published).slice(3, 7);

  const bottomMap = bottomArticles.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-2 w-full md:border-r py-8 border-b md:border-b-0 border-slate-300 px-0 md:px-4 md:px-4 first:px-0 md:first:pr-4 last:border-r-0 "
    >
      <img src={item.image} className="w-full h-[135px] object-cover rounded" />

      <div className="flex flex-col text-start">
        <span className="font-medium text-sm text-blue-600">
          {item.category}
        </span>

        <span className="font-bold md:text-lg leading-tight">{item.title}</span>

        <div className="mt-2">
          <Button
            text="zum Artikel"
            variant="underline"
            link={`/news/${item.slug}`}
          />
        </div>
      </div>
    </div>
  ));

  const adSpentMap = homeLocale[locale].adSpend.categories.map((item) => (
    <div key={item.id} className="flex flex-col items-start">
      <span className="text-sm">{item.label}</span>
      <div className="flex w-full">
        <div className="w-full h-10 bg-slate-200 rounded">
          <div
            className={`bg-blue-500 h-full rounded`}
            style={{ width: item.percentage }}
          />
        </div>
        <span>{item.value}</span>
      </div>
    </div>
  ));

  const MotionLink = motion.create(Link);
  return (
    <main className="overflow-y-hidden flex flex-col items-center overflow-hidden">
      {/* HERO */}
      <section className="max-w-[1200px] w-full min-h-[80vh] flex flex-col items-center justify-center text-center gap-4 p-8">
        <AnimatedGlobe />

        <span
          className="text-center text-4xl md:text-5xl lg:text-6xl instrument"
          dangerouslySetInnerHTML={{
            __html: homeLocale[locale].hero.title,
          }}
        />
        <span className="text-zinc-500">
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
          {/* MOBILE STATIC */}
          <div className="flex flex-1 h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded md:hidden">
            <span className="text-4xl instrument font-medium">
              {homeLocale[locale].discover.tabs.learn}
            </span>

            <span className="absolute text-zinc-500 w-[300px] top-15 text-center">
              {homeLocale[locale].discover.subtitle}
            </span>

            <img
              src="/mac.png"
              className="w-full z-10 scale-[0.9] translate-y-[50px]"
            />

            <Link
              to="/learn"
              className="absolute bottom-6 z-20 bg-blue-600 p-2 px-6 text-white font-medium rounded"
            >
              {homeLocale[locale].discover.tabs.learn}
            </Link>
          </div>

          {/* DESKTOP HOVER */}
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="hidden md:flex flex-1 h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded"
          >
            <span className="text-4xl instrument font-medium">
              {homeLocale[locale].discover.tabs.learn}
            </span>

            <span className="absolute text-zinc-500 w-[300px] top-15 text-center">
              {homeLocale[locale].discover.subtitle}
            </span>

            <motion.img
              src="/mac.png"
              className="w-full z-10"
              variants={{
                rest: {
                  scale: 1.01,
                  y: 0,
                },
                hover: {
                  scale: 0.9,
                  y: 50,
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />

            <MotionLink
              to="/learn"
              className="absolute bottom-6 z-20 bg-blue-600 p-2 px-6 text-white font-medium rounded"
              variants={{
                rest: {
                  opacity: 0,
                  y: 30,
                  pointerEvents: "none",
                },
                hover: {
                  opacity: 1,
                  y: 0,
                  pointerEvents: "auto",
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {homeLocale[locale].discover.tabs.learn}
            </MotionLink>
          </motion.div>
          {/* MOBILE STATIC */}
          <div className="flex flex-1 h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded md:hidden">
            <span className="text-4xl instrument font-medium">
              {homeLocale[locale].discover.tabs.tools}
            </span>

            <span className="absolute text-zinc-500 w-[300px] top-15 text-center">
              {homeLocale[locale].discover.subtitle}
            </span>

            <img
              src="/mac.png"
              className="w-full z-10 scale-[0.9] translate-y-[50px]"
            />

            <Link
              to="/learn"
              className="absolute bottom-6 z-20 bg-blue-600 p-2 px-6 text-white font-medium rounded"
            >
              {homeLocale[locale].discover.tabs.tools}
            </Link>
          </div>

          {/* DESKTOP HOVER */}
          <motion.div
            initial="rest"
            animate="rest"
            whileHover="hover"
            className="hidden md:flex flex-1 h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded"
          >
            <span className="text-4xl instrument font-medium">
              {homeLocale[locale].discover.tabs.tools}
            </span>

            <span className="absolute text-zinc-500 w-[300px] top-15 text-center">
              {homeLocale[locale].discover.subtitle}
            </span>

            <motion.img
              src="/mac.png"
              className="w-full z-10"
              variants={{
                rest: {
                  scale: 1.01,
                  y: 0,
                },
                hover: {
                  scale: 0.9,
                  y: 50,
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            />

            <MotionLink
              to="/learn"
              className="absolute bottom-6 z-20 bg-blue-600 p-2 px-6 text-white font-medium rounded"
              variants={{
                rest: {
                  opacity: 0,
                  y: 30,
                  pointerEvents: "none",
                },
                hover: {
                  opacity: 1,
                  y: 0,
                  pointerEvents: "auto",
                },
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              {homeLocale[locale].discover.tabs.tools}
            </MotionLink>
          </motion.div>
        </div>
        <Button
          link="/rising-brands"
          variant="primary"
          text={homeLocale[locale].discover.cta}
        />
      </section>
      {/* NEWS */}
      <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 py-20 px-4">
        <h2 className="text-center text-4xl instrument">
          {" "}
          {homeLocale[locale].news.title}
        </h2>

        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        {/* <div className="w-full">
          {newsData.length === 0 ? (
            <span className="text-slate-500">No News available</span>
          ) : (
            newsMap
          )}
        </div> */}
        <div className="flex flex-col w-full h-full gap-2">
          <div className="w-full flex gap-2">
            {/* MAIN ARTICLE */}
            <div className="md:w-1/2 w-full h-full border-r border-slate-300 pr-4">
              <div className="flex flex-col gap-2 w-full ">
                <div className="flex flex-col gap-4 w-full items-center">
                  <img
                    src={newsData[0]?.image}
                    className="w-full h-[250px] object-cover rounded"
                  />
                  <div className="flex flex-col text-start ">
                    <span className="font-medium text-sm text-blue-600">
                      {newsData[0]?.category}
                    </span>
                    <span className="font-bold md:text-xl">
                      {newsData[0]?.title}
                    </span>
                    <span className="text-slate-700 md:text-base text-sm">
                      {newsData[0]?.excerpt}
                    </span>
                    <div className="mt-2">
                      <Button
                        text="zum Artikel"
                        variant="underline"
                        link={`news/${newsData[0]?.slug}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-1/2 hidden md:flex md:flex-col">
              {sideMap}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row">{bottomMap}</div>
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 py-20 blue text-white rounded">
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
