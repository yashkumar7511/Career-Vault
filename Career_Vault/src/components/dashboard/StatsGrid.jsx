import {
  Briefcase,
  CalendarCheck,
  BadgeCheck,
  Heart,
} from "lucide-react";

import StatsCard from "./StatsCard";
import { useApplications } from "../../context/ApplicationContext";

const StatsGrid = () => {
  const { stats } = useApplications();

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      <StatsCard
        title="Applications"
        value={stats.applications}
        icon={Briefcase}
        color="#6366F1"
      />

      <StatsCard
        title="Interviews"
        value={stats.interviews}
        icon={CalendarCheck}
        color="#3B82F6"
      />

      <StatsCard
        title="Offers"
        value={stats.offers}
        icon={BadgeCheck}
        color="#10B981"
      />

      <StatsCard
        title="Wishlist"
        value={stats.wishlist}
        icon={Heart}
        color="#EC4899"
      />

    </div>
  );
};

export default StatsGrid;