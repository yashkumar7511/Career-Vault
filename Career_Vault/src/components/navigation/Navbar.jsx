import {
  Bell,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const {
    theme,
    darkMode,
    toggleTheme,
  } = useTheme();

  return (
    <header
      className="flex items-center justify-between border-b px-10 py-5"
      style={{
        background: theme.colors.background,
        borderColor: theme.colors.border,
      }}
    >
      {/* Left */}

      <div>
        <h1
          className="text-4xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Dashboard
        </h1>

        <p
          className="mt-1 text-xl"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          Welcome back 👋
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        {/* Notification */}

        <button
          type="button"
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
          "
          style={{
            background: theme.colors.card,
          }}
        >
          <Bell
            size={20}
            style={{
              color: theme.colors.text,
            }}
          />
        </button>

        {/* Theme */}

        <button
          type="button"
          onClick={toggleTheme}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            text-white
          "
          style={{
            background: theme.colors.primary,
          }}
        >
          {darkMode ? (
            <Sun size={20} />
          ) : (
            <Moon size={20} />
          )}
        </button>

        {/* Avatar */}

        <div className="flex items-center gap-4">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              text-lg
              font-bold
              text-white
            "
            style={{
              background: theme.colors.primary,
            }}
          >
            Y
          </div>

          <div>
            <h3
              className="font-semibold"
              style={{
                color: theme.colors.text,
              }}
            >
              Yash
            </h3>

            <p
              className="text-sm"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              Frontend Developer
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;