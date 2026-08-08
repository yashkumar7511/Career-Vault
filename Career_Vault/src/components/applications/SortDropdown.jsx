import { useTheme } from "../../context/ThemeContext";

const SortDropdown = ({ sortBy, onSortChange }) => {
  const { theme } = useTheme();

  return (
    <select
      value={sortBy}
      onChange={(e) => onSortChange(e.target.value)}
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
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="companyAZ">Company A-Z</option>
      <option value="companyZA">Company Z-A</option>
    </select>
  );
};

export default SortDropdown;