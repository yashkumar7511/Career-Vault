import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      company: "Adobe",
      role: "Frontend Developer",
      location: "Noida",
      workMode: "Hybrid",
      salary: "14 LPA",
      skills: ["React", "JavaScript", "CSS"],
      priority: "High",
      jobUrl: "https://adobe.com",
      addedDate: "2026-08-12",
      notes: "Good frontend opportunity",
    },
    {
      id: 2,
      company: "Netflix",
      role: "UI Engineer",
      location: "Remote",
      workMode: "Remote",
      salary: "20 LPA",
      skills: ["React", "TypeScript", "CSS"],
      priority: "Medium",
      jobUrl: "https://netflix.com",
      addedDate: "2026-08-10",
      notes: "Check requirements before applying",
    },
    {
      id: 3,
      company: "Uber",
      role: "Software Engineer",
      location: "Bengaluru",
      workMode: "Onsite",
      salary: "18 LPA",
      skills: ["React", "Node.js", "Git"],
      priority: "Low",
      jobUrl: "https://uber.com",
      addedDate: "2026-08-08",
      notes: "",
    },
  ]);

  const addWishlist = (job) => {
    const newJob = {
      ...job,
      id: Date.now(),
      addedDate:
        job.addedDate ||
        new Date().toISOString().split("T")[0],
    };

    setWishlist((prev) => [newJob, ...prev]);
  };

  const updateWishlist = (id, updatedJob) => {
    setWishlist((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,
              ...updatedJob,
            }
          : job
      )
    );
  };

  const deleteWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((job) => job.id !== id)
    );
  };

  const getWishlistItem = (id) => {
    return wishlist.find((job) => job.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addWishlist,
        updateWishlist,
        deleteWishlist,
        getWishlistItem,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};