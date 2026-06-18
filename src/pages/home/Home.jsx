import { useEffect, useState } from "react";
import { home } from "../../data/home";
import { useLocale } from "../../utils/useLocale";
import { supabase } from "../../lib/supabase";
import Button from "../../components/Button";
import { Globe } from "lucide-react";
import AnimatedGlobe from "../../components/AnimatedGlobe";
import { Link } from "react-router-dom";
import AreaChart from "../../components/AreaChart";
import LearnChart from "../../components/LearnChart";
import ToolChart from "../../components/ToolChart";
import { motion, scale } from "framer-motion";
import { adsOptimizationLocale } from "../../data/Ads";
import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import News from "./sections/News";
import CTA from "./sections/CTA";
import Statistics from "./sections/Statistics";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  return (
    <main className="overflow-y-hidden flex flex-col items-center overflow-hidden">
      {/* HERO */}
      <Hero locale={locale} />
      {/* DISCOVER */}
      <Discover locale={locale} />
      {/* NEWS */}
      <News locale={locale} />
      {/* CTA */}
      <CTA locale={locale} />
      {/* STATS */}
      <Statistics locale={locale} />

      {/* WERBEKONTO */}
      <section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4">
        <h2 className="text-center text-4xl instrument">
          {home[locale].adaccount.title}
        </h2>
        <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
        <span className="text-zinc-500 w-[300px]">
          {home[locale].adaccount.text}
        </span>

        <Button
          text={home[locale].adaccount.cta}
          variant={"black"}
          link="/premier-brands"
        />
      </section>
      {/* TOOLS */}
      <section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4 py-20">
        <h2 className="text-center text-4xl instrument">
          {home[locale].tools.title}
        </h2>
        <AreaChart />
        <Button text={home[locale].tools.cta} variant={"black"} />
      </section>
    </main>
  );
}
