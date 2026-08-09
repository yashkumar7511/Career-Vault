import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { useAuth } from "./AuthContext";

const ApplicationContext = createContext(null);

export const ApplicationProvider = ({ children }) => {
  const { user, loading: authLoading } = useAuth();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
   * Firestore path:
   *
   * users/{userId}/applications
   */

  useEffect(() => {
    // Firebase is still checking authentication
    if (authLoading) {
      return;
    }

    // User is not logged in
    if (!user) {
      setApplications([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const applicationsRef = collection(
      db,
      "users",
      user.uid,
      "applications"
    );

    /*
     * Listen for real-time changes
     */

    const unsubscribe = onSnapshot(
      applicationsRef,
      (snapshot) => {
        const applicationData = snapshot.docs.map(
          (document) => ({
            ...document.data(),
            id: document.id,
          })
        );

        /*
         * Sort newest applications first
         */

        applicationData.sort((a, b) => {
          const dateA =
            a.createdAt?.toMillis?.() ||
            new Date(
              a.appliedDate || 0
            ).getTime() ||
            0;

          const dateB =
            b.createdAt?.toMillis?.() ||
            new Date(
              b.appliedDate || 0
            ).getTime() ||
            0;

          return dateB - dateA;
        });

        setApplications(applicationData);
        setLoading(false);
      },
      (error) => {
        console.error(
          "Error loading applications:",
          error
        );

        setApplications([]);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user, authLoading]);

  /*
   * ADD APPLICATION
   */

  const addApplication = async (application) => {
    if (!user) {
      throw new Error(
        "You must be logged in to add an application."
      );
    }

    try {
      const applicationsRef = collection(
        db,
        "users",
        user.uid,
        "applications"
      );

      const applicationRef = doc(
        applicationsRef
      );

      const newApplication = {
        ...application,
        id: applicationRef.id,
        createdAt: serverTimestamp(),
      };

      await setDoc(
        applicationRef,
        newApplication
      );

      return newApplication;
    } catch (error) {
      console.error(
        "Error adding application:",
        error
      );

      throw error;
    }
  };

  /*
   * UPDATE APPLICATION
   */

  const updateApplication = async (
    id,
    updatedApplication
  ) => {
    if (!user) {
      throw new Error(
        "You must be logged in to update an application."
      );
    }

    try {
      const applicationRef = doc(
        db,
        "users",
        user.uid,
        "applications",
        id
      );

      await setDoc(
        applicationRef,
        updatedApplication,
        {
          merge: true,
        }
      );
    } catch (error) {
      console.error(
        "Error updating application:",
        error
      );

      throw error;
    }
  };

  /*
   * DELETE APPLICATION
   */

  const deleteApplication = async (id) => {
    if (!user) {
      throw new Error(
        "You must be logged in to delete an application."
      );
    }

    try {
      const applicationRef = doc(
        db,
        "users",
        user.uid,
        "applications",
        id
      );

      await deleteDoc(applicationRef);
    } catch (error) {
      console.error(
        "Error deleting application:",
        error
      );

      throw error;
    }
  };

  /*
   * DELETE ALL APPLICATIONS
   */

  const clearApplications = async () => {
    if (!user) {
      throw new Error(
        "You must be logged in to delete applications."
      );
    }

    try {
      const applicationsRef = collection(
        db,
        "users",
        user.uid,
        "applications"
      );

      const snapshot = await getDocs(
        applicationsRef
      );

      const deletePromises =
        snapshot.docs.map((document) =>
          deleteDoc(document.ref)
        );

      await Promise.all(deletePromises);
    } catch (error) {
      console.error(
        "Error clearing applications:",
        error
      );

      throw error;
    }
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        loading,
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