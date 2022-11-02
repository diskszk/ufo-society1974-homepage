import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("app");

if (!container) {
  throw new Error("Can not find app root.");
}

createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
