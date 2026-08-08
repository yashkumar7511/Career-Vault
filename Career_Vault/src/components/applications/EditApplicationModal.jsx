import { X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import ApplicationForm from "./ApplicationForm";

const EditApplicationModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div
        className="
          max-h-[90vh]
          w-full
          max-w-3xl
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

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2
              className="text-3xl font-bold"
              style={{
                color: theme.colors.text,
              }}
            >
              Edit Application
            </h2>

            <p
              className="mt-1"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              Update your application details.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-3 transition hover:scale-110"
            style={{
              background: theme.colors.background,
            }}
          >
            <X size={22} color={theme.colors.text} />
          </button>
        </div>

        {/* Form */}

        <ApplicationForm />

        {/* Buttons */}

        <div
          className="mt-8 flex justify-end gap-4 border-t pt-6"
          style={{
            borderColor: theme.colors.border,
          }}
        >
          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3 font-medium transition hover:-translate-y-0.5"
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
              background: theme.colors.background,
            }}
          >
            Cancel
          </button>

          <button
            className="rounded-xl px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            style={{
              background: theme.colors.primary,
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditApplicationModal;