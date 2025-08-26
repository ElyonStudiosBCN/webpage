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
      text1: t("services.recording.text1"),
      quests: t("services.recording.quests", { returnObjects: true }),
      text2: t("services.recording.text2"),
      image: imgRecording,
    },
    {
      id: "composition",
      title: t("services.composition.title"),
      text1: t("services.composition.text1"),
      quests: t("services.composition.quests", { returnObjects: true }),
      text2: t("services.composition.text2"),
      image: imgComposition,
    },
    {
      id: "coaching",
      title: t("services.coaching.title"),
      text1: t("services.coaching.text1"),
      quests: t("services.coaching.quests", { returnObjects: true }),
      text2: t("services.coaching.text2"),
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
      <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Elyon Studios",
            "image": "https://elyonstudiosbcn.com/assets/SEO.png",
            "@id": "https://elyonstudiosbcn.com",
            "url": "https://elyonstudiosbcn.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Barcelona",
              "addressCountry": "ES"
            },
            "sameAs": [
              "https://www.instagram.com/elyonstudiosbcn",
            ]
          }
        `}</script>
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
                        <div className="service-text">
                          <p className="text-muted">{service.text1}</p>
                          <div className="service-quests">
                            {service.quests.map((quest, index) => (
                              <p key={index} className="text-muted">{quest}</p>
                            ))}
                          </div>
                          <p className="text-muted">{service.text2}</p>
                        </div>
                        <img
                          src={service.image}
                          alt={`Elyon Studios ${service.title} – Estudio de música y producción en Barcelona`}
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
