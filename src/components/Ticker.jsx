import { useEffect, useState } from "react";
import { optimizationItems } from "../data/Ads";
import { motion } from "framer-motion";

export default function Ticker() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => prev - 120);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (num === -3600) {
      setNum(0);
    }
  }, [num]);

  const map = optimizationItems.map((item) => (
    <div className="flex flex-shrink-0 h-[120px] py-4 justify-between">
      <div className="flex flex-col h-full w-full p-4 gap-1 lg:justify-center">
        <span className="text-slate-500 text-xs">Maßnahme</span>
        <span className="text-lg mg:text-xl leading-5 text-slate-600 ">
          {item.action}
        </span>
      </div>
      <div className="h-full border-r border-slate-300 " />
      <div className="flex flex-col h-full w-full gap-1 p-4 lg:justify-center">
        <span className="text-slate-500 text-xs">Wirkung</span>
        <span className="text-lg mg:text-xl leading-5 text-blue-600 font-medium">
          {item.effect}
        </span>
      </div>
    </div>
  ));

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full h-[120px] bg-slate-100 overflow-hidden rounded">
        <motion.div initial={{ y: 0 }} animate={{ y: num }}>
          {map}
          {map}
        </motion.div>
      </div>
    </div>
  );
}
