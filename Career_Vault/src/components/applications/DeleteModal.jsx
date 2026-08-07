import { TriangleAlert } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const DeleteModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div
        className="w-full max-w-md rounded-3xl border p-8"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >

        <div className="flex justify-center">

          <div className="rounded-full bg-red-100 p-5">

            <TriangleAlert
              size={42}
              color="#EF4444"
            />

          </div>

        </div>

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
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border py-3"
            style={{
              borderColor: theme.colors.border,
              color: theme.colors.text,
            }}
          >
            Cancel
          </button>

          <button
            className="flex-1 rounded-xl bg-red-500 py-3 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteModal;