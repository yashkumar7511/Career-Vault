import {
  LayoutDashboard,
  Briefcase,
  Building2,
  BarChart3,
  CalendarDays,
  Heart,
  Settings,
} from "lucide-react";

import Logo from "../common/Logo";
import NavItem from "../common/NavItem";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {

  const { theme } = useTheme();

  return (

    <aside
      className="
      w-72
      border-r
      transition-all
      duration-300
      "
      style={{
        background: theme.colors.sidebar,
        borderColor: theme.colors.border,
      }}
    >

      <Logo />

      <div className="mt-8">

        <NavItem
          to="/"
          icon={LayoutDashboard}
          title="Dashboard"
        />

        <NavItem
          to="/applications"
          icon={Briefcase}
          title="Applications"
        />

        <NavItem
          to="/companies"
          icon={Building2}
          title="Companies"
        />

        <NavItem
          to="/analytics"
          icon={BarChart3}
          title="Analytics"
        />

        <NavItem
          to="/calendar"
          icon={CalendarDays}
          title="Calendar"
        />

        <NavItem
          to="/wishlist"
          icon={Heart}
          title="Wishlist"
        />

        <NavItem
          to="/settings"
          icon={Settings}
          title="Settings"
        />

      </div>

      <div
        className="mx-5 mt-12 rounded-3xl p-6"
        style={{
          background: theme.colors.card,
          border: `1px solid ${theme.colors.border}`,
        }}
      >

        <h3
          className="font-semibold"
          style={{
            color: theme.colors.text,
          }}
        >
          Career Vault
        </h3>

        <p
          className="mt-2 text-sm"
          style={{
            color: theme.colors.secondaryText,
          }}
        >
          Version 1.0
        </p>

      </div>

    </aside>

  );
};

export default Sidebar;