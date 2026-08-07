import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const data = [
  { month: "Jan", applications: 5 },
  { month: "Feb", applications: 14 },
  { month: "Mar", applications: 12 },
  { month: "Apr", applications: 20 },
  { month: "May", applications: 18 },
  { month: "Jun", applications: 28 },
  { month: "Jul", applications: 35 },
];

const ApplicationChart = () => {
  const { theme } = useTheme();

  return (
    <div
      className="h-full rounded-3xl border p-7"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2
            className="text-2xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Application Overview
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Applications submitted throughout the year
          </p>
        </div>

        <button
          className="flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:opacity-80"
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          This Year
          <ChevronDown size={16} />
        </button>

      </div>

      {/* Chart */}

      <div className="h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke={theme.colors.border}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: theme.colors.secondaryText,
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: theme.colors.secondaryText,
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: theme.colors.card,
                border: `1px solid ${theme.colors.border}`,
                borderRadius: "14px",
              }}
            />

            <Line
              type="monotone"
              dataKey="applications"
              stroke={theme.colors.primary}
              strokeWidth={4}
              dot={{
                r: 5,
                fill: theme.colors.primary,
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default ApplicationChart;