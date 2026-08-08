import {
  CalendarDays,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const InterviewCard = ({ application }) => {
  const { theme } = useTheme();

  return (
    <div
      className="
        rounded-2xl
        border
        p-5
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
      }}
    >

      {/* Company */}

      <div className="flex items-start justify-between gap-3">

        <div>
          <h3
            className="text-lg font-bold"
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
            background: `${theme.colors.primary}20`,
            color: theme.colors.primary,
          }}
        >
          Interview
        </span>

      </div>

      {/* Details */}

      <div
        className="mt-5 space-y-3 text-sm"
        style={{
          color: theme.colors.secondaryText,
        }}
      >

        {application.interviewDate && (
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>
              {formatDate(
                application.interviewDate
              )}
            </span>
          </div>
        )}

        {application.interviewTime && (
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>
              {application.interviewTime}
            </span>
          </div>
        )}

        {application.location && (
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>
              {application.location}
            </span>
          </div>
        )}

        {application.workMode && (
          <div className="flex items-center gap-2">
            <Briefcase size={16} />
            <span>
              {application.workMode}
            </span>
          </div>
        )}

      </div>

    </div>
  );
};

const formatDate = (date) => {
  if (!date) return "";

  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    const [year, month, day] =
      date.split("-").map(Number);

    return new Date(
      year,
      month - 1,
      day
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );
};

export default InterviewCard;