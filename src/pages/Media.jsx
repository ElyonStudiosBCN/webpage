// src/pages/Media.jsx
import "./Media.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FadeInSection from "../components/fadeInSection";

export default function Media() {
  const { t } = useTranslation();

  return (
    <FadeInSection>
      <section className="section section-light">
        <div className="card">
          <h1 className="heading text-primary">{t("media.welcome")}</h1>
          <div className="media-grid-wrapper container">
            {/* YouTube Section */}
            <div className="media-block card">
              <h2 className="subheading">{t("media.youtube")}</h2>
              <div className="media-grid">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="YouTube video"
                  allowFullScreen
                />
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2"
                  title="YouTube video 2"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Spotify Section */}
            <div className="media-block card">
              <h2 className="subheading">{t("media.spotify")}</h2>
              <div className="media-grid">
                <iframe
                  src="https://open.spotify.com/embed/track/7177gBM6G8lmeavvL9bAUy"
                  title="Spotify player"
                  allow="encrypted-media"
                  loading="lazy"
                />
                <iframe
                  src="https://open.spotify.com/embed/album/1KuXm5M0haFilwcsAw2iXs"
                  title="Spotify album"
                  allow="encrypted-media"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Blog Preview Section */}
            <div className="media-block card">
              <h2 className="subheading">{t("media.blog")}</h2>
              <p>{t("media.blogDescription")}</p>
              <Link to="/blog" className="btn btn-accent mt-2">
                {t("media.blogButton")}
              </Link>
            </div>

            {/* Instagram Section */}
            <div className="media-block card">
              <h2 className="subheading">{t("media.instagram")}</h2>
              <p>{t("media.instagramDescription")}</p>
              <div>
                /*instagram embedded posts*/
              </div>
              <a
                href="https://www.instagram.com/elyonstudiosbcn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                {t("media.instagramButton")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
