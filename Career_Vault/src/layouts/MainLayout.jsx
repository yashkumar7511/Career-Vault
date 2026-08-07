import { Outlet } from "react-router-dom";

import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

const MainLayout = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <div className="flex flex-1 flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="flex-1 p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;