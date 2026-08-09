import { useState } from "react";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Login = () => {
  const { theme } = useTheme();
  const { loginWithGoogle } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      await loginWithGoogle();

      navigate("/");
    } catch (error) {
      console.error(error);

      setError(
        "Unable to sign in with Google. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-6"
      style={{
        background: theme.colors.background,
      }}
    >
      <div
        className="w-full max-w-md rounded-3xl border p-8 shadow-xl"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        {/* Logo */}

        <div className="mb-8 text-center">
          <div
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-bold text-white"
            style={{
              background: theme.colors.primary,
            }}
          >
            CV
          </div>

          <h1
            className="text-3xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            Career Vault
          </h1>

          <p
            className="mt-2"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Track. Prepare. Get Hired.
          </p>
        </div>

        {/* Welcome */}

        <div className="mb-6 text-center">
          <h2
            className="text-xl font-semibold"
            style={{
              color: theme.colors.text,
            }}
          >
            Welcome back
          </h2>

          <p
            className="mt-1 text-sm"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Sign in to continue to Career Vault.
          </p>
        </div>

        {/* Error */}

        {error && (
          <div
            className="mb-5 rounded-xl border p-3 text-sm"
            style={{
              color: "#EF4444",
              borderColor: "#EF444460",
              background: "#EF444410",
            }}
          >
            {error}
          </div>
        )}

        {/* Google Button */}

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          style={{
            background: theme.colors.primary,
          }}
        >
          <LogIn size={20} />

          {loading
            ? "Signing in..."
            : "Continue with Google"}
        </button>

        {/* Footer */}

        <p
          className="mt-6 text-center text-xs"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          By continuing, you agree to use Career Vault
          responsibly.
        </p>
      </div>
    </div>
  );
};

export default Login;