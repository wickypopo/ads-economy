import Button from "../components/Button";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

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

  return (
    <section className="w-full flex flex-col items-center gap-4 py-4">
      <div className="max-w-[1200px] flex flex-col w-full items-start gap-4">
        <h1 className="text-center text-6xl instrument">News</h1>
        <div className="w-full min-h-screen flex-col">{newsMap}</div>
      </div>
    </section>
  );
}
