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
       
        icon={Briefcase}
        color="#6366F1"
      />

      <StatsCard
        title="Interviews"
        value="8"
       
        icon={CalendarCheck}
        color="#3B82F6"
      />

      <StatsCard
        title="Offers"
        value="4"
     
        icon={BadgeCheck}
        color="#10B981"
      />

      <StatsCard
        title="Wishlist"
        value="18"
        
        icon={Heart}
        color="#EC4899"
      />

    </div>
  );
};

export default StatsGrid;