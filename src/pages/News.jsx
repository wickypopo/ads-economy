import Button from "../components/Button";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";

export default function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function getNews() {
      const { data, error } = await supabase.from("news").select();
      if (error) {
        return;
      }
      if (data) {
        console.log(data);
        setNewsData(data);
      }
    }
    getNews();
  }, []);

  const newsMap = newsData.map((item) => {
    if (item.published === false) {
      return;
    }
    return (
      <div key={item.id} className="flex flex-col gap-2 w-full mt-4">
        <div className="flex gap-4 w-full items-end">
          <img src={item.image} className="size-1/2 h-80 object-cover" />
          <div className="flex flex-col text-start w-1/2">
            <span className="font-bold text-2xl max-w-[600px]">
              {item.title}
            </span>
            <span className="text-slate-700 max-w-[600px]">{item.excerpt}</span>
            <div className="mt-4">
              <Button
                text="zum Artikel"
                variant="black"
                link={`news/${item.slug}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="w-full flex flex-col items-center gap-4 py-4">
      <div className="max-w-[1200px] flex flex-col w-full items-start gap-4">
        <h1 className="text-center text-6xl instrument">News</h1>
        <div className="w-full min-h-screen flex-col">{newsMap}</div>
      </div>
    </section>
  );
}
