import { Link } from "react-router-dom";
import { home } from "../../../data/homeLocale";
import { supabase } from "../../../lib/supabase";
import { useState, useEffect } from "react";
import Button from "../../../components/Button";

export default function News({ locale }) {
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
  return (
    <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 py-20 px-4">
      <h2 className="text-center text-4xl instrument">
        {" "}
        {home[locale].news.title}
      </h2>
      <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
      <div className="flex flex-col w-full h-full gap-2">
        <div className="w-full flex gap-2">
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
  );
}
