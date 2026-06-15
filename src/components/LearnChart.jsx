import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { BookOpen, CheckCircle2, Clock, Trophy } from "lucide-react";

const learningStats = [
  {
    title: "Lessons",
    value: "48",
    icon: BookOpen,
  },
  {
    title: "Completed",
    value: "32",
    icon: CheckCircle2,
  },
  {
    title: "Hours",
    value: "18.5",
    icon: Clock,
  },
  {
    title: "Score",
    value: "92%",
    icon: Trophy,
  },
];

const learningData = [
  { week: "W1", progress: 18 },
  { week: "W2", progress: 28 },
  { week: "W3", progress: 42 },
  { week: "W4", progress: 56 },
  { week: "W5", progress: 68 },
  { week: "W6", progress: 81 },
  { week: "W7", progress: 92 },
];

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-950">
        {payload[0].value}% Progress
      </p>
    </div>
  );
}

export default function LearningMiniDashboard() {
  return (
    <section className="w-full h-full flex-grow-1 rounded-2xl border border-slate-200 bg-white p-4 text-start">
      <div className="mb-5">
        <span className="text-xl text-slate-950">Learning</span>
        <p className="mt-1 text-sm text-slate-500">
          Track ads knowledge and team progress
        </p>
      </div>

      <div className="mb-4 gap-2 md:grid md:grid-cols-2">
        {learningStats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 p-3"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-slate-500">{item.title}</span>
                <Icon size={16} className="text-blue-600" />
              </div>

              <div className="text-xl font-semibold text-slate-950">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-slate-500">
              Certification Progress
            </p>
            <div className="mt-1 flex items-end gap-2">
              <span className="text-3xl font-semibold text-slate-950">92%</span>
              <span className="mb-1 text-sm font-medium text-blue-600">
                +14%
              </span>
            </div>
          </div>

          <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
            Active
          </span>
        </div>
      </div>
    </section>
  );
}
