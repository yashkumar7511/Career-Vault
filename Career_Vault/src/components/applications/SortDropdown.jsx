import { ArrowUpDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const SortDropdown = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <select
        className="
          appearance-none
          rounded-2xl
          border
          py-3
          pl-4
          pr-12
          outline-none
          transition-all
          duration-300
        "
        style={{
          background: theme.colors.card,
          color: theme.colors.text,
          borderColor: theme.colors.border,
        }}
      >
        <option>Newest First</option>
        <option>Oldest First</option>
        <option>Company (A-Z)</option>
        <option>Company (Z-A)</option>
        <option>Status</option>
      </select>

      <ArrowUpDown
        size={18}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        color={theme.colors.secondaryText}
      />
    </div>
  );
};

export default SortDropdown;