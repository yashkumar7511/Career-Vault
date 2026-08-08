import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

import ApplicationForm from "./ApplicationForm";

const EditApplicationModal = ({
  isOpen,
  onClose,
  application,
}) => {
  const { theme } = useTheme();
  const { updateApplication } = useApplications();

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
  });

  useEffect(() => {
    if (application) {
      setFormData({
        company: application.company || "",
        role: application.role || "",
        location: application.location || "",
        status: application.status || "Applied",
        workMode: application.workMode || "Remote",
        salary: application.salary || "",
        appliedDate: formatDateForInput(application.appliedDate),
        skills: Array.isArray(application.skills)
          ? application.skills.join(", ")
          : application.skills || "",
        jobUrl: application.jobUrl || "",
        notes: application.notes || "",
      });
    }
  }, [application]);

  if (!isOpen || !application) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedApplication = {
      ...formData,
      skills: formData.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    };

    updateApplication(
      application.id,
      updatedApplication
    );

    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <>
      {/* Overlay */}

      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="
            max-h-[90vh]
            w-full
            max-w-3xl
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
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}

          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2
                className="text-3xl font-bold"
                style={{
                  color: theme.colors.text,
                }}
              >
                Edit Application
              </h2>

              <p
                className="mt-1"
                style={{
                  color: theme.colors.secondaryText,
                }}
              >
                Update your application details.
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl p-3 transition hover:scale-105"
              style={{
                background: theme.colors.background,
              }}
            >
              <X
                size={22}
                color={theme.colors.text}
              />
            </button>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit}>
            <ApplicationForm
              formData={formData}
              handleChange={handleChange}
            />

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-col-reverse
                gap-3
                border-t
                pt-6
                sm:flex-row
                sm:justify-end
              "
              style={{
                borderColor: theme.colors.border,
              }}
            >
              <button
                type="button"
                onClick={handleCancel}
                className="rounded-xl border px-6 py-3 font-medium transition hover:-translate-y-0.5"
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
                className="
                  rounded-xl
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:-translate-y-0.5
                "
                style={{
                  background: theme.colors.primary,
                }}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

/* Convert existing date into YYYY-MM-DD
   format required by <input type="date">
*/
const formatDateForInput = (date) => {
  if (!date) return "";

  // Already in YYYY-MM-DD format
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return date;
  }

  // Handle dates like "12 Aug 2026"
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  const year = parsedDate.getFullYear();
  const month = String(
    parsedDate.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    parsedDate.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default EditApplicationModal;