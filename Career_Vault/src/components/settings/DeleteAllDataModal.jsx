import {
  X,
  Trash2,
  TriangleAlert,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const DeleteAllDataModal = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md rounded-3xl border p-8 shadow-2xl"
          style={{
            background: theme.colors.card,
            borderColor: theme.colors.border,
          }}
        >
          {/* Close */}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2"
              style={{
                background:
                  theme.colors.background,
              }}
            >
              <X
                size={20}
                color={theme.colors.text}
              />
            </button>
          </div>

          {/* Icon */}

          <div className="flex justify-center">
            <div className="rounded-full bg-red-500/10 p-5">
              <TriangleAlert
                size={42}
                color="#EF4444"
              />
            </div>
          </div>

          {/* Heading */}

          <h2
            className="mt-6 text-center text-2xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Delete All Data?
          </h2>

          <p
            className="mt-3 text-center"
            style={{
              color:
                theme.colors.secondaryText,
            }}
          >
            This will permanently delete all
            your applications and wishlist jobs.
          </p>

          <p
            className="mt-2 text-center text-sm font-semibold"
            style={{
              color: "#EF4444",
            }}
          >
            This action cannot be undone.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border py-3 font-medium"
              style={{
                borderColor:
                  theme.colors.border,
                color: theme.colors.text,
              }}
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onConfirm}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
            >
              <Trash2 size={18} />
              Delete Everything
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAllDataModal;