import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/Button";

export default function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getNews() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("published", true);

      if (error) {
        console.log(error);
        return;
      }

      if (data) {
        setNewsData(data);
      }
    }

    getNews();
  }, []);

  const featuredArticle = newsData[0];
  const sideArticles = newsData.slice(1, 3);
  const bottomArticles = newsData.slice(3);

  const sideMap = sideArticles.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-2 w-full border-b border-slate-300 pb-4 last:border-b-0 last:pt-4"
    >
      <div className="flex flex-col sm:flex-col-reverse md:flex-row gap-4 w-full items-start">
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
          alt={item.title}
          className="w-full md:w-1/3 h-[140px] object-cover rounded"
        />
      </div>
    </div>
  ));

  const bottomMap = bottomArticles.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-2 w-full border-b border-slate-300 pb-4"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-[170px] object-cover rounded"
      />

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

  return (
    <section className="w-full flex flex-col items-center pb-20">
      <div className="max-w-[1200px] w-full flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-center text-6xl instrument">News</h1>
          <div className="border-b border-slate-300 w-2/5" />
          <span className="text-slate-500 max-w-[420px]">
            Aktuelle Entwicklungen, Analysen und Einblicke aus der Ads Economy.
          </span>
        </div>

        {newsData.length === 0 ? (
          <span className="text-center text-slate-500">No News available</span>
        ) : (
          <>
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="w-full lg:w-1/2 lg:border-r border-slate-300 lg:pr-4">
                <div className="flex flex-col gap-4 w-full">
                  <img
                    src={featuredArticle?.image}
                    alt={featuredArticle?.title}
                    className="w-full h-[320px] object-cover rounded"
                  />

                  <div className="flex flex-col text-start">
                    <span className="font-medium text-sm text-blue-600">
                      {featuredArticle?.category}
                    </span>

                    <span className="font-bold text-2xl md:text-3xl leading-tight">
                      {featuredArticle?.title}
                    </span>

                    <span className="mt-2 text-slate-700 md:text-base text-sm">
                      {featuredArticle?.excerpt}
                    </span>

                    <div className="mt-3">
                      <Button
                        text="zum Artikel"
                        variant="underline"
                        link={`/news/${featuredArticle?.slug}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 lg:pl-4 flex flex-col">
                {sideMap}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-300 pt-6">
              {bottomMap}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
