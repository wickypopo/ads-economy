import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "../data/Ads";

const colors = [
  "bg-purple-400",
  "bg-sky-400",
  "bg-orange-400",
  "bg-emerald-400",
  "bg-pink-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-red-400",
  "bg-teal-400",
  "bg-fuchsia-400",
  "bg-lime-400",
  "bg-blue-400",
  "bg-rose-400",
  "bg-amber-400",
  "bg-cyan-400",
  "bg-violet-400",
  "bg-green-400",
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);

  const cardRef = useRef(null);

  useEffect(() => {
    function updateSliderValues() {
      if (!cardRef.current) return;

      const width = cardRef.current.offsetWidth;
      const gap = 16;

      setSlideWidth(width + gap);

      if (window.innerWidth >= 1024) {
        setVisibleSlides(4);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(1);
      }
    }

    updateSliderValues();

    window.addEventListener("resize", updateSliderValues);

    return () => window.removeEventListener("resize", updateSliderValues);
  }, []);

  const maxIndex = Math.max(reviews.length - visibleSlides, 0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) return 0;
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  function nextSlide() {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  }

  function prevSlide() {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  }

  return (
    <section className="w-full max-w-[1200px] relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl font-semibold instrument">Bewertungen</span>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="size-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <motion.div
        className="flex gap-4"
        animate={{
          x: -currentIndex * slideWidth,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        {reviews.map((item, index) => {
          const color = colors[index % colors.length];

          return (
            <div
              key={item.id}
              ref={index === 0 ? cardRef : null}
              className="flex-shrink-0 w-full md:w-[calc(50%-8px)] lg:w-[calc(25%-12px)] bg-slate-100 p-4 rounded gap-4 flex flex-col relative justify-between min-h-[320px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <div
                    className={`size-14 ${color} rounded-full flex justify-center items-center text-white font-bold text-2xl flex-shrink-0`}
                  >
                    {item.name.slice(0, 1)}
                  </div>

                  <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-sm text-slate-700">{item.date}</span>
                  </div>
                </div>

                <span className="text-sm text-slate-700 leading-6">
                  {item.text}
                </span>
              </div>

              <div className="flex">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="rgb(248, 175, 13)"
                    className="size-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                ))}
              </div>

              <img
                src="/google.svg"
                className="size-8 absolute right-4 bottom-4"
              />
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
