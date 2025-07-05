import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./serviciosPreview.css";

import imgRecording from "../assets/placeholder.png";
import imgComposition from "../assets/placeholder.png";
import imgCoaching from "../assets/placeholder.png";

export default function ServiciosPreview() {
    const { t } = useTranslation();
    const services = [
        {
          id: "recording",
          title: t("services.recording.title"),
          image: imgRecording,
        },
        {
          id: "composition",
          title: t("services.composition.title"),
          image: imgComposition,
        },
        {
          id: "coaching",
          title: t("services.coaching.title"),
          image: imgCoaching,
        },
      ];

    return (
        <section className="section container text-center">
        <div className="card">
            <h2 className="heading">{t("home.serviciosPreview.title")}</h2>
            <p className="mb-4">{t("home.serviciosPreview.description")}</p>
            <div className="servicios-preview-grid">
                {services.map((service) => (
                <Link
                    to={`/servicios?service=${service.id}`}
                    className="servicios-preview-item card"
                >
                    <img src={service.image} alt={service.title} />
                    <span>{service.title}</span>
                </Link>
                ))}
            </div>
            <Link to="/servicios" className="btn btn-primary mt-4">
                {t("home.serviciosPreview.cta")}
            </Link>
        </div>
    </section>
    )
}