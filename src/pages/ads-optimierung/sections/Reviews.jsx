import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "../../../data/Ads";

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

export default function Reviews({ locale }) {
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
    <section className="w-full max-w-[1200px] relative overflow-hidden px-4">
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
                <svg
                  viewBox="0 0 68 12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-auto"
                >
                  <polygon
                    fill="#fdd663"
                    points="
          6 0 4.31 3.98 0 4.34 3.28 7.18 2.29 11.4 6 9.16 9.71 11.4 8.72 7.18 12 4.34 7.69 3.98 6 0
          20 0 18.31 3.98 14 4.34 17.28 7.18 16.29 11.4 20 9.16 23.71 11.4 22.72 7.18 26 4.34 21.69 3.98 20 0
          34 0 32.31 3.98 28 4.34 31.28 7.18 30.29 11.4 34 9.16 37.71 11.4 36.72 7.18 40 4.34 35.69 3.98 34 0
          48 0 46.31 3.98 42 4.34 45.28 7.18 44.29 11.4 48 9.16 51.71 11.4 50.72 7.18 54 4.34 49.69 3.98 48 0
          62 0 60.31 3.98 56 4.34 59.28 7.18 58.29 11.4 62 9.16 65.71 11.4 64.72 7.18 68 4.34 63.69 3.98 62 0
        "
                  />
                </svg>
              </div>

              <img
                src="/google.svg"
                className="size-8 absolute right-4 bottom-4"
              />
            </div>
          );
        })}
      </motion.div>
      <div className="flex items-center gap-2 mt-2 text-slate-700">
        <span className="font-semibold text-slate-900">4,4</span>

        <div
          className="flex items-center gap-0.5"
          aria-label="Bewertung: 4,4 von 5, (11) Nutzerrezensionen"
          role="img"
        >
          {/* 4 volle Sterne */}
          {Array.from({ length: 4 }).map((_, index) => (
            <svg
              key={index}
              viewBox="0 0 24 24"
              className="size-4"
              fill="#fdd663"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L14.9 8.62L22 9.24L16.64 13.97L18.24 21L12 17.27L5.76 21L7.36 13.97L2 9.24L9.1 8.62L12 2Z" />
            </svg>
          ))}

          {/* halber Stern */}
          <div className="relative size-4">
            {/* grauer Stern */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 size-4"
              fill="#80868b"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2L14.9 8.62L22 9.24L16.64 13.97L18.24 21L12 17.27L5.76 21L7.36 13.97L2 9.24L9.1 8.62L12 2Z" />
            </svg>

            {/* gelbe Hälfte */}
            <div className="absolute inset-0 w-1/2 overflow-hidden">
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="#fdd663"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L14.9 8.62L22 9.24L16.64 13.97L18.24 21L12 17.27L5.76 21L7.36 13.97L2 9.24L9.1 8.62L12 2Z" />
              </svg>
            </div>
          </div>
        </div>
        <span className="text-sm text-slate-900">33 Bewertungen</span>
      </div>
    </section>
  );
}
