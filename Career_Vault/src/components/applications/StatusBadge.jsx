const statusStyles = {
  Applied: {
    color: "#3B82F6",
    background: "#3B82F620",
    border: "#3B82F640",
  },

  Interview: {
    color: "#F59E0B",
    background: "#F59E0B20",
    border: "#F59E0B40",
  },

  Offer: {
    color: "#10B981",
    background: "#10B98120",
    border: "#10B98140",
  },

  Rejected: {
    color: "#EF4444",
    background: "#EF444420",
    border: "#EF444440",
  },
};

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] || statusStyles.Applied;

  return (
    <span
      className="rounded-full border px-4 py-2 text-sm font-semibold"
      style={{
        color: style.color,
        background: style.background,
        borderColor: style.border,
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;