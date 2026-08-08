import { TriangleAlert, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const DeleteModal = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div
        className="w-full max-w-md rounded-3xl border p-8 shadow-2xl"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:scale-110"
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

        {/* Warning Icon */}

        <div className="flex justify-center">
          <div className="rounded-full bg-red-100 p-5">
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
          Delete Application?
        </h2>

        <p
          className="mt-3 text-center"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          Are you sure you want to delete this application?
          This action cannot be undone.
        </p>

        {/* Buttons */}

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3 font-medium transition hover:-translate-y-0.5"
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
              background: theme.colors.background,
            }}
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="
              flex-1
              rounded-xl
              bg-red-500
              py-3
              font-semibold
              text-white
              transition
              hover:-translate-y-0.5
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;