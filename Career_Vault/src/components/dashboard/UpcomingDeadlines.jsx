import {
  CalendarClock,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

import { deadlines } from "../../data/dashboardData";

const UpcomingDeadlines = () => {

  const { theme } = useTheme();

  return (

    <div
      className="rounded-3xl border p-7"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >

      <div className="mb-8 flex items-center justify-between">

        <h2
          className="text-2xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Upcoming Deadlines
        </h2>

      </div>

      <div className="space-y-5">

        {deadlines.map((item) => (

          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border p-5"
            style={{
              borderColor: theme.colors.border,
            }}
          >

            <div>

              <h3
                className="font-semibold"
                style={{
                  color: theme.colors.text,
                }}
              >
                {item.company}
              </h3>

              <p
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Apply before
              </p>

            </div>

            <div className="flex items-center gap-2">

              <CalendarClock
                size={18}
                color={theme.colors.primary}
              />

              <span
                style={{
                  color: theme.colors.text,
                }}
              >
                {item.deadline}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
};

export default UpcomingDeadlines;