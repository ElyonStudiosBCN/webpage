import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTheme from "../hooks/useTheme";
import { useState } from "react";
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

  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownEnter = (menu) => setOpenDropdown(menu);
  const handleDropdownLeave = () => setOpenDropdown(null);
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <nav className="section container navbar">
      <div className="logo">
        <img src={logo} alt="Elyon Studios Logo" className="logo-image" />
      </div>
      <div className="rightside">
        <ul className="nav-links">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={closeDropdown}>{t("nav.home")}</Link>
          </li>

          <li
            className={`dropdown ${isActive("/servicios") ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("servicios")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/servicios" onClick={closeDropdown}>{t("nav.services")}</Link>
            <ul
              className="dropdown-menu"
              style={{ display: openDropdown === "servicios" ? "flex" : "none" }}
            >
              <li>
                <Link to="/servicios?service=recording" onClick={closeDropdown}>
                  {t("services.recording.title")}
                </Link>
              </li>
              <li>
                <Link to="/servicios?service=composition" onClick={closeDropdown}>
                  {t("services.composition.title")}
                </Link>
              </li>
              <li>
                <Link to="/servicios?service=coaching" onClick={closeDropdown}>
                  {t("services.coaching.title")}
                </Link>
              </li>
            </ul>
          </li>

          <li className={isActive("/portfolio") ? "active" : ""}>
            <Link to="/portfolio" onClick={closeDropdown}>{t("nav.portfolio")}</Link>
          </li>

          <li className={isActive("/sobremi") ? "active" : ""}>
            <Link to="/sobremi" onClick={closeDropdown}>{t("nav.about")}</Link>
          </li>

          <li
            className={`dropdown ${isActive("/media") ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("media")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link to="/media" onClick={closeDropdown}>{t("nav.media")}</Link>
            <ul
              className="dropdown-menu"
              style={{ display: openDropdown === "media" ? "flex" : "none" }}
            >
              <li>
                <Link to="/blog" onClick={closeDropdown}>
                  {t("media.blog")}
                </Link>
              </li>
            </ul>
          </li>

          <li className={isActive("/contacto") ? "active" : ""}>
            <Link to="/contacto" onClick={closeDropdown}>{t("nav.contact")}</Link>
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
