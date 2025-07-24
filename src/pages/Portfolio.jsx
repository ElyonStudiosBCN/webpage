import CollapsibleSection from "../components/collapsibleSection";
import { portfolioData } from "../data/portfolioData";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/fadeInSection";
import { Helmet } from "react-helmet";
import "./Portfolio.css";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Portfolio | Elyon Studios</title>
        <meta name="description" content="Escucha nuestro trabajo en cine, videojuegos, anuncios, jazz, pop, rock y más." />

        <meta property="og:title" content="Portfolio | Elyon Studios" />
        <meta property="og:description" content="Explora nuestras producciones musicales y bandas sonoras originales." />
        <meta property="og:image" content="/assets/SEO.png" />
        <meta property="og:url" content="https://www.elyonstudiosbcn.com/portfolio" />
      </Helmet>
      <div className="container section">
        <div className="card">
          <h1 className="heading text-primary">{t("portfolio.welcome")}</h1>

          <CollapsibleSection title={t("portfolio.section1")}>
            {Object.entries(portfolioData.composicion).map(([subcat, items]) => (
              items.length > 0 && (
                <div key={subcat} className="portfolio-subsection">
                  <h2>{subcat}</h2>
                  <div className="portfolio-grid">
                    {items.map((item, idx) => (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-item"
                        key={idx}
                      >
                        <span>{item.style}</span>
                        <img src={item.img} alt={item.title} />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )
            ))}
          </CollapsibleSection>

          <CollapsibleSection title={t("portfolio.section2")}>
            {Array.isArray(portfolioData.produccion) && (
              <div className="portfolio-subsection">
                <h2>Composición</h2>
                <div className="portfolio-grid">
                  {portfolioData.produccion.map((item, idx) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={idx}>
                      <span>{item.style}</span>
                      <img src={item.img} alt={item.title} />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </CollapsibleSection>
        </div>
      </div>
    </>
  );
}
