import { ChevronDown } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const FilterBar = () => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <select
        className="
          rounded-xl
          border
          px-4
          py-3
          outline-none
          transition
        "
        style={{
          background: theme.colors.card,
          color: theme.colors.text,
          borderColor: theme.colors.border,
        }}
      >
        <option>All Status</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

    </div>
  );
};

export default FilterBar;