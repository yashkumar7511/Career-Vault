import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useApplications } from "../../context/ApplicationContext";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import SortDropdown from "./SortDropdown";
import ApplicationRow from "./ApplicationRow";
import EmptyState from "./EmptyState";


const ApplicationTable = () => {
  const { theme } = useTheme();
  const { applications } = useApplications();

  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const processedApplications = useMemo(() => {
    const search = searchTerm.toLowerCase().trim();

    // Search + Filter
    const filtered = applications.filter((application) => {
      const matchesSearch =
        application.company
          ?.toLowerCase()
          .includes(search) ||
        application.role
          ?.toLowerCase()
          .includes(search) ||
        application.location
          ?.toLowerCase()
          .includes(search);

      const matchesStatus =
        status === "All" ||
        application.status === status;

      return matchesSearch && matchesStatus;
    });

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            getDateValue(b.appliedDate) -
            getDateValue(a.appliedDate)
          );

        case "oldest":
          return (
            getDateValue(a.appliedDate) -
            getDateValue(b.appliedDate)
          );

        case "companyAZ":
          return (a.company || "").localeCompare(
            b.company || ""
          );

        case "companyZA":
          return (b.company || "").localeCompare(
            a.company || ""
          );

        default:
          return 0;
      }
    });

    return sorted;
  }, [applications, searchTerm, status, sortBy]);

  return (
    <div className="space-y-6">

      {/* Top Controls */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search + Add */}

        <div className="flex flex-1 flex-col gap-3 sm:flex-row">

          {/* Search */}

          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2"
              color={theme.colors.secondaryText}
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              placeholder="Search applications..."
              className="
                w-full
                rounded-2xl
                border
                py-3
                pl-11
                pr-4
                outline-none
                transition
              "
              style={{
                background: theme.colors.card,
                borderColor: theme.colors.border,
                color: theme.colors.text,
              }}
            />
          </div>

          {/* Add Application */}

          <SearchBar />
        </div>

        {/* Filter + Sort */}

        <div className="flex flex-wrap gap-3">
          <FilterBar
            status={status}
            onStatusChange={setStatus}
          />

          <SortDropdown
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        </div>
      </div>

      {/* Application List */}

      <div className="space-y-4">
        {processedApplications.length > 0 ? (
          processedApplications.map((application) => (
            <ApplicationRow
              key={application.id}
              application={application}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>

    
    </div>
  );
};

const getDateValue = (date) => {
  if (!date) return 0;

  // YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return new Date(date).getTime();
  }

  // Dates such as "12 Aug 2026"
  const parsedDate = new Date(date);

  if (!Number.isNaN(parsedDate.getTime())) {
    return parsedDate.getTime();
  }

  return 0;
};

export default ApplicationTable;