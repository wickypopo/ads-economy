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
import Clients from "../ads-optimierung/sections/Clients";

export default function Home() {
  const { locale, setLocale, t } = useLocale();

  return (
    <main className="flex flex-col items-center gap-40 pb-40 overflow-hidden">
      <Hero locale={locale} />
      <Clients locale={locale} />
      <News locale={locale} />
      <CTA locale={locale} />
      <Statistics locale={locale} />
      <Discover locale={locale} />
      {/*<section className="max-w-[1200px] w-full min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 px-4 py-20">
        <h2 className="text-center text-4xl instrument">
          {home[locale].tools.title}
        </h2>
        <AreaChart />
        <Button text={home[locale].tools.cta} variant={"black"} />
      </section>*/}
    </main>
  );
}
