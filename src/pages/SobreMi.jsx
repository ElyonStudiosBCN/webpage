// src/pages/SobreMi.jsx
import "./SobreMi.css";
import { useTranslation } from "react-i18next";
import pau from "../assets/pau.jpg";
import FadeInSection from "../components/fadeInSection";
import { Helmet } from "react-helmet";

export default function SobreMi() {
  const { t } = useTranslation();

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Sobre mí | Elyon Studios</title>
        <meta name="description" content="Conoce a Pau Lefler, productor musical, compositor y coach vocal detrás de Elyon Studios." />

        <meta property="og:title" content="Sobre mí | Elyon Studios" />
        <meta property="og:description" content="Visión artística y trayectoria profesional de Pau Lefler." />
        <meta property="og:image" content="/assets/SEO.png" />
        <meta property="og:url" content="https://www.elyonstudiosbcn.com/sobremi" />
      </Helmet>
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
    </>
  );
}
