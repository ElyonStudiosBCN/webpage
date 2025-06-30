import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { portfolioData } from "../data/portfolioData";
import "./PortfolioPreview.css";

export default function PortfolioPreview() {
  const { t } = useTranslation();

  const randomItems = useMemo(() => {
    const allItems = [
      ...Object.values(portfolioData.composicion).flat(),
      ...Object.values(portfolioData.produccion).flat(),
    ];

    const shuffled = allItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4); // 4 elementos aleatorios
  }, []);

  return (
    <section className="section container text-center">
        <div className="card">
            <h2 className="heading">{t("home.portfolioPreview.title")}</h2>
            <p className="mb-4">{t("home.portfolioPreview.description")}</p>
            <div className="portfolio-preview-grid">
                {randomItems.map((item, idx) => (
                <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-preview-item card"
                >
                    <img src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                </a>
                ))}
            </div>
            <Link to="/portfolio" className="btn btn-primary mt-4">
                {t("home.portfolioPreview.cta")}
            </Link>
        </div>
    </section>
  );
}
