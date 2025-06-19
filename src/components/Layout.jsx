// src/components/Layout.jsx
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom"; // <- importante
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="main-content">
        <Outlet /> {/* Aquí se cargan las páginas */}
      </main>
    </>
  );
}
