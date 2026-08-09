import {
  MapPin,
  Briefcase,
  IndianRupee,
  CalendarDays,
  ExternalLink,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const priorityColors = {
  High: "#EF4444",
  Medium: "#F59E0B",
  Low: "#10B981",
};

const WishlistCard = ({
  job,
  onEdit,
  onDelete,
  onApply,
}) => {
  const { theme } = useTheme();

  const priorityColor =
    priorityColors[job.priority] ||
    theme.colors.primary;

  return (
    <div
      className="
        rounded-3xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div>
          <h2
            className="text-xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            {job.company}
          </h2>

          <p
            className="mt-1"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            {job.role}
          </p>
        </div>

        <span
          className="w-fit rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            background: `${priorityColor}20`,
            color: priorityColor,
          }}
        >
          {job.priority} Priority
        </span>
      </div>

      {/* Details */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          items-center
          gap-x-6
          gap-y-3
          text-sm
        "
        style={{
          color: theme.colors.secondaryText,
        }}
      >
        <span className="flex items-center gap-2">
          <MapPin size={16} />
          {job.location}
        </span>

        <span className="flex items-center gap-2">
          <Briefcase size={16} />
          {job.workMode}
        </span>

        {job.salary && (
          <span className="flex items-center gap-2">
            <IndianRupee size={16} />
            {job.salary}
          </span>
        )}

        <span className="flex items-center gap-2">
          <CalendarDays size={16} />
          {formatDate(job.addedDate)}
        </span>
      </div>

      {/* Skills */}

      {job.skills?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                background: theme.colors.background,
                borderColor: theme.colors.border,
                color: theme.colors.secondaryText,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Notes */}

      {job.notes && (
        <p
          className="mt-5 text-sm"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          {job.notes}
        </p>
      )}

      {/* Actions */}

      <div
        className="
          mt-6
          flex
          flex-wrap
          justify-end
          gap-3
          border-t
          pt-5
        "
        style={{
          borderColor: theme.colors.border,
        }}
      >
        {job.jobUrl && (
          <a
            href={job.jobUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition hover:-translate-y-0.5"
            style={{
              background: theme.colors.background,
              color: theme.colors.text,
            }}
          >
            <ExternalLink size={17} />
            View Job
          </a>
        )}

        <button
          type="button"
          onClick={() => onApply(job)}
          className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          style={{
            background: theme.colors.primary,
          }}
        >
          <Check size={17} />
          Apply
        </button>

        <button
          type="button"
          onClick={() => onEdit(job)}
          className="rounded-xl p-3 transition hover:scale-110"
          style={{
            background: theme.colors.background,
          }}
          title="Edit"
        >
          <Pencil
            size={18}
            color={theme.colors.text}
          />
        </button>

        <button
          type="button"
          onClick={() => onDelete(job.id)}
          className="rounded-xl p-3 transition hover:scale-110"
          style={{
            background: "#EF444420",
          }}
          title="Delete"
        >
          <Trash2
            size={18}
            color="#EF4444"
          />
        </button>
      </div>
    </div>
  );
};

const formatDate = (date) => {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default WishlistCard;