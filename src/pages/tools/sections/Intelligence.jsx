import { Database, ScanSearch, Target } from "lucide-react";

const signalIcons = [Database, ScanSearch, Target];

export default function Intelligence({ content }) {
  return (
    <section
      id={content.id}
      className="w-full max-w-[1200px] min-w-0 px-0 sm:px-4"
    >
      <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-4">
          <span className="text-slate-600">{content.eyebrow}</span>
          <span className="instrument m-0 text-3xl leading-tight sm:text-4xl md:text-4xl md:leading-[1.05]">
            {content.title}
          </span>
          <p className="max-w-[620px] leading-7 text-slate-600">
            {content.text}
          </p>
        </div>

        <div className="relative hidden min-w-0 overflow-hidden md:block">
          <div className="mt-4 grid gap-2">
            {content.signals.map((item, index) => {
              const Icon = signalIcons[index];

              return (
                <div
                  key={item.title}
                  className="flex gap-4 border-t border-slate-200 py-4 first:border-t-0"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded bg-blue-50 text-blue-600">
                    <Icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-slate-950">
                      {item.title}
                    </span>
                    <span className="text-sm leading-6 text-slate-600">
                      {item.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
