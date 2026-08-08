import { MapPin, CalendarDays } from "lucide-react";
import { recentApplications } from "../../data/dashboardData";
import { useTheme } from "../../context/ThemeContext";

const statusColors = {
  Applied: "#3B82F6",
  Interview: "#F59E0B",
  Offer: "#10B981",
  Rejected: "#EF4444",
};

const RecentApplications = () => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Recent Applications
        </h2>

        <button
          className="text-sm font-semibold"
          style={{
            color: theme.colors.primary,
          }}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {recentApplications.map((application) => (
          <div
            key={application.id}
            className="rounded-2xl border p-5"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="font-semibold"
                  style={{
                    color: theme.colors.text,
                  }}
                >
                  {application.company}
                </h3>

                <p
                  className="mt-1 text-sm"
                  style={{
                    color: theme.colors.secondaryText,
                  }}
                >
                  {application.role}
                </p>
              </div>

              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  background: `${statusColors[application.status]}20`,
                  color: statusColors[application.status],
                }}
              >
                {application.status}
              </span>
            </div>

            <div
              className="mt-4 flex flex-wrap gap-4 text-xs"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {application.location}
              </span>

              <span className="flex items-center gap-1">
                <CalendarDays size={14} />
                {application.appliedDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;