import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";
import { ApplicationProvider } from "./context/ApplicationContext";
import { WishlistProvider } from "./context/WishlistContext";
import { SettingsProvider } from "./context/SettingsContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <BrowserRouter>

      <ThemeProvider>

        <ApplicationProvider>

          <WishlistProvider>

           <SettingsProvider>

            <App />

            </SettingsProvider>

          </WishlistProvider>

        </ApplicationProvider>

      </ThemeProvider>

    </BrowserRouter>
  </React.StrictMode>
);