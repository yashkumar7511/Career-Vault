import StatsGrid from "./StatsGrid";
import ApplicationChart from "./ApplicationChart";
import RecentApplications from "./RecentApplications";
import StatusChart from "./StatusChart";
import UpcomingInterviews from "./UpcomingInterviews";
import QuickActions from "./QuickActions";
import UpcomingDeadlines from "./UpcomingDeadlines";

const DashboardLayout = () => {
  return (
    <div className="space-y-8">

      {/* Stats */}
      <StatsGrid />

      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ApplicationChart />
        </div>

        <div>
          <RecentApplications />
        </div>

      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        <div>
          <StatusChart />
        </div>

        <div className="xl:col-span-2">
          <UpcomingInterviews />
        </div>

      </div>
      {/* Row 3 */}

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        <div>
            <QuickActions />
        </div>

        <div className="xl:col-span-2">
            <UpcomingDeadlines />
        </div>

        </div>

    </div>
  );
};

export default DashboardLayout;