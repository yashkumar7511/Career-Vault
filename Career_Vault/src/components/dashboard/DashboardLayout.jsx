import StatsGrid from "./StatsGrid";
import ApplicationChart from "./ApplicationChart";

const DashboardLayout = () => {
  return (
    <div className="space-y-8">

      <StatsGrid />

      <ApplicationChart />

    </div>
  );
};

export default DashboardLayout;