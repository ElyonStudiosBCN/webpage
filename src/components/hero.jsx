import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./hero.css"

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/hero.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="hero-overlay" />
      <div className="hero-content semiopaque card">
        <img src="/assets/logo-nobg-onlytext.png" alt="Hero" className="hero-logo-name" />
        {/* <h1 className="hero-title text-primary text-center">{t('home.hero.title')}</h1> */}
        <h3 className="hero-subtitle text-primary text-center">{t('home.hero.subtitle')}</h3>
        <Link to="/portfolio" className="btn btn-primary mt-4">
          {t('home.hero.cta')}
        </Link>
      </div>
    </section>
  );
};

export default Hero;