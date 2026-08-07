import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const NavItem = ({ to, icon: Icon, title }) => {

  const { theme } = useTheme();

  return (
    <NavLink to={to}>

      {({ isActive }) => (

        <div
          className="
          mx-4
          mb-2
          flex
          items-center
          gap-4
          rounded-2xl
          px-5
          py-4
          transition-all
          duration-300
          hover:scale-[1.02]
          "
          style={{
            background: isActive
              ? theme.colors.primary
              : "transparent",

            color: isActive
              ? "#fff"
              : theme.colors.secondaryText,

            boxShadow: isActive
              ? "0 12px 30px rgba(99,102,241,.35)"
              : "none",
          }}
        >

          <Icon size={22} />

          <span className="font-medium">
            {title}
          </span>

        </div>

      )}

    </NavLink>
  );
};

export default NavItem;