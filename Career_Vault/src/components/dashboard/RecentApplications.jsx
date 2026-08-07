import { getRecentApplications } from "../../services/applicationService";
import ApplicationItem from "./ApplicationItem";
import { useTheme } from "../../context/ThemeContext";

const applications = getRecentApplications();
const RecentApplications = () => {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-3xl border p-6"
      style={{
        background: theme.colors.card,
        borderColor: theme.colors.border,
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2
          className="text-2xl font-bold"
          style={{
            color: theme.colors.text,
          }}
        >
          Recent Applications
        </h2>

        <button
          className="font-medium"
          style={{
            color: theme.colors.primary,
          }}
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {applications.map((application) => (
          <ApplicationItem
            key={application.id}
            application={application}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;