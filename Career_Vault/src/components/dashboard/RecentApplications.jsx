import { MapPin, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

const statusColors = {
  Applied: "#3B82F6",
  Interview: "#F59E0B",
  Offer: "#10B981",
  Rejected: "#EF4444",
  Wishlist: "#EC4899",
};

const RecentApplications = () => {
  const { theme } = useTheme();
  const { applications } = useApplications();

  const navigate = useNavigate();

  // Show the 3 most recent applications
  const recentApplications = [...applications]
    .sort((a, b) => {
      return (
        getDateValue(b.appliedDate || b.date) -
        getDateValue(a.appliedDate || a.date)
      );
    })
    .slice(0, 3);

  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      {/* Header */}

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
          type="button"
          onClick={() => navigate("/applications")}
          className="text-sm font-semibold transition hover:opacity-80"
          style={{
            color: theme.colors.primary,
          }}
        >
          View All
        </button>
      </div>

      {/* Applications */}

      <div className="space-y-4">
        {recentApplications.length > 0 ? (
          recentApplications.map((application) => {
            const statusColor =
              statusColors[application.status] ||
              theme.colors.primary;

            return (
              <div
                key={application.id}
                className="rounded-2xl border p-5"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                }}
              >
                <div className="flex items-start justify-between gap-4">

                  {/* Company + Role */}

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

                  {/* Status */}

                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: `${statusColor}20`,
                      color: statusColor,
                    }}
                  >
                    {application.status}
                  </span>
                </div>

                {/* Details */}

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
                    {application.appliedDate ||
                      application.date}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="rounded-2xl border p-8 text-center"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
              color: theme.colors.secondaryText,
            }}
          >
            No applications yet.
          </div>
        )}
      </div>
    </div>
  );
};

const getDateValue = (date) => {
  if (!date) return 0;

  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Date(date).getTime();
  }

  const parsedDate = new Date(date);

  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.getTime();
  }

  return 0;
};

export default RecentApplications;