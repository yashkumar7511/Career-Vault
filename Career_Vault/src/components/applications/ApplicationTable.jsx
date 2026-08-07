import { recentApplications } from "../../data/dashboardData";
import StatusBadge from "./StatusBadge";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropdown";
import ApplicationRow from "./ApplicationRow";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

const ApplicationTable = () => {
  const applications = recentApplications;

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <SearchBar />

        <div className="flex flex-wrap gap-3">
          <FilterBar />
          <SortDropdown />
        </div>
      </div>

      {/* Application List */}
      <div className="space-y-4">
        {applications.length > 0 ? (
          applications.map((application) => (
            <ApplicationRow
              key={application.id}
              application={application}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>

      {/* Pagination */}
      {applications.length > 0 && <Pagination />}
    </div>
  );
};

export default ApplicationTable;