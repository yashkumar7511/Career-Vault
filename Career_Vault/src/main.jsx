import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ApplicationProvider } from "./context/ApplicationContext";

import { ThemeProvider } from "./context/ThemeContext";
import { WishlistProvider } from "./context/WishlistContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ApplicationProvider>
          <WishlistProvider>
        <App />
        </WishlistProvider>
        </ApplicationProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);