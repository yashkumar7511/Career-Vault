import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Pagination = () => {
  const { theme } = useTheme();

  const pages = [1, 2, 3, 4];

  return (
    <div
      className="mt-10 flex flex-col gap-6 rounded-3xl border p-6 md:flex-row md:items-center md:justify-between"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      {/* Left */}
      <p
        className="text-sm"
        style={{
          color: theme.colors.secondaryText,
        }}
      >
        Showing <span className="font-semibold">1-10</span> of{" "}
        <span className="font-semibold">32</span> applications
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button
          className="flex items-center gap-2 rounded-xl border px-4 py-2 transition-all hover:scale-105"
          style={{
            background: theme.colors.background,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        {pages.map((page) => (
          <button
            key={page}
            className="h-10 w-10 rounded-xl font-medium transition-all hover:scale-105"
            style={{
              background:
                page === 1
                  ? theme.colors.primary
                  : theme.colors.background,
              color:
                page === 1
                  ? "#fff"
                  : theme.colors.text,
            }}
          >
            {page}
          </button>
        ))}

        <button
          className="flex items-center gap-2 rounded-xl border px-4 py-2 transition-all hover:scale-105"
          style={{
            background: theme.colors.background,
            borderColor: theme.colors.border,
            color: theme.colors.text,
          }}
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;