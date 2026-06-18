import { home } from "../../../data/home";

export default function Statistics({ locale }) {
  const adSpentMap = home[locale].adspend.categories.map((item) => (
    <div key={item.id} className="flex flex-col items-start">
      <span className="text-sm">{item.label}</span>
      <div className="flex w-full">
        <div className="w-full h-10 bg-slate-200 rounded">
          <div
            className={`bg-blue-500 h-full rounded`}
            style={{ width: item.percentage }}
          />
        </div>
        <span>{item.value}</span>
      </div>
    </div>
  ));
  return (
    <section className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-4 border-b border-slate-300 py-20 px-4">
      <h2 className="text-center text-4xl instrument">
        {" "}
        {home[locale].adspend.title}
      </h2>
      <div className="border-b border-slate-300 border-zinc-500 w-2/5" />
      <span className="text-zinc-500 w-[300px]">
        {home[locale].adspend.subtitle}
      </span>
      <div className="w-full flex flex-col gap-2">{adSpentMap}</div>
    </section>
  );
}
