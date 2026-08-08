import { CalendarDays } from "lucide-react";
import { deadlines } from "../../data/dashboardData";
import { useTheme } from "../../context/ThemeContext";

const UpcomingDeadlines = () => {
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
        className="mb-6 text-2xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">
        {deadlines.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="rounded-xl p-3"
                style={{
                  background: `${theme.colors.primary}20`,
                }}
              >
                <CalendarDays
                  size={20}
                  color={theme.colors.primary}
                />
              </div>

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
                  className="text-sm"
                  style={{
                    color: theme.colors.secondaryText,
                  }}
                >
                  Application deadline
                </p>
              </div>
            </div>

            <span
              className="text-sm font-semibold"
              style={{
                color: theme.colors.primary,
              }}
            >
              {item.deadline}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;