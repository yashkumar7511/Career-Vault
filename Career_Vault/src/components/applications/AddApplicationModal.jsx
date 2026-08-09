import { useState } from "react";
import { X, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

const AddApplicationModal = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const { addApplication } = useApplications();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    location: "",
    status: "Applied",
    workMode: "Remote",
    salary: "",
    appliedDate: "",
    skills: "",
    jobUrl: "",
    notes: "",
    interviewDate: "",
    interviewTime: "",
  });

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

    const newApplication = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    addApplication(newApplication);

    setFormData({
      company: "",
      role: "",
      location: "",
      status: "Applied",
      workMode: "Remote",
      salary: "",
      appliedDate: "",
      skills: "",
      jobUrl: "",
      notes: "",
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
          className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border p-6 shadow-2xl sm:p-8"
          style={{
            background: theme.colors.card,
            borderColor: theme.colors.border,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}

          <div className="flex items-start justify-between">
            <div>
              <h2
                className="text-2xl font-bold"
                style={{ color: theme.colors.text }}
              >
                Add Application
              </h2>

              <p
                className="mt-1 text-sm"
                style={{ color: theme.colors.secondaryText }}
              >
                Add a new job application to your tracker.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-2 transition hover:scale-110"
              style={{
                background: theme.colors.background,
              }}
            >
              <X size={22} color={theme.colors.text} />
            </button>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit}>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Company */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Company
                </label>

                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Role */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Job Role
                </label>

                <input
                  required
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Location */}

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Location
                </label>

                <input
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Bengaluru"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Status */}

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </div>

              {/* Work Mode */}

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
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
                  style={{ color: theme.colors.text }}
                >
                  Salary
                </label>

                <input
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. 18 LPA"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Applied Date */}

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Applied Date
                </label>

                <input
                  required
                  name="appliedDate"
                  value={formData.appliedDate}
                  onChange={handleChange}
                  type="date"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Interview Date */}

<div>
  <label
    className="mb-2 block text-sm font-medium"
    style={{ color: theme.colors.text }}
  >
    Interview Date
  </label>

  <input
    name="interviewDate"
    value={formData.interviewDate}
    onChange={handleChange}
    type="date"
    className="w-full rounded-xl border px-4 py-3 outline-none"
    style={inputStyle}
  />
</div>

{/* Interview Time */}

<div>
  <label
    className="mb-2 block text-sm font-medium"
    style={{ color: theme.colors.text }}
  >
    Interview Time
  </label>

  <input
    name="interviewTime"
    value={formData.interviewTime}
    onChange={handleChange}
    type="time"
    className="w-full rounded-xl border px-4 py-3 outline-none"
    style={inputStyle}
  />
</div>

              {/* Skills */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Skills
                </label>

                <input
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. React, JavaScript, Tailwind"
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />

                <p
                  className="mt-2 text-xs"
                  style={{ color: theme.colors.secondaryText }}
                >
                  Separate multiple skills with commas.
                </p>
              </div>

              {/* Job URL */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Job Link
                </label>

                <input
                  name="jobUrl"
                  value={formData.jobUrl}
                  onChange={handleChange}
                  type="url"
                  placeholder="https://..."
                  className="w-full rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>

              {/* Notes */}

              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-sm font-medium"
                  style={{ color: theme.colors.text }}
                >
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add any notes about this application..."
                  className="w-full resize-none rounded-xl border px-4 py-3 outline-none"
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Buttons */}

            <div
              className="mt-8 flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end"
              style={{ borderColor: theme.colors.border }}
            >
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border px-5 py-3 font-medium"
                style={{
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                  background: theme.colors.background,
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
                style={{
                  background: theme.colors.primary,
                }}
              >
                <Plus size={18} />
                Add Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddApplicationModal;