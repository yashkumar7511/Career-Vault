import { FolderOpen, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const EmptyState = () => {
  const { theme } = useTheme();

  return (
    <div
      className="flex flex-col items-center justify-center rounded-3xl border py-24"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <div
        className="mb-6 rounded-full p-6"
        style={{
          background: theme.colors.primary,
        }}
      >
        <FolderOpen size={48} className="text-white" />
      </div>

      <h2
        className="text-3xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        No Applications Yet
      </h2>

      <p
        className="mt-3 max-w-md text-center"
        style={{
          color: theme.colors.secondaryText,
        }}
      >
        Start tracking your placement journey by adding your first application.
      </p>

      <button
        className="mt-8 flex items-center gap-2 rounded-xl px-6 py-3 text-white transition hover:scale-105"
        style={{
          background: theme.colors.primary,
        }}
      >
        <Plus size={18} />
        Add Application
      </button>
    </div>
  );
};

export default EmptyState;