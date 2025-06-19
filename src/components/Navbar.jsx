import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // opcional si deseas estilos aparte

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎵 Elyon Studios</Link>
      </div>
      <ul className="nav-links">
        <li className={isActive("/") ? "active" : ""}>
          <Link to="/">Inicio</Link>
        </li>
        <li className={isActive("/servicios") ? "active" : ""}>
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className={isActive("/portfolio") ? "active" : ""}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className={isActive("/sobremi") ? "active" : ""}>
          <Link to="/sobremi">Sobre mí</Link>
        </li>
        <li className={isActive("/media") ? "active" : ""}>
          <Link to="/media">Media</Link>
        </li>
        <li className={isActive("/contacto") ? "active" : ""}>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}
