import { X, FileText } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const NotesModal = ({ isOpen, onClose, notes }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div
        className="w-full max-w-2xl rounded-3xl border p-6 shadow-2xl sm:p-8"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        {/* Header */}

        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="rounded-xl p-3"
              style={{
                background: theme.colors.primary,
              }}
            >
              <FileText
                className="text-white"
                size={22}
              />
            </div>

            <div>
              <h2
                className="text-2xl font-bold"
                style={{
                  color: theme.colors.text,
                }}
              >
                Application Notes
              </h2>

              <p
                className="text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Personal notes about this application.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-3 transition hover:scale-110"
            style={{
              background: theme.colors.background,
            }}
          >
            <X
              size={20}
              color={theme.colors.text}
            />
          </button>
        </div>

        {/* Notes */}

        <div
          className="min-h-[250px] rounded-2xl border p-5"
          style={{
            background: theme.colors.background,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          <p className="leading-7">
            {notes || "No notes added yet."}
          </p>
        </div>

        {/* Footer */}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            style={{
              background: theme.colors.primary,
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesModal;