import { useState } from "react";
import {
  MapPin,
  CalendarDays,
  Pencil,
  Trash2,
  Eye,
  Briefcase,
  IndianRupee,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

import StatusBadge from "./StatusBadge";
import ApplicationDetailsDrawer from "./ApplicationDetailsDrawer";
import EditApplicationModal from "./EditApplicationModal";
import DeleteModal from "./DeleteModal";

const ApplicationRow = ({ application }) => {
  const { theme } = useTheme();
  const { deleteApplication } = useApplications();

  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    deleteApplication(application.id);
    setShowDelete(false);
  };

  return (
    <>
      {/* Application Card */}

      <div
        className="
          rounded-3xl
          border
          p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
        style={{
          background: theme.colors.card,
          borderColor: theme.colors.border,
        }}
      >
        {/* Top */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2
              className="text-xl font-bold"
              style={{
                color: theme.colors.text,
              }}
            >
              {application.company}
            </h2>

            <p
              className="mt-1"
              style={{
                color: theme.colors.secondaryText,
              }}
            >
              {application.role}
            </p>
          </div>

          <StatusBadge status={application.status} />
        </div>

        {/* Details */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3
            text-sm
          "
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {application.location}
          </span>

          {application.workMode && (
            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              {application.workMode}
            </span>
          )}

          {application.salary && (
            <span className="flex items-center gap-2">
              <IndianRupee size={16} />
              {application.salary}
            </span>
          )}

          <span className="flex items-center gap-2">
            <CalendarDays size={16} />
            {application.appliedDate || application.date}
          </span>
        </div>

        {/* Skills */}

        {application.skills &&
          application.skills.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {application.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    background: theme.colors.background,
                    borderColor: theme.colors.border,
                    color: theme.colors.secondaryText,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

        {/* Actions */}

        <div
          className="
            mt-6
            flex
            justify-end
            gap-3
            border-t
            pt-5
          "
          style={{
            borderColor: theme.colors.border,
          }}
        >
          {/* View */}

          <button
            onClick={() => setShowDetails(true)}
            className="rounded-xl p-3 transition hover:scale-110"
            style={{
              background: theme.colors.background,
            }}
            title="View Details"
          >
            <Eye
              size={18}
              color={theme.colors.text}
            />
          </button>

          {/* Edit */}

          <button
            onClick={() => setShowEdit(true)}
            className="rounded-xl p-3 transition hover:scale-110"
            style={{
              background: theme.colors.background,
            }}
            title="Edit Application"
          >
            <Pencil
              size={18}
              color={theme.colors.text}
            />
          </button>

          {/* Delete */}

          <button
            onClick={() => setShowDelete(true)}
            className="rounded-xl p-3 transition hover:scale-110"
            style={{
              background: "#EF444420",
            }}
            title="Delete Application"
          >
            <Trash2
              size={18}
              color="#EF4444"
            />
          </button>
        </div>
      </div>

      {/* View Details */}

      {showDetails && (
        <ApplicationDetailsDrawer
          application={application}
          onClose={() => setShowDetails(false)}
        />
      )}

      {/* Edit Modal */}

      <EditApplicationModal
        isOpen={showEdit}
        onClose={() => setShowEdit(false)}
        application={application}
      />

      {/* Delete Modal */}

      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ApplicationRow;