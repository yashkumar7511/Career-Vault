import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  const { theme } = useTheme();

  // Wait for Firebase to determine auth state
  if (loading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{
          background: theme.colors.background,
          color: theme.colors.text,
        }}
      >
        <div className="text-center">
          <div
            className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"
            style={{
              borderColor: theme.colors.primary,
              borderTopColor: "transparent",
            }}
          />

          <p
            className="text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Loading Career Vault...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in
  return <Outlet />;
};

export default ProtectedRoute;