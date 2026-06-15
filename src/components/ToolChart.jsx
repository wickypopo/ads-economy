const toolBars = [
  {
    label: "Mon",
    value: 54,
    title: "Sales",
    metric: "+12.4%",
    description: "Sales increased by 12.4%",
  },
  {
    label: "Tue",
    value: 42,
    title: "Sales",
    metric: "-4.8%",
    description: "Sales decreased by 4.8%",
  },
  {
    label: "Wed",
    value: 47,
    title: "Sales",
    metric: "+6.2%",
    description: "Sales increased by 6.2%",
  },
  {
    label: "Thu",
    value: 69,
    title: "Sales",
    metric: "+18.9%",
    description: "Sales increased by 18.9%",
  },
  {
    label: "Fri",
    value: 82,
    title: "Sales",
    metric: "+24.7%",
    description: "Sales increased by 24.7%",
  },
  {
    label: "Sat",
    value: 61,
    title: "Sales",
    metric: "-7.1%",
    description: "Sales decreased by 7.1%",
  },
  {
    label: "Sun",
    value: 45,
    title: "Sales",
    metric: "-11.3%",
    description: "Sales decreased by 11.3%",
  },
  {
    label: "Today",
    value: 60,
    title: "Sales",
    metric: "+9.6%",
    description: "Sales increased by 9.6%",
  },
];

export default function ToolChart() {
  return (
    <section className="h-full w-full rounded-2xl border border-slate-200 bg-white p-4 text-start">
      <div className="mb-5">
        <span className="text-xl text-slate-950">Tools</span>
        <p className="mt-1 text-sm text-slate-500">
          Monitor automation and AI tool performance
        </p>
      </div>

      <div className="flex h-48 items-end justify-center gap-5 rounded-xl border border-slate-200 p-6">
        {toolBars.map((item) => (
          <div
            key={item.label}
            className="group relative flex h-full flex-col items-center justify-end gap-2"
          >
            <div
              className="w-3 rounded-full bg-blue-600 transition-all duration-300 group-hover:bg-blue-700"
              style={{ height: `${item.value}%` }}
            />

            <span className="text-[10px] font-medium text-slate-400">
              {item.label}
            </span>

            <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-44 -translate-x-1/2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-start opacity-0 shadow-lg transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
              <p className="text-xs font-medium text-slate-500">{item.label}</p>

              <p className="mt-1 text-sm font-semibold text-slate-950">
                {item.title}
              </p>

              <p className="mt-1 text-lg font-semibold text-blue-600">
                {item.metric}
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Sales last Week</p>

          <div className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-semibold text-slate-950">82%</span>
            <span className="mb-1 text-sm font-medium text-blue-600">+21%</span>
          </div>
        </div>

        <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
          This week
        </span>
      </div>
    </section>
  );
}
