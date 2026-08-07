import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { useTheme } from "../../context/ThemeContext";

const data = [
  { month: "Jan", applications: 2 },
  { month: "Feb", applications: 6 },
  { month: "Mar", applications: 9 },
  { month: "Apr", applications: 13 },
  { month: "May", applications: 18 },
  { month: "Jun", applications: 22 },
  { month: "Jul", applications: 29 },
];

const ApplicationChart = () => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <h2
        className="mb-6 text-xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        Application Overview
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="month" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="applications"
            stroke={theme.colors.primary}
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationChart;