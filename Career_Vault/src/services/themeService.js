import { lightTheme, darkTheme } from "../utils/theme";

const STORAGE_KEY = "career-vault-theme";

export const getTheme = () => {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) return lightTheme;

  return saved === "dark" ? darkTheme : lightTheme;
};

export const toggleTheme = (currentTheme) => {
  const nextTheme =
    currentTheme.mode === "light"
      ? darkTheme
      : lightTheme;

  localStorage.setItem(STORAGE_KEY, nextTheme.mode);

  return nextTheme;
};