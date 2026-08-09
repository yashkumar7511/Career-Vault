import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { useAuth } from "./AuthContext";

const SettingsContext = createContext(null);

const defaultSettings = {
  name: "Yash",
  jobTitle: "Frontend Developer",
};

export const SettingsProvider = ({
  children,
}) => {
  const {
    user,
    loading: authLoading,
  } = useAuth();

  const [settings, setSettings] =
    useState(defaultSettings);

  const [loading, setLoading] =
    useState(true);

  /*
   * Firestore path:
   *
   * users/{userId}/profile
   */

  useEffect(() => {
    // Wait until Firebase finishes checking authentication
    if (authLoading) {
      return;
    }

    // No logged-in user
    if (!user) {
      setSettings(defaultSettings);
      setLoading(false);
      return;
    }

    setLoading(true);

    const profileRef = doc(
      db,
      "users",
      user.uid,
      "profile",
      "settings"
    );

    /*
     * Listen for profile changes
     */

    const unsubscribe = onSnapshot(
      profileRef,
      async (snapshot) => {
        if (snapshot.exists()) {
          setSettings({
            ...defaultSettings,
            ...snapshot.data(),
          });
        } else {
          /*
           * First login:
           * Create default profile
           */

          const initialSettings = {
            name:
              user.displayName ||
              defaultSettings.name,

            jobTitle:
              defaultSettings.jobTitle,
          };

          try {
            await setDoc(
              profileRef,
              initialSettings
            );

            setSettings(initialSettings);
          } catch (error) {
            console.error(
              "Error creating profile:",
              error
            );

            setSettings(
              initialSettings
            );
          }
        }

        setLoading(false);
      },
      (error) => {
        console.error(
          "Error loading profile:",
          error
        );

        setSettings(defaultSettings);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user, authLoading]);

  /*
   * UPDATE PROFILE
   */

  const updateSettings = async (
    updatedSettings
  ) => {
    if (!user) {
      throw new Error(
        "You must be logged in to update your profile."
      );
    }

    try {
      const profileRef = doc(
        db,
        "users",
        user.uid,
        "profile",
        "settings"
      );

      await setDoc(
        profileRef,
        updatedSettings,
        {
          merge: true,
        }
      );
    } catch (error) {
      console.error(
        "Error updating profile:",
        error
      );

      throw error;
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        loading,
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