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

import { useMemo, useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

const ApplicationChart = () => {
  const { theme } = useTheme();
  const { applications } = useApplications();

  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState(
    currentYear
  );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Create monthly application data
  const data = useMemo(() => {
    return months.map((month, index) => {
      const applicationCount = applications.filter(
        (application) => {
          const date =
            application.appliedDate ||
            application.date;

          if (!date) return false;

          const parsedDate = parseApplicationDate(date);

          if (!parsedDate) return false;

          return (
            parsedDate.year === selectedYear &&
            parsedDate.month === index
          );
        }
      ).length;

      return {
        month,
        applications: applicationCount,
      };
    });
  }, [applications, selectedYear]);

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

        {/* Year Selector */}

        <div className="relative">

          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(
                Number(e.target.value)
              )
            }
            className="
              appearance-none
              rounded-xl
              border
              bg-transparent
              py-2
              pl-4
              pr-10
              text-sm
              outline-none
              cursor-pointer
            "
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
            }}
          >
            <option value={currentYear}>
              This Year
            </option>

            <option value={currentYear - 1}>
              {currentYear - 1}
            </option>

            <option value={currentYear - 2}>
              {currentYear - 2}
            </option>
          </select>

          <ChevronDown
            size={16}
            className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
            "
            color={theme.colors.text}
          />

        </div>
      </div>

      {/* Chart */}

      <div className="h-[420px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

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
              allowDecimals={false}
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
                color: theme.colors.text,
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


// Converts both:
// "12 Aug 2026"
// "2026-08-12"
// into { year, month }

const parseApplicationDate = (date) => {
  if (!date) return null;

  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month] = date
      .split("-")
      .map(Number);

    return {
      year,
      month: month - 1,
    };
  }

  // Example:
  // 12 Aug 2026

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return {
    year: parsed.getFullYear(),
    month: parsed.getMonth(),
  };
};

export default ApplicationChart;