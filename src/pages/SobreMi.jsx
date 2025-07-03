// src/pages/SobreMi.jsx
import "./SobreMi.css";
import { useTranslation } from "react-i18next";
import pau from "../assets/pau.jpg";
import FadeInSection from "../components/fadeInSection";

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <section className="section section-light">
        <div className="card">
          <h1 className="heading text-primary">{t("about.welcome")}</h1>
          <div className="aboutme-container">
            <div>
              <p className="text-muted text1">{t("about.description1.p1")}</p>
              <p className="text-muted text1">{t("about.description1.p2")}</p>
              <p className="text-muted text1">{t("about.description1.p3")}</p>
              <p className="text-muted text1">{t("about.description1.p4")}</p>
            </div>
            <img src={pau} alt="Pau Lefler" className="pau-image"/>
          </div>
          <div className="text2">
            <p className="text-muted">{t("about.description2")}</p>
          </div>
        </div>
    </section>
  </FadeInSection>
  );
}
