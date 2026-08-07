import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaChartLine,
  FaCalendarAlt,
  FaHeart,
  FaCog,
} from "react-icons/fa";

const navItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: FaHome,
  },
  {
    title: "Applications",
    path: "/applications",
    icon: FaBriefcase,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: FaChartLine,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: FaCalendarAlt,
  },
  {
    title: "Wishlist",
    path: "/wishlist",
    icon: FaHeart,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: FaCog,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden md:flex w-72 flex-col bg-slate-950 border-r border-slate-800">

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-bold text-orange-500">
          Career Vault
        </h1>

        <p className="mt-2 text-slate-400">
          Track. Prepare. Get Hired.
        </p>

      </div>

      <nav className="flex flex-col gap-2 p-5">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-5 py-4 text-lg transition-all duration-300 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {item.title}
            </NavLink>
          );
        })}

      </nav>

    </aside>
  );
};

export default Sidebar;