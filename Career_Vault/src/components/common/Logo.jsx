import { BriefcaseBusiness } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div className="px-8 pt-8 pb-6">

      <div className="flex items-center gap-3">

        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
          style={{
            background: theme.colors.primary,
          }}
        >
          <BriefcaseBusiness size={24} />
        </div>

        <div>

          <h1
            className="text-3xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Career Vault
          </h1>

          <p
            className="text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Track. Prepare. Get Hired.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Logo;