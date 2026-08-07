import { createContext, useContext, useState } from "react";

import {
  getTheme,
  toggleTheme,
} from "../services/themeService";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  const switchTheme = () => {
    setTheme((prev) => toggleTheme(prev));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};