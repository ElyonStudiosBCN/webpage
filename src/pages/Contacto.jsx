// src/pages/Contacto.jsx
import React, { useRef } from "react";
import "./Contacto.css";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useSearchParams } from "react-router-dom";

export default function Contacto() {
  const { t } = useTranslation();
  const form = useRef();
  const [searchParams] = useSearchParams();
  const defaultService = searchParams.get("service") || "";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_05yy2h5",    // lo obtienes en EmailJS
      "template_7icyuf9",   // lo mismo
      form.current,
      "84GpTsoJ9RYxejRgt"     // lo obtienes también en EmailJS
    )
    .then(() => {
      alert(t("contact.success"));
      form.current.reset();
    })
    .catch((error) => {
      console.error("Email error:", error);
      alert(t("contact.error"));
    });
  };

  return (
    <section className="section section-light">
      <div className="container contacto-wrapper">
        {/* Formulario de contacto */}
        <div className="card form-container">
          <h2 className="heading text-primary">{t("contact.welcome")}</h2>
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <label>
              {t("contact.name")}
              <input type="text" name="name" required />
            </label>
            <label>
              {t("contact.email")}
              <input type="email" name="email" required />
            </label>
            <label>
              {t("contact.phone")}
              <input type="tel" name="phone" />
            </label>
            <label>
              {t("contact.service")}
              <select name="service" defaultValue={defaultService}>
                <option value="recording">{t("contact.options.recording")}</option>
                <option value="composition">{t("contact.options.composition")}</option>
                <option value="coaching">{t("contact.options.coaching")}</option>
                <option value="other">{t("contact.options.other")}</option>
              </select>
            </label>
            <label>
              {t("contact.message")}
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button type="submit" className="btn btn-primary">{t("contact.send")}</button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="card info-container">
          <div>
            <h2 className="heading">{t("contact.infoTitle")}</h2>
            <p><strong>{t("contact.nameLabel")}:</strong> Pau Lefler</p>
            <p><strong>{t("contact.emailLabel")}:</strong> Elyonstudiosbcn@gmail.com</p>
            <p><strong>{t("contact.phoneLabel")}:</strong> +34 685 152 610</p>
            <p><strong>{t("contact.addressLabel")}:</strong> Calle Repartidor 39, ent 1a,	08023 Barcelona, España</p>
          </div>
          {/* Mapa */}
          <div className="map-container">
            <iframe
              title="Mapa del estudio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.3246675901793!2d2.1402740154196145!3d41.41346580113183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fb169c33a1%3A0x5b2eb37c6ea12f27!2sC%2F%20del%20Repartidor%2C%2039%2C%2C%2008023%20Barcelona!5e0!3m2!1ses!2ses!4v1718900000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}