/* Navbar.jsx */
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTheme from "../hooks/useTheme";
import "./Navbar.css";
import logo from "../assets/logo-nobg-onlytext.png";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const { toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <nav className="section container navbar">
      <div className="logo">
        <img src={logo} alt="Elyon Studios Logo" className="logo-image" />
      </div>
      <div className="rightside">
        <ul className="nav-links">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/">{t("nav.home")}</Link>
          </li>
          <li className={`dropdown ${isActive("/servicios") ? "active" : ""}`}>
            <Link to="/servicios">{t("nav.services")}</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/servicios?service=recording">{t("services.recording.title")}</Link>
              </li>
              <li>
                <Link to="/servicios?service=composition">{t("services.composition.title")}</Link>
              </li>
              <li>
                <Link to="/servicios?service=coaching">{t("services.coaching.title")}</Link>
              </li>
            </ul>
          </li>
          <li className={isActive("/portfolio") ? "active" : ""}>
            <Link to="/portfolio">{t("nav.portfolio")}</Link>
          </li>
          <li className={isActive("/sobremi") ? "active" : ""}>
            <Link to="/sobremi">{t("nav.about")}</Link>
          </li>
          <li className={`dropdown ${isActive("/media") ? "active" : ""}`}>
            <Link to="/media">{t("nav.media")}</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog">{t("media.blog")}</Link>
              </li>
            </ul>
          </li>
          <li className={isActive("/contacto") ? "active" : ""}>
            <Link to="/contacto">{t("nav.contact")}</Link>
          </li>
        </ul>
        <div className="layout-actions">
          <button onClick={toggleTheme} aria-label={t("aria.theme")}>🌓</button>
          <button onClick={toggleLanguage} aria-label={t("aria.language")}>🌐</button>
        </div>
      </div>
    </nav>
  );
}
