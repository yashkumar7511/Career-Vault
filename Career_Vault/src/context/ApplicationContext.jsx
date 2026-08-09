import {
  createContext,
  useContext,
} from "react";

import { recentApplications } from "../data/dashboardData";
import useLocalStorage from "../hooks/useLocalStorage";

const ApplicationContext =
  createContext(null);

export const ApplicationProvider = ({
  children,
}) => {
  const [
    applications,
    setApplications,
  ] = useLocalStorage(
    "careerVaultApplications",
    recentApplications
  );

  const addApplication = (application) => {
    const newApplication = {
      ...application,
      id: Date.now(),
    };

    setApplications((prev) => [
      newApplication,
      ...prev,
    ]);
  };

  const updateApplication = (
    id,
    updatedApplication
  ) => {
    setApplications((prev) =>
      prev.map((application) =>
        application.id === id
          ? {
              ...application,
              ...updatedApplication,
            }
          : application
      )
    );
  };

  const deleteApplication = (id) => {
    setApplications((prev) =>
      prev.filter(
        (application) =>
          application.id !== id
      )
    );
  };

  const clearApplications = () => {
    setApplications([]);
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        updateApplication,
        deleteApplication,
        clearApplications,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () => {
  const context =
    useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      "useApplications must be used inside ApplicationProvider"
    );
  }

  return context;
};