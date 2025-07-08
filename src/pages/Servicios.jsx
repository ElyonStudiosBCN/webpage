// src/pages/Servicios.jsx
import "./Servicios.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FadeInSection from "../components/fadeInSection";
import { Helmet } from "react-helmet";

import imgRecording from "../assets/estudio4.jpeg";
import imgComposition from "../assets/estudio2.jpeg";
import imgCoaching from "../assets/estudio1.jpeg";

export default function Servicios() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const selectedService = searchParams.get("service");

  const [openId, setOpenId] = useState(selectedService);

  const services = [
    {
      id: "recording",
      title: t("services.recording.title"),
      text: t("services.recording.text"),
      image: imgRecording,
    },
    {
      id: "composition",
      title: t("services.composition.title"),
      text: t("services.composition.text"),
      image: imgComposition,
    },
    {
      id: "coaching",
      title: t("services.coaching.title"),
      text: t("services.coaching.text"),
      image: imgCoaching,
    },
  ];

  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
      <title>Servicios | Elyon Studios</title>
      <meta name="description" content="Servicios profesionales de producción musical, composición original, bandas sonoras, coaching vocal y piano." />

      <meta property="og:title" content="Servicios | Elyon Studios" />
      <meta property="og:description" content="Grabación, composición, coaching vocal y más. Conoce todo lo que ofrecemos en Elyon Studios." />
      <meta property="og:image" content="/assets/SEO.png" />
      <meta property="og:url" content="https://www.elyonstudiosbcn.com/servicios" />
    </Helmet>
      <FadeInSection>
        <section className="section section-light">
          <div className="card">
            <h1 className="heading text-primary mb-4">{t("services.welcome")}</h1>

            {services.map((service) => {
              const isOpen = openId === service.id;
              return (
                <div
                  key={service.id}
                  className={`service-block card mb-4 ${isOpen ? "open" : ""}`}
                >
                  <div
                    className="service-title"
                    onClick={() => toggleSection(service.id)}
                  >
                    {service.title}
                  </div>
                  <div
                    className={`service-content-wrapper ${
                      isOpen ? "expanded" : ""
                    }`}
                  >
                    <div className="service-content">
                      <div className="service-details">
                        <p className="text-muted">{service.text}</p>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="service-image"
                        />
                      </div>
                      <Link
                        to={`/contacto?service=${service.id}`}
                        className="btn btn-accent mt-2 service-button"
                      >
                        {t("services.contactButton")}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
