import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Portfolio from "./pages/Portfolio";
import SobreMi from "./pages/SobreMi";
import Media from "./pages/Media";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Post from "./pages/Post"; // 👈 asegúrate de tener este componente
import Layout from "./components/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="sobremi" element={<SobreMi />} />
          <Route path="media" element={<Media />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="blog" element={<Blog />} />
          {/* Ruta para post individual */}
          <Route path="blog/:slug" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
