import CollapsibleSection from "../components/collapsibleSection";
import { portfolioData } from "../data/portfolioData";
import { useTranslation } from "react-i18next";
import FadeInSection from "../components/fadeInSection";
import "./Portfolio.css";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <FadeInSection>
      <div className="container section">
        <div className="card">
          <h1 className="heading text-primary">{t("portfolio.welcome")}</h1>

          <CollapsibleSection title={t("portfolio.section1")}>
            {Object.entries(portfolioData.composicion).map(([subcat, items]) => (
              <div key={subcat} className="portfolio-subsection">
                <h2>{subcat}</h2>
                <div className="portfolio-grid">
                  {items.map((item, idx) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={idx}>
                      <img src={item.img} alt={item.title} />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </CollapsibleSection>

          <CollapsibleSection title={t("portfolio.section2")}>
            {Object.entries(portfolioData.produccion).map(([genre, items]) => (
              <div key={genre} className="portfolio-subsection">
                <h2>{genre}</h2>
                <div className="portfolio-grid">
                  {items.map((item, idx) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-item" key={idx}>
                      <img src={item.img} alt={item.title} />
                      <span>{item.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </CollapsibleSection>
        </div>
      </div>
    </FadeInSection>
  );
}
