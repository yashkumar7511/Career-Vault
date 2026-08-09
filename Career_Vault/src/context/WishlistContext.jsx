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

const WishlistContext = createContext(null);

export const WishlistProvider = ({
  children,
}) => {
  const {
    user,
    loading: authLoading,
  } = useAuth();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  /*
   * Firestore path:
   *
   * users/{userId}/wishlist
   */

  useEffect(() => {
    // Wait for Firebase Authentication
    if (authLoading) {
      return;
    }

    // User is logged out
    if (!user) {
      setWishlist([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const wishlistRef = collection(
      db,
      "users",
      user.uid,
      "wishlist"
    );

    /*
     * Listen for real-time wishlist changes
     */

    const unsubscribe = onSnapshot(
      wishlistRef,
      (snapshot) => {
        const wishlistData =
          snapshot.docs.map((document) => ({
            ...document.data(),
            id: document.id,
          }));

        /*
         * Newest items first
         */

        wishlistData.sort((a, b) => {
          const dateA =
            a.createdAt?.toMillis?.() ||
            new Date(
              a.addedDate || 0
            ).getTime() ||
            0;

          const dateB =
            b.createdAt?.toMillis?.() ||
            new Date(
              b.addedDate || 0
            ).getTime() ||
            0;

          return dateB - dateA;
        });

        setWishlist(wishlistData);
        setLoading(false);
      },
      (error) => {
        console.error(
          "Error loading wishlist:",
          error
        );

        setWishlist([]);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [user, authLoading]);

  /*
   * ADD WISHLIST
   */

  const addWishlist = async (job) => {
    if (!user) {
      throw new Error(
        "You must be logged in to add a wishlist job."
      );
    }

    try {
      const wishlistRef = collection(
        db,
        "users",
        user.uid,
        "wishlist"
      );

      const wishlistItemRef = doc(
        wishlistRef
      );

      const newJob = {
        ...job,
        id: wishlistItemRef.id,
        addedDate:
          job.addedDate ||
          new Date()
            .toISOString()
            .split("T")[0],
        createdAt: serverTimestamp(),
      };

      await setDoc(
        wishlistItemRef,
        newJob
      );

      return newJob;
    } catch (error) {
      console.error(
        "Error adding wishlist job:",
        error
      );

      throw error;
    }
  };

  /*
   * UPDATE WISHLIST
   */

  const updateWishlist = async (
    id,
    updatedJob
  ) => {
    if (!user) {
      throw new Error(
        "You must be logged in to update a wishlist job."
      );
    }

    try {
      const wishlistItemRef = doc(
        db,
        "users",
        user.uid,
        "wishlist",
        id
      );

      await setDoc(
        wishlistItemRef,
        updatedJob,
        {
          merge: true,
        }
      );
    } catch (error) {
      console.error(
        "Error updating wishlist job:",
        error
      );

      throw error;
    }
  };

  /*
   * DELETE WISHLIST
   */

  const deleteWishlist = async (id) => {
    if (!user) {
      throw new Error(
        "You must be logged in to delete a wishlist job."
      );
    }

    try {
      const wishlistItemRef = doc(
        db,
        "users",
        user.uid,
        "wishlist",
        id
      );

      await deleteDoc(
        wishlistItemRef
      );
    } catch (error) {
      console.error(
        "Error deleting wishlist job:",
        error
      );

      throw error;
    }
  };

  /*
   * CLEAR ALL WISHLIST
   */

  const clearWishlist = async () => {
    if (!user) {
      throw new Error(
        "You must be logged in to clear wishlist."
      );
    }

    try {
      const wishlistRef = collection(
        db,
        "users",
        user.uid,
        "wishlist"
      );

      const snapshot = await getDocs(
        wishlistRef
      );

      const deletePromises =
        snapshot.docs.map((document) =>
          deleteDoc(document.ref)
        );

      await Promise.all(
        deletePromises
      );
    } catch (error) {
      console.error(
        "Error clearing wishlist:",
        error
      );

      throw error;
    }
  };

  /*
   * GET SINGLE WISHLIST ITEM
   */

  const getWishlistItem = (id) => {
    return wishlist.find(
      (job) => job.id === id
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        loading,
        addWishlist,
        updateWishlist,
        deleteWishlist,
        clearWishlist,
        getWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};