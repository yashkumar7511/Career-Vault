import { X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import ApplicationForm from "./ApplicationForm";

const EditApplicationModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div
        className="w-full max-w-3xl rounded-3xl border p-8 shadow-2xl"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

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
            className="rounded-xl p-3"
            style={{
              background: theme.colors.background,
            }}
          >
            <X size={22} color={theme.colors.text} />
          </button>

        </div>

        <ApplicationForm />

        <div className="mt-8 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-xl border px-6 py-3"
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
            }}
          >
            Cancel
          </button>

          <button
            className="rounded-xl px-6 py-3 text-white"
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