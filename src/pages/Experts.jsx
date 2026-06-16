import { expertData } from "../data/expertData";

export default function Experts() {
  console.log(expertData.de);

  const founderMap = expertData.de.founders.map((item) => {
    console.log(item);
    return (
      <div className="flex flex-col">
        <div className="aspect-square w-full overflow-hidden rounded-xl">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="flex flex-col py-4">
          <span className="text-xl font-medium text-slate-900">
            {item.name}
          </span>
          <span className="text-slate-500">{item.position}</span>
          <span className="text-sm mt-2 text-slate-700">
            {item.description}
          </span>
        </div>
      </div>
    );
  });

  const expertsMap = expertData.de.experts.map((item) => {
    console.log(item);
    return (
      <div className="flex flex-col">
        <div className="aspect-square w-full overflow-hidden rounded-xl">
          <img
            src={item.img}
            alt={item.name}
            className="h-full w-full object-cover grayscale"
          />
        </div>
        <div className="flex flex-col py-4">
          <span className="text-xl font-medium text-slate-900">
            {item.name}
          </span>
          <span className="text-slate-500">{item.position}</span>
          <span className="text-sm mt-2 text-slate-700">
            {item.description}
          </span>
        </div>
      </div>
    );
  });
  return (
    <section className="w-full flex flex-col items-center gap-4 py-4">
      <div className="max-w-[1200px] flex flex-col w-full gap-8">
        <h1 className="text-center text-6xl instrument">Founders</h1>
        <div className="w-full flex md:grid md:grid-cols-3 flex-col gap-4">
          {founderMap}
        </div>
        {expertData.de.experts.length === 0 ? null : (
          <>
            <h2 className="text-center text-4xl instrument">Experts</h2>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {expertsMap}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
