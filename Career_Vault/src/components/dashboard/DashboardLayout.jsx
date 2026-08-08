import StatsGrid from "./StatsGrid";
import ApplicationChart from "./ApplicationChart";
import RecentApplications from "./RecentApplications";

const DashboardLayout = () => {
  return (
    <div className="space-y-8">

      {/* Stats */}

      <StatsGrid />

      {/* Application Overview + Recent Applications */}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <ApplicationChart />
        </div>

        <div>
          <RecentApplications />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;