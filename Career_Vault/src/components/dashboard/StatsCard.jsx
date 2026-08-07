import { TrendingUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const StatsCard = ({
  title,
  value,
  change,
  icon: Icon,
  color,
}) => {
  const { theme } = useTheme();

  return (
    <div
      className="
        rounded-3xl
        border
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <div className="flex items-center justify-between">

        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
          style={{
            background: color,
          }}
        >
          <Icon size={26} />
        </div>

        <div
          className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium"
          style={{
            background: `${color}20`,
            color,
          }}
        >
          <TrendingUp size={16} />
          {change}
        </div>

      </div>

      <h4
        className="mt-6 text-sm font-medium"
        style={{
          color: theme.colors.secondaryText,
        }}
      >
        {title}
      </h4>

      <h2
        className="mt-2 text-4xl font-bold"
        style={{
          color: theme.colors.text,
        }}
      >
        {value}
      </h2>

      <p
        className="mt-2 text-sm"
        style={{
          color: theme.colors.secondaryText,
        }}
      >
        Updated today
      </p>

    </div>
  );
};

export default StatsCard;