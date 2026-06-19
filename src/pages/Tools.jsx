import Hero from "./tools/sections/Hero";
import Intelligence from "./tools/sections/Intelligence";
import Features from "./tools/sections/Features";
import Workflow from "./tools/sections/Workflow";
import UseCases from "./tools/sections/UseCases";
import CTA from "./tools/sections/CTA";
import { tools } from "../data/tools";
import { useLocale } from "../utils/useLocale";

export default function Tools() {
  const { locale } = useLocale();
  const content = tools[locale] ?? tools.de;

  return (
    <div className="flex w-full min-w-0 flex-col items-center gap-24 overflow-hidden pb-24 md:gap-30 md:pb-30">
      <Hero content={content.hero} />
      <Intelligence content={content.intelligence} />
      <Features content={content.features} />
      <UseCases content={content.useCases} />
      <Workflow content={content.workflow} />
      <CTA content={content.cta} />
    </div>
  );
}
