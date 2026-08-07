import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";
import { useTheme } from "../context/ThemeContext";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <main
      className="flex min-h-screen transition-all duration-300"
      style={{
        background: theme.colors.background,
      }}
    >
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default MainLayout;