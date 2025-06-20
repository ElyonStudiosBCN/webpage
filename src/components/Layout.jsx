/* Layout.jsx */
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header className="section container layout-header">
        <Navbar />
      </header>
      <main className="section container main-content">
        <Outlet />
      </main>
      <Footer /> {/* 👈 Aquí va el footer */}
    </>
  );
}
