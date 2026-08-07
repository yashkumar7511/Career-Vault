import { useTheme } from "../../context/ThemeContext";

const PageHeader = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  const { theme } = useTheme();

  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1
          className="text-4xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          {title}
        </h1>

        <p
          className="mt-2 text-lg"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          {subtitle}
        </p>
      </div>

      {buttonText && (
        <button
          onClick={onButtonClick}
          className="rounded-2xl px-6 py-3 text-white transition hover:scale-105"
          style={{
            background: theme.colors.primary,
          }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default PageHeader;