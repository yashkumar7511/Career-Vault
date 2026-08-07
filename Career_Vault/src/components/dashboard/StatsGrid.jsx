import {
  Briefcase,
  CalendarCheck,
  BadgeCheck,
  Heart,
} from "lucide-react";

import StatsCard from "./StatsCard";

const StatsGrid = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Applications"
        value="32"
        change="+12%"
        icon={Briefcase}
        color="#6366F1"
      />

      <StatsCard
        title="Interviews"
        value="8"
        change="+20%"
        icon={CalendarCheck}
        color="#3B82F6"
      />

      <StatsCard
        title="Offers"
        value="4"
        change="+8%"
        icon={BadgeCheck}
        color="#10B981"
      />

      <StatsCard
        title="Wishlist"
        value="18"
        change="+15%"
        icon={Heart}
        color="#EC4899"
      />

    </div>
  );
};

export default StatsGrid;