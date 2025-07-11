import "./Home.css";
import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import { useTranslation } from "react-i18next";
import Hero from "../components/hero";
import PortfolioPreview from "../components/portfolioPreview";
import ServiciosPreview from "../components/serviciosPreview";
import LatestPost from "../components/latestPost";
import FadeInSection from "../components/fadeInSection";

import { Helmet } from "react-helmet";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">

      {/* SEO */}
      <Helmet>
        <title>{t("seo.home.title")}</title>
        <meta name="description" content={t("seo.home.description")} />
        <meta property="og:title" content={t("seo.home.title")} />
        <meta property="og:description" content={t("seo.home.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elyonstudiosbcn.com/" />
        <meta property="og:image" content="/assets/SEO.png" />
      </Helmet>

      {/* HERO */}
      <section className="hero">
        <Hero />
      </section>

      {/* VIDEO RESUMEN */}
      <FadeInSection>
        <section className="section container text-center">
          <h2 className="heading">{t("home.videoSection.title")}</h2>
          <p className="mb-4">{t("home.videoSection.description")}</p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/YgDaXEvUaXE"
              title="Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </FadeInSection>

      {/* RESUMEN PORTFOLIO */}
      <FadeInSection  delay={0.1}>
        <section className="section container">
          <PortfolioPreview />
        </section>
      </FadeInSection>

      {/* RESUMEN SERVICIOS */}
      <FadeInSection delay={0.2}>
        <section className="section container">
          <ServiciosPreview />
        </section>
      </FadeInSection>

      {/* ÚLTIMO ARTÍCULO DEL BLOG */}
      <FadeInSection delay={0.3}>
        <section className="section container">
          <LatestPost />
        </section>
      </FadeInSection>

      {/* CONTACTO */}
      <FadeInSection delay={0.4}>
        <section className="section container">
          <h2 className="heading text-center">{t("home.contact.title")}</h2>
          <p className="text-center mb-4">{t("home.contact.description")}</p>
          <Contacto />
        </section>
      </FadeInSection>

    </div>
  );
}
