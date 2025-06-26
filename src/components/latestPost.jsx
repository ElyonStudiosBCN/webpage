import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import posts from "../data/blogIndex.json";

export default function LatestPost() {
  const { t } = useTranslation();

  const latestPost = posts
    .slice() // evita mutar el array original
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

  if (!latestPost) return null;

  return (
    <section className="section container text-center">
        <div className="card">
            <h2 className="heading">{t("home.latestPost.title")}</h2>
            <article className="card">
                <h3 className="subheading">{latestPost.title}</h3>
                <small className="text-muted">
                    {new Date(latestPost.date).toLocaleDateString()}
                </small>
                <p className="mt-2">{latestPost.excerpt}</p>
                <Link to={`/blog/${latestPost.id}`} className="btn btn-primary mt-4">
                    {t("home.latestPost.cta")}
                </Link>
            </article>  
        </div>
    </section>
  );
}
