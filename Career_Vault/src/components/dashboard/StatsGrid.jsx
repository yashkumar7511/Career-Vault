import {
  Briefcase,
  CalendarCheck,
  BadgeCheck,
  Heart,
} from "lucide-react";

import StatsCard from "./StatsCard";

import { useApplications } from "../../context/ApplicationContext";
import { useWishlist } from "../../context/WishlistContext";

const StatsGrid = () => {
  const { applications } = useApplications();
  const { wishlist } = useWishlist();

  const applicationCount = applications.length;

  const interviewCount = applications.filter(
    (application) =>
      application.status === "Interview"
  ).length;

  const offerCount = applications.filter(
    (application) =>
      application.status === "Offer"
  ).length;

  const wishlistCount = wishlist.length;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <StatsCard
        title="Applications"
        value={applicationCount}
        icon={Briefcase}
        color="#6366F1"
      />

      <StatsCard
        title="Interviews"
        value={interviewCount}
        icon={CalendarCheck}
        color="#3B82F6"
      />

      <StatsCard
        title="Offers"
        value={offerCount}
        icon={BadgeCheck}
        color="#10B981"
      />

      <StatsCard
        title="Wishlist"
        value={wishlistCount}
        icon={Heart}
        color="#EC4899"
      />

    </div>
  );
};

export default StatsGrid;