import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const emptyForm = {
  company: "",
  role: "",
  location: "",
  workMode: "Remote",
  salary: "",
  skills: "",
  priority: "Medium",
  jobUrl: "",
  notes: "",
};

const WishlistModal = ({
  isOpen,
  onClose,
  onSave,
  editingJob,
}) => {
  const { theme } = useTheme();

  const [formData, setFormData] =
    useState(emptyForm);

  useEffect(() => {
    if (editingJob) {
      setFormData({
        company: editingJob.company || "",
        role: editingJob.role || "",
        location: editingJob.location || "",
        workMode:
          editingJob.workMode || "Remote",
        salary: editingJob.salary || "",
        skills:
          Array.isArray(editingJob.skills)
            ? editingJob.skills.join(", ")
            : "",
        priority:
          editingJob.priority || "Medium",
        jobUrl: editingJob.jobUrl || "",
        notes: editingJob.notes || "",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [editingJob, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    });

    onClose();
  };

  const inputStyle = {
    background: theme.colors.background,
    borderColor: theme.colors.border,
    color: theme.colors.text,
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="
            w-full
            max-w-2xl
            max-h-[90vh]
            overflow-y-auto
            rounded-3xl
            border
            p-6
            shadow-2xl
            sm:p-8
          "
          style={{
            background: theme.colors.card,
            borderColor: theme.colors.border,
          }}
        >
          {/* Header */}

          <div className="mb-8 flex items-start justify-between">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{
                  color: theme.colors.text,
                }}
              >
                {editingJob
                  ? "Edit Wishlist Job"
                  : "Add to Wishlist"}
              </h2>

              <p
                className="mt-1 text-sm"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Save a job opportunity for later.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl p-2"
              style={{
                background: theme.colors.background,
              }}
            >
              <X
                size={21}
                color={theme.colors.text}
              />
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {/* Company */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Company
              </label>

              <input
                required
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Google"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Role */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Job Role
              </label>

              <input
                required
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Frontend Developer"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Location */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Location
              </label>

              <input
                required
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Bengaluru"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Work Mode */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Work Mode
              </label>

              <select
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              >
                <option>Remote</option>
                <option>Hybrid</option>
                <option>Onsite</option>
              </select>
            </div>

            {/* Salary */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Salary
              </label>

              <input
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="18 LPA"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Priority */}

            <div>
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Priority
              </label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            {/* Skills */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Skills
              </label>

              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="React, JavaScript, Tailwind"
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Job URL */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Job URL
              </label>

              <input
                type="url"
                name="jobUrl"
                value={formData.jobUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Notes */}

            <div className="sm:col-span-2">
              <label
                className="mb-2 block text-sm font-medium"
                style={{
                  color: theme.colors.text,
                }}
              >
                Notes
              </label>

              <textarea
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add notes..."
                className="w-full resize-none rounded-xl border px-4 py-3 outline-none"
                style={inputStyle}
              />
            </div>

            {/* Buttons */}

            <div
              className="
                sm:col-span-2
                mt-3
                flex
                justify-end
                gap-3
                border-t
                pt-6
              "
              style={{
                borderColor: theme.colors.border,
              }}
            >
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border px-5 py-3 font-medium"
                style={{
                  borderColor: theme.colors.border,
                  background: theme.colors.background,
                  color: theme.colors.text,
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl px-5 py-3 font-semibold text-white"
                style={{
                  background: theme.colors.primary,
                }}
              >
                {editingJob
                  ? "Save Changes"
                  : "Add to Wishlist"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default WishlistModal;