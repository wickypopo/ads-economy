import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { MarkdownHooks } from "react-markdown";
import Button from "../components/Button";

export default function Article() {
  const [articleData, setArticleData] = useState([]);

  const slug = useParams();

  useEffect(() => {
    async function getArticle() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("slug", slug.article)
        .single();

      setArticleData(data);
      console.log(data);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    getArticle();
  }, [slug]);

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

  const newsMap = newsData.map((item) => {
    if (item.published === false) {
      return;
    }

    return (
      <div key={item.id} className="flex flex-col gap-2 w-full mt-4">
        <div className="flex flex-col gap-4 w-full items-center">
          <img src={item.image} className="w-full h-40 object-cover" />
          <div className="flex flex-col text-start">
            <span className="font-medium text-sm text-blue-600 max-w-[600px]">
              {item.category}
            </span>
            <span className="font-bold  max-w-[600px]">{item.title}</span>

            <Button
              text="zum Artikel"
              variant="black"
              link={`/news/${item.slug}#top`}
            ></Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="top" className="min-h-screen flex flex-col items-center ">
        <img
          src={articleData.image}
          className="w-full h-100 object-cover max-w-[700px]"
        />
        <div className="w-full max-w-[700px] p-4 lg:py-8 lg:px-0">
          <div className="w-full">
            <span className="font-medium text-sm text-blue-600">
              {articleData.category}
            </span>
            <h1>{articleData.title}</h1>
            <div className="mb-3">
              <MarkdownHooks>{articleData.content}</MarkdownHooks>
            </div>

            <span className="font-medium text-sm">
              Author - {articleData.author}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[700px] p-4 lg:py-8 lg:px-0 border-t border-slate-300 flex gap-4">
          {newsMap}
        </div>
      </div>
    </>
  );
}
