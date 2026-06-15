import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowUpRight, MousePointerClick, Euro, Users } from "lucide-react";

const stats = [
  {
    title: "Ad Spend",
    value: "42.500€",
    change: "+18.4%",
    icon: Euro,
  },
  {
    title: "ROAS",
    value: "6.8x",
    change: "+2.1x",
    icon: ArrowUpRight,
  },
  {
    title: "Clicks",
    value: "128.400",
    change: "+31.2%",
    icon: MousePointerClick,
  },
  {
    title: "Leads",
    value: "2.840",
    change: "+12.7%",
    icon: Users,
  },
];

const chartData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 26000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 38000 },
  { month: "Jun", revenue: 52000 },
  { month: "Jul", revenue: 61000 },
  { month: "Aug", revenue: 74000 },
  { month: "Sep", revenue: 68000 },
  { month: "Oct", revenue: 86000 },
  { month: "Nov", revenue: 92000 },
  { month: "Dec", revenue: 118000 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-950">
        {payload[0].value.toLocaleString("de-DE")}€
      </p>
    </div>
  );
}

export default function SaaSDashboardDummy() {
  return (
    <section className="w-full rounded-2xl bg-white border border-slate-200 p-4 text-start lg:p-10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className="instrument text-4xl text-slate-950">
            Ads Performance
          </span>
          <p className="mt-1 text-sm text-slate-500">
            Live overview of campaign growth
          </p>
        </div>
      </div>

      <div className="mb-4 hidden gap-3 md:grid md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 p-4"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-500">{item.title}</span>
                <Icon size={18} className="text-blue-600" />
              </div>

              <div className="text-2xl font-semibold text-slate-950">
                {item.value}
              </div>

              <div className="mt-1 text-sm font-medium text-blue-600">
                {item.change}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Revenue</p>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-semibold text-slate-950">
                118.000€
              </span>
              <span className="mb-1 text-sm font-medium text-blue-600">
                +28.4%
              </span>
            </div>
          </div>

          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            Last 12 months
          </span>
        </div>

        <div className="h-[280px] w-full md:h-[360px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 8, left: -18, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#e2e8f0"
                strokeDasharray="3 3"
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                dy={10}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
              />

              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={2}
                fill="url(#revenueGradient)"
                activeDot={{
                  r: 5,
                  fill: "#2563eb",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
