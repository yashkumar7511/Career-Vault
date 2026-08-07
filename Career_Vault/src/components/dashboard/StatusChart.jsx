import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import { useTheme } from "../../context/ThemeContext";

const data = [
  { name: "Applied", value: 15 },
  { name: "Interview", value: 8 },
  { name: "Offer", value: 4 },
  { name: "Rejected", value: 5 },
];

const COLORS = [
  "#4F46E5",
  "#3B82F6",
  "#10B981",
  "#EF4444",
];

const StatusChart = () => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-7"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <h2
        className="mb-8 text-2xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        Applications by Status
      </h2>

      <div className="h-72">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 space-y-3">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  background: COLORS[index],
                }}
              />

              <span
                style={{
                  color: theme.colors.text,
                }}
              >
                {item.name}
              </span>

            </div>

            <span
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StatusChart;