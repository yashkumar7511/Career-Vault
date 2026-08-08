import {
  X,
  MapPin,
  Briefcase,
  IndianRupee,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import StatusBadge from "./StatusBadge";

const ApplicationDetailsDrawer = ({
  application,
  onClose,
}) => {
  const { theme } = useTheme();

  if (!application) {
    return null;
  }

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}

      <div
        className="
          fixed
          right-0
          top-0
          z-50
          h-full
          w-full
          max-w-xl
          overflow-y-auto
          border-l
          p-6
          shadow-2xl
          sm:p-8
        "
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        {/* Header */}

        <div className="flex items-start justify-between">

          <div>
            <p
              className="text-sm font-medium"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              Application Details
            </p>

            <h2
              className="mt-1 text-3xl font-bold"
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
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:scale-110"
            style={{
              background: theme.colors.background,
            }}
          >
            <X
              size={22}
              color={theme.colors.text}
            />
          </button>

        </div>

        {/* Status */}

        <div className="mt-8">
          <StatusBadge status={application.status} />
        </div>

        {/* Information */}

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

          {/* Location */}

          <div
            className="rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-2">
              <MapPin
                size={18}
                color={theme.colors.primary}
              />

              <span
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Location
              </span>
            </div>

            <p
              className="mt-2 font-semibold"
              style={{
                color: theme.colors.text,
              }}
            >
              {application.location}
            </p>
          </div>

          {/* Work Mode */}

          <div
            className="rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-2">
              <Briefcase
                size={18}
                color={theme.colors.primary}
              />

              <span
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Work Mode
              </span>
            </div>

            <p
              className="mt-2 font-semibold"
              style={{
                color: theme.colors.text,
              }}
            >
              {application.workMode || "Not specified"}
            </p>
          </div>

          {/* Salary */}

          <div
            className="rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-2">
              <IndianRupee
                size={18}
                color={theme.colors.primary}
              />

              <span
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Salary
              </span>
            </div>

            <p
              className="mt-2 font-semibold"
              style={{
                color: theme.colors.text,
              }}
            >
              {application.salary || "Not specified"}
            </p>
          </div>

          {/* Applied Date */}

          <div
            className="rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center gap-2">
              <CalendarDays
                size={18}
                color={theme.colors.primary}
              />

              <span
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Applied Date
              </span>
            </div>

            <p
              className="mt-2 font-semibold"
              style={{
                color: theme.colors.text,
              }}
            >
              {application.appliedDate || application.date}
            </p>
          </div>

        </div>

        {/* Skills */}

        <div className="mt-8">

          <h3
            className="text-lg font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Skills
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">

            {application.skills?.length > 0 ? (
              application.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1.5 text-sm"
                  style={{
                    background: theme.colors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.secondaryText,
                  }}
                >
                  {skill}
                </span>
              ))
            ) : (
              <p
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                No skills added.
              </p>
            )}

          </div>

        </div>

        {/* Job Link */}

        <div className="mt-8">

          <h3
            className="text-lg font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Job Link
          </h3>

          <button
            className="
              mt-3
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              p-4
              text-left
              transition
              hover:-translate-y-0.5
            "
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <span
              className="text-sm"
              style={{
                color: theme.colors.primary,
              }}
            >
              View Job Posting
            </span>

            <ExternalLink
              size={18}
              color={theme.colors.primary}
            />
          </button>

        </div>

        {/* Notes */}

        <div className="mt-8">

          <h3
            className="text-lg font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Notes
          </h3>

          <div
            className="mt-3 min-h-28 rounded-2xl border p-4"
            style={{
              background: theme.colors.background,
              borderColor: theme.colors.border,
            }}
          >
            <p
              className="text-sm leading-6"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              No notes added for this application yet.
            </p>
          </div>

        </div>

      </div>
    </>
  );
};

export default ApplicationDetailsDrawer;