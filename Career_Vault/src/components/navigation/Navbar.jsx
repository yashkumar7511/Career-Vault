import { useState } from "react";

import {
  Bell,
  Moon,
  Sun,
  LogOut,
  User,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const {
    theme,
    darkMode,
    toggleTheme,
  } = useTheme();

  const {
    user,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();

      setShowProfile(false);

      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const userName =
    user?.displayName || "User";

  const userEmail =
    user?.email || "";

  const userPhoto =
    user?.photoURL || "";

  const firstLetter =
    userName.charAt(0).toUpperCase();

  return (
    <header
      className="relative flex items-center justify-between border-b px-10 py-5"
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
          className="flex h-12 w-12 items-center justify-center rounded-full"
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
          className="flex h-12 w-12 items-center justify-center rounded-full text-white"
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

        {/* Profile */}

        <div className="relative">

          <button
            type="button"
            onClick={() =>
              setShowProfile(
                (previous) => !previous
              )
            }
            className="flex items-center gap-4 rounded-2xl p-2 transition hover:opacity-80"
          >

            {/* Profile Image */}

            {userPhoto ? (
              <img
                src={userPhoto}
                alt={userName}
                className="h-12 w-12 rounded-full object-cover"
              />
            ) : (
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{
                  background:
                    theme.colors.primary,
                }}
              >
                {firstLetter}
              </div>
            )}

            {/* User Information */}

            <div className="text-left">

              <h3
                className="font-semibold"
                style={{
                  color: theme.colors.text,
                }}
              >
                {userName}
              </h3>

              <p
                className="max-w-[180px] truncate text-sm"
                style={{
                  color:
                    theme.colors.secondaryText,
                }}
              >
                {userEmail}
              </p>

            </div>

          </button>

          {/* Profile Dropdown */}

          {showProfile && (
            <div
              className="absolute right-0 top-16 z-50 w-64 rounded-2xl border p-3 shadow-2xl"
              style={{
                background:
                  theme.colors.card,
                borderColor:
                  theme.colors.border,
              }}
            >

              {/* User */}

              <div
                className="mb-2 border-b pb-3"
                style={{
                  borderColor:
                    theme.colors.border,
                }}
              >

                <div className="flex items-center gap-3">

                  {userPhoto ? (
                    <img
                      src={userPhoto}
                      alt={userName}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white"
                      style={{
                        background:
                          theme.colors.primary,
                      }}
                    >
                      {firstLetter}
                    </div>
                  )}

                  <div className="min-w-0">

                    <p
                      className="truncate font-semibold"
                      style={{
                        color:
                          theme.colors.text,
                      }}
                    >
                      {userName}
                    </p>

                    <p
                      className="truncate text-xs"
                      style={{
                        color:
                          theme.colors.secondaryText,
                      }}
                    >
                      {userEmail}
                    </p>

                  </div>

                </div>

              </div>

              {/* Profile */}

              <button
                type="button"
                onClick={() => {
                  setShowProfile(false);
                  navigate("/settings");
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm transition hover:opacity-80"
                style={{
                  color: theme.colors.text,
                }}
              >
                <User size={18} />
                Profile & Settings
              </button>

              {/* Logout */}

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition hover:bg-red-500/10"
                style={{
                  color: "#EF4444",
                }}
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;