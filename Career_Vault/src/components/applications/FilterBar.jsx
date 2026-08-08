import { useTheme } from "../../context/ThemeContext";

const FilterBar = ({ status, onStatusChange }) => {
  const { theme } = useTheme();

  return (
    <select
      value={status}
      onChange={(e) => onStatusChange(e.target.value)}
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
      <option value="All">All Status</option>
      <option value="Applied">Applied</option>
      <option value="Interview">Interview</option>
      <option value="Offer">Offer</option>
      <option value="Rejected">Rejected</option>
    </select>
  );
};

export default FilterBar;