/* Footer.jsx */
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logoMic from '../assets/logo-nobg-onlymic.png'
import "./Footer.css"; // Puedes eliminar estilos que ya estén cubiertos por utilidades

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-light border-top">
      <div className="container">
        <div className="container footer-grid">
          {/* Brand / Tagline */}
          <div className="logo-and-text">
            <div className="logo logo-wrapper">
              <img src={logoMic} alt="Elyon Studios Logo" className="logo-mic" />
            </div>
            <div className="footer-item">
              <h2 className="text-primary">Elyon Studios</h2>
              <p className="text-muted">{t("footer.tagline")}</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="footer-navigation">
            <h4>{t("footer.navigation")}</h4>
            <ul className="footer-nav">
              <li><Link to="/">{t("nav.home")}</Link></li>
              <li><Link to="/servicios">{t("nav.services")}</Link></li>
              <li><Link to="/portfolio">{t("nav.portfolio")}</Link></li>
              <li><Link to="/sobremi">{t("nav.about")}</Link></li>
              <li><Link to="/media">{t("nav.media")}</Link></li>
              <li><Link to="/contacto">{t("nav.contact")}</Link></li>
            </ul>
          </nav>

          {/* Social Media */}
          <div className="footer-item">
            <h4>{t("footer.followUs")}</h4>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><FaYoutube /></a>
              <a href="https://spotify.com" target="_blank" rel="noreferrer" aria-label="Spotify"><FaSpotify /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-muted text-center mt-4">
          <p>© {currentYear} Elyon Studios. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

