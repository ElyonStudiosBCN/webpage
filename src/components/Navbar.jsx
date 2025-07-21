import { useState, useEffect, useRef } from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="section container navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Elyon Studios Logo" className="logo-image" />
        </Link>
      </div>

      {/* Hamburger button for mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label={t("aria.menu")}>
        ☰
      </button>

      {/* Main menu */}
      <div ref={menuRef} className={`rightside ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li className={isActive("/") ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>{t("nav.home")}</Link>
          </li>
          <li className={`dropdown ${isActive("/servicios") ? "active" : ""}`}>
            <Link to="/servicios" onClick={closeMenu}>{t("nav.services")}</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/servicios?service=recording" onClick={closeMenu}>
                  {t("services.recording.title")}
                </Link>
              </li>
              <li>
                <Link to="/servicios?service=composition" onClick={closeMenu}>
                  {t("services.composition.title")}
                </Link>
              </li>
              <li>
                <Link to="/servicios?service=coaching" onClick={closeMenu}>
                  {t("services.coaching.title")}
                </Link>
              </li>
            </ul>
          </li>
          <li className={isActive("/portfolio") ? "active" : ""}>
            <Link to="/portfolio" onClick={closeMenu}>{t("nav.portfolio")}</Link>
          </li>
          <li className={isActive("/sobremi") ? "active" : ""}>
            <Link to="/sobremi" onClick={closeMenu}>{t("nav.about")}</Link>
          </li>
          <li className={`dropdown ${isActive("/media") ? "active" : ""}`}>
            <Link to="/media" onClick={closeMenu}>{t("nav.media")}</Link>
            <ul className="dropdown-menu">
              <li>
                <Link to="/blog" onClick={closeMenu}>
                  {t("media.blog")}
                </Link>
              </li>
            </ul>
          </li>
          <li className={isActive("/contacto") ? "active" : ""}>
            <Link to="/contacto" onClick={closeMenu}>{t("nav.contact")}</Link>
          </li>
        </ul>

        {/* Actions: theme and language toggle */}
        <div className="layout-actions">
          <button onClick={() => { toggleTheme(); closeMenu(); }} aria-label={t("aria.theme")}>🌓</button>
          <button onClick={() => { toggleLanguage(); closeMenu(); }} aria-label={t("aria.language")}>🌐</button>
        </div>
      </div>
    </nav>
  );
}
