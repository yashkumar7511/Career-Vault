import { createContext, useContext, useMemo, useState } from "react";
import { recentApplications } from "../data/dashboardData";

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState(recentApplications);

  // ADD APPLICATION
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

  // UPDATE APPLICATION
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

  // DELETE APPLICATION
  const deleteApplication = (id) => {
    setApplications((prev) =>
      prev.filter(
        (application) => application.id !== id
      )
    );
  };

  // LIVE STATISTICS
  const stats = useMemo(() => {
    return {
      applications: applications.length,

      interviews: applications.filter(
        (application) =>
          application.status === "Interview"
      ).length,

      offers: applications.filter(
        (application) =>
          application.status === "Offer"
      ).length,

      rejected: applications.filter(
        (application) =>
          application.status === "Rejected"
      ).length,

      applied: applications.filter(
        (application) =>
          application.status === "Applied"
      ).length,

       wishlist: applications.filter(
      (application) =>
        application.status === "Wishlist"
    ).len

    };
  }, [applications]);

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        stats,
        addApplication,
        updateApplication,
        deleteApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      "useApplications must be used inside ApplicationProvider"
    );
  }

  return context;
};