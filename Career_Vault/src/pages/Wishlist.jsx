import { useState } from "react";
import {
  Heart,
  Plus,
  Search,
} from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import { useWishlist } from "../context/WishlistContext";
import { useApplications } from "../context/ApplicationContext";

import WishlistCard from "../components/wishlist/WishlistCard.jsx";
import WishlistModal from "../components/wishlist/WishlistModal.jsx";

const Wishlist = () => {
  const { theme } = useTheme();

  const {
    wishlist,
    addWishlist,
    updateWishlist,
    deleteWishlist,
  } = useWishlist();

  const { addApplication } =
    useApplications();

  const [search, setSearch] = useState("");
  const [priority, setPriority] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [editingJob, setEditingJob] =
    useState(null);

  const filteredWishlist = wishlist.filter(
    (job) => {
      const searchValue =
        `${job.company} ${job.role} ${job.location} ${job.skills?.join(" ")}`
          .toLowerCase();

      const matchesSearch =
        searchValue.includes(
          search.toLowerCase()
        );

      const matchesPriority =
        priority === "All" ||
        job.priority === priority;

      return (
        matchesSearch &&
        matchesPriority
      );
    }
  );

  const handleAdd = () => {
    setEditingJob(null);
    setShowModal(true);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setShowModal(true);
  };

  const handleSave = (job) => {
    if (editingJob) {
      updateWishlist(
        editingJob.id,
        job
      );
    } else {
      addWishlist(job);
    }
  };

  const handleDelete = (id) => {
    deleteWishlist(id);
  };

  const handleApply = (job) => {
    addApplication({
      company: job.company,
      role: job.role,
      location: job.location,
      status: "Applied",
      workMode: job.workMode,
      salary: job.salary,
      appliedDate:
        new Date()
          .toISOString()
          .split("T")[0],
      skills: job.skills,
      jobUrl: job.jobUrl,
      notes: job.notes,
      interviewDate: "",
      interviewTime: "",
    });

    deleteWishlist(job.id);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1
            className="flex items-center gap-3 text-3xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            <Heart
              size={32}
              color={theme.colors.primary}
            />
            Wishlist
          </h1>

          <p
            className="mt-1"
            style={{
              color: theme.colors.secondaryText,
            }}
          >
            Save and organize jobs you want
            to apply for.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:scale-105
          "
          style={{
            background: theme.colors.primary,
          }}
        >
          <Plus size={19} />
          Add to Wishlist
        </button>

      </div>

      {/* Controls */}

      <div
        className="rounded-3xl border p-5"
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        <div className="flex flex-col gap-4 md:flex-row">

          {/* Search */}

          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              color={theme.colors.secondaryText}
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search saved jobs..."
              className="w-full rounded-xl border py-3 pl-11 pr-4 outline-none"
              style={{
                background:
                  theme.colors.background,
                borderColor:
                  theme.colors.border,
                color: theme.colors.text,
              }}
            />
          </div>

          {/* Priority */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="rounded-xl border px-4 py-3 outline-none"
            style={{
              background:
                theme.colors.background,
              borderColor:
                theme.colors.border,
              color: theme.colors.text,
            }}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

        </div>
      </div>

      {/* Wishlist */}

      {filteredWishlist.length > 0 ? (
        <div className="space-y-4">
          {filteredWishlist.map((job) => (
            <WishlistCard
              key={job.id}
              job={job}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onApply={handleApply}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center rounded-3xl border py-24"
          style={{
            background: theme.colors.card,
            borderColor: theme.colors.border,
          }}
        >
          <div
            className="mb-6 rounded-full p-6"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            <Heart
              size={36}
              color="white"
            />
          </div>

          <h2
            className="text-2xl font-bold"
            style={{
              color: theme.colors.text,
            }}
          >
            No Jobs Saved Yet
          </h2>

          <p
            className="mt-3 max-w-md text-center"
            style={{
              color:
                theme.colors.secondaryText,
            }}
          >
            Save interesting opportunities here
            so you don't lose track of them.
          </p>

          <button
            type="button"
            onClick={handleAdd}
            className="mt-7 flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white"
            style={{
              background:
                theme.colors.primary,
            }}
          >
            <Plus size={18} />
            Add to Wishlist
          </button>
        </div>
      )}

      {/* Modal */}

      <WishlistModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingJob(null);
        }}
        onSave={handleSave}
        editingJob={editingJob}
      />

    </div>
  );
};

export default Wishlist;