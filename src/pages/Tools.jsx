import Hero from "./tools/sections/Hero";
import Intelligence from "./tools/sections/Intelligence";
import Features from "./tools/sections/Features";
import Workflow from "./tools/sections/Workflow";
import UseCases from "./tools/sections/UseCases";
import CTA from "./tools/sections/CTA";

export default function Tools() {
  return (
    <div className="flex w-full min-w-0 flex-col items-center gap-24 overflow-hidden pb-24 md:gap-30 md:pb-30">
      <Hero />
      <Intelligence />
      <Features />
      <UseCases />
      <Workflow />
      <CTA />
    </div>
  );
}
