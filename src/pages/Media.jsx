// src/pages/Media.jsx
import "./Media.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import FadeInSection from "../components/fadeInSection";
import { Helmet } from "react-helmet";
import { InstagramEmbed } from 'react-social-media-embed';

export default function Media() {
  const { t } = useTranslation();

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Media | Elyon Studios</title>
        <meta name="description" content="Descubre nuestras colaboraciones en YouTube, Spotify, Instagram y el blog oficial." />

        <meta property="og:title" content="Media | Elyon Studios" />
        <meta property="og:description" content="Conecta con Elyon Studios en plataformas digitales." />
        <meta property="og:image" content="/assets/SEO.png" />
        <meta property="og:url" content="https://www.elyonstudiosbcn.com/media" />
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
            <h1 className="heading text-primary">{t("media.welcome")}</h1>
            <div className="media-grid-wrapper container">
              {/* YouTube Section */}
              <div className="media-block card">
                <h2 className="subheading">{t("media.youtube")}</h2>
                <div className="media-grid">
                  <iframe
                    className="embed" 
                    src="https://www.youtube.com/embed/YgDaXEvUaXE"
                    title="YouTube video"
                    allowFullScreen
                  />
                  <iframe
                    src="https://www.youtube.com/embed/AZSyZxr_JXY"
                    title="YouTube video 2"
                    allowFullScreen
                    className="embed" 
                  />
                </div>
              </div>

              

              {/* Spotify Section */}
              <div className="media-block card">
                <h2 className="subheading">{t("media.spotify")}</h2>
                <div className="media-grid">
                  <iframe
                    src="https://open.spotify.com/embed/track/1glV19IO9Jv7D4tBhuR5Ps?utm_source=generator&theme=0"
                    title="Spotify player"
                    allow="encrypted-media"
                    loading="lazy"
                    className="embed" 
                  />
                  <iframe
                    src="https://open.spotify.com/embed/album/1KuXm5M0haFilwcsAw2iXs"
                    title="Spotify album"
                    allow="encrypted-media"
                    loading="lazy"
                    className="embed" 
                  />
                </div>
              </div>

              {/* Soundcloud Preview Section */}
              <div className="media-block card">
                <h2 className="subheading">{t("media.soundcloud")}</h2>
                <p>{t("media.soundcloudDescription")}</p>
                {/* SoundCloud Embed */}
                <div>
                  <iframe className="embed" width="auto" height="150px"  frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2128918653&color=%238f743e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                  </iframe>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#cccccc",
                      lineBreak: "anywhere",
                      wordBreak: "normal",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontFamily:
                        "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                      fontWeight: 100,
                    }}
                  >
                    <a
                      href="https://soundcloud.com/elyonstudiosbcn"
                      title="ELYON STUDIOS BCN"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      ELYON STUDIOS BCN
                    </a>{" "}
                    ·{" "}
                    <a
                      href="https://soundcloud.com/elyonstudiosbcn/i-see-the-light-denna-pau-lefler"
                      title="I SEE THE LIGHT - Denna & Pau Lefler"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                      I SEE THE LIGHT - Denna &amp; Pau Lefler
                    </a>
                  </div>
                  <div style={{"margin-top":"1.5em"}}>
                    <iframe className="embed" width="auto" height="150px"  frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2128918653&color=%238f743e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                    </iframe>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "#cccccc",
                        lineBreak: "anywhere",
                        wordBreak: "normal",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily:
                          "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
                        fontWeight: 100,
                      }}
                    >
                      <a
                        href="https://soundcloud.com/elyonstudiosbcn"
                        title="ELYON STUDIOS BCN"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        ELYON STUDIOS BCN
                      </a>{" "}
                      ·{" "}
                      <a
                        href="https://soundcloud.com/elyonstudiosbcn/cheek-to-cheek-lux-in-aura-cover"
                        title="Cheek to cheek - Lux in Aura"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                      >
                        Cheek to cheek - Lux in Aura
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Section */}
              <div className="media-block card">
                <h2 className="subheading">{t("media.instagram")}</h2>
                {/* <p>{t("media.instagramDescription")}</p> */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramEmbed url="https://www.instagram.com/p/DKHc56xosXF/" />
                </div>
                {/* <a
                  href="https://www.instagram.com/elyonstudiosbcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-2"
                >
                  {t("media.instagramButton")}
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
