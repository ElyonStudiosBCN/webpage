// src/main.jsx
import "./i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router"; // Asegúrate de importar esto
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
