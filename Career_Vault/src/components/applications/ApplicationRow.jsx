import StatusBadge from "./StatusBadge";

import {
  MapPin,
  CalendarDays,
  Pencil,
  Trash2,
  StickyNote,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";


const ApplicationRow = ({ application }) => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-6 transition hover:-translate-y-1"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <h2
            className="text-xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            {application.company}
          </h2>

          <p
            className="mt-1"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            {application.role}
          </p>

          <div
            className="mt-4 flex flex-wrap gap-6 text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {application.location}
            </span>

            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {application.date}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <StatusBadge status={application.status} />

          <button
            className="rounded-xl p-3 transition hover:scale-105"
            style={{
              background: theme.colors.background,
            }}
          >
            <StickyNote size={18} />
          </button>

          <button
            className="rounded-xl p-3 transition hover:scale-105"
            style={{
              background: theme.colors.background,
            }}
          >
            <Pencil size={18} />
          </button>

          <button
            className="rounded-xl p-3 transition hover:scale-105"
            style={{
              background: "#EF444420",
              color: "#EF4444",
            }}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationRow;