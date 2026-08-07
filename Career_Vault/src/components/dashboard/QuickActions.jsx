import {
  Plus,
  FileText,
  CalendarPlus,
  Download,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const actions = [
  {
    title: "Add Application",
    icon: Plus,
  },
  {
    title: "Upload Resume",
    icon: FileText,
  },
  {
    title: "Schedule Interview",
    icon: CalendarPlus,
  },
  {
    title: "Export Data",
    icon: Download,
  },
];

const QuickActions = () => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-7"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <h2
        className="mb-8 text-2xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                borderColor: theme.colors.border,
              }}
            >
              <Icon
                size={28}
                color={theme.colors.primary}
              />

              <p
                className="mt-4 font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                {action.title}
              </p>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default QuickActions;