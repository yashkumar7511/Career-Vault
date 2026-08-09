import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import Companies from "../pages/Companies";
import Analytics from "../pages/Analytics";
import Calendar from "../pages/Calendar";
import Wishlist from "../pages/Wishlist";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Login */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* Main Application */}

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/applications"
          element={<Applications />}
        />

        <Route
          path="/companies"
          element={<Companies />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/calendar"
          element={<Calendar />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      {/* 404 */}

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
};

export default AppRoutes;