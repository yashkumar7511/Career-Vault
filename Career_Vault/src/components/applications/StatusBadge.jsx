import { useTheme } from "../../context/ThemeContext";

const statusColors = {
  Applied: "#3B82F6",
  Interview: "#F59E0B",
  Offer: "#10B981",
  Rejected: "#EF4444",
};

const StatusBadge = ({ status }) => {
  const { theme } = useTheme();

  return (
    <span
      className="rounded-full px-4 py-2 text-sm font-semibold"
      style={{
        background: `${statusColors[status]}20`,
        color: statusColors[status],
        border: `1px solid ${statusColors[status]}40`,
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;