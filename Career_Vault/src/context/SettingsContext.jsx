import {
  createContext,
  useContext,
} from "react";

import useLocalStorage from "../hooks/useLocalStorage";

const SettingsContext = createContext(null);

const defaultSettings = {
  name: "Yash",
  jobTitle: "Frontend Developer",
};

export const SettingsProvider = ({
  children,
}) => {
  const [settings, setSettings] =
    useLocalStorage(
      "careerVaultSettings",
      defaultSettings
    );

  const updateSettings = (updatedSettings) => {
    setSettings((prev) => ({
      ...prev,
      ...updatedSettings,
    }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context =
    useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider"
    );
  }

  return context;
};