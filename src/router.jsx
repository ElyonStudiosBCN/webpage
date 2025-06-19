// src/router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Portfolio from "./pages/Portfolio";
import SobreMi from "./pages/SobreMi";
import Media from "./pages/Media";
import Contacto from "./pages/Contacto";
import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
