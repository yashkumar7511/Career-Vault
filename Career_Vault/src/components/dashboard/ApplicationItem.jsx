import {
  ExternalLink,
  MapPin,
  CalendarDays,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const statusColors = {
  Applied: "#3B82F6",
  Interview: "#F59E0B",
  Offer: "#10B981",
  Rejected: "#EF4444",
};

const ApplicationItem = ({ application }) => {
  const { theme } = useTheme();

  return (
    <div
      className="flex items-center justify-between rounded-2xl border p-4 transition hover:-translate-y-1"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      {/* Left */}
      <div>
        <h3
          className="font-semibold text-lg"
          style={{
            color: theme.colors.text,
          }}
        >
          {application.company}
        </h3>

        <p
          className="text-sm"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          {application.role}
        </p>

        <div
          className="mt-2 flex items-center gap-4 text-xs"
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
            {application.date}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{
            background: statusColors[application.status],
          }}
        >
          {application.status}
        </span>

        <button
          className="rounded-lg p-2 transition hover:scale-110"
          style={{
            background: theme.colors.background,
          }}
        >
          <ExternalLink
            size={18}
            color={theme.colors.text}
          />
        </button>
      </div>
    </div>
  );
};

export default ApplicationItem;