import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { home } from "../../../data/home";

export default function Discover({ locale }) {
  const MotionLink = motion.create(Link);

  const items = home[locale].discover.items;

  const cardImages = {
    News: "/news.png",
    Lernen: "/mac-learn.png",
    Learn: "/mac-learn.png",
    Tools: "/mac.png",
  };

  const cardLinks = {
    News: "/news",
    Lernen: "/learn",
    Learn: "/learn",
    Tools: "/tools",
  };

  return (
    <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 px-4">
      <h2 className="text-center text-4xl instrument">
        {home[locale].discover.title}
      </h2>

      <div className="border-b border-zinc-500 w-2/5" />

      <span className="text-zinc-500 max-w-[600px]">
        {home[locale].discover.text}
      </span>

      <div className="flex flex-col lg:flex-row gap-2 font-medium w-full">
        {items.map((item) => {
          const image = cardImages[item.title] || "/mac.png";
          const link = cardLinks[item.title] || "/";
          const buttonText = item.title;

          return (
            <div key={item.title} className="flex-1">
              {/* MOBILE STATIC */}
              <div className="flex h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded md:hidden">
                <span className="text-4xl instrument font-medium">
                  {item.title}
                </span>

                <span className="absolute text-zinc-500 w-[300px] top-15 text-center text-sm">
                  {item.text}
                </span>

                <img
                  src={image}
                  alt=""
                  className="w-full z-10 scale-[0.9] translate-y-[50px] rounded"
                />

                <Link
                  to={link}
                  className="absolute bottom-6 z-20 bg-blue-600 p-2 px-6 text-white font-medium rounded"
                >
                  {buttonText}
                </Link>
              </div>

              {/* DESKTOP HOVER */}
              <motion.div
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="hidden md:flex h-80 bg-slate-100 relative overflow-hidden p-4 flex-col items-center justify-between rounded"
              >
                <span className="text-4xl instrument font-medium">
                  {item.title}
                </span>

                <span className="absolute text-zinc-500 w-[300px] top-15 text-center text-sm">
                  {item.text}
                </span>

                <motion.img
                  src={image}
                  alt=""
                  className="w-full z-10 rounded"
                  variants={{
                    rest: {
                      scale: 1.15,
                      y: 10,
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
                  to={link}
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
                  {buttonText}
                </MotionLink>
              </motion.div>
            </div>
          );
        })}
      </div>

      {home[locale].discover.cta && (
        <Button
          link="/rising-brands"
          variant="primary"
          text={home[locale].discover.cta}
        />
      )}
    </section>
  );
}
