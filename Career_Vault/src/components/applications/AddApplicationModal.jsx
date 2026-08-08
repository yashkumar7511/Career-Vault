import {
  X,
  Plus,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const AddApplicationModal = ({ onClose }) => {
  const { theme } = useTheme();

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="
            w-full
            max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
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
              <h2
                className="text-2xl font-bold"
                style={{
                  color: theme.colors.text,
                }}
              >
                Add Application
              </h2>

              <p
                className="mt-1 text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Add a new job application to your tracker.
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

          {/* Form */}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Company */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Company
              </label>

              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Role */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Job Role
              </label>

              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Location */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Location
              </label>

              <input
                type="text"
                placeholder="e.g. Bengaluru"
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Status */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Status
              </label>

              <select
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            {/* Work Mode */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Work Mode
              </label>

              <select
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>

            {/* Salary */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Salary
              </label>

              <input
                type="text"
                placeholder="e.g. 18 LPA"
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Applied Date */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Applied Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Skills */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Skills
              </label>

              <input
                type="text"
                placeholder="e.g. React, JavaScript, Tailwind"
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />

              <p
                className="mt-2 text-xs"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Separate multiple skills with commas.
              </p>
            </div>

            {/* Job Link */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Job Link
              </label>

              <input
                type="url"
                placeholder="https://..."
                className="w-full rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>

            {/* Notes */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Notes
              </label>

              <textarea
                rows="4"
                placeholder="Add any notes about this application..."
                className="w-full resize-none rounded-xl border px-4 py-3 outline-none transition"
                style={{
                  background: theme.colors.background,
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              />
            </div>
          </div>

          {/* Buttons */}

          <div
            className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end"
            style={{
              borderColor: theme.colors.border,
            }}
          >
            <button
              onClick={onClose}
              className="rounded-xl border px-5 py-3 font-medium transition hover:-translate-y-0.5"
              style={{
                borderColor: theme.colors.border,
                color: theme.colors.text,
                background: theme.colors.background,
              }}
            >
              Cancel
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
              style={{
                background: theme.colors.primary,
              }}
            >
              <Plus size={18} />
              Add Application
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddApplicationModal;