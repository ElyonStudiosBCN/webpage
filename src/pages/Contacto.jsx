// src/pages/Contacto.jsx
import "./Contacto.css";
import ContactComponent from "../components/contact";
import FadeInSection from "../components/fadeInSection";
import { Helmet } from "react-helmet";

export default function Contacto() {

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Contacto | Elyon Studios</title>
        <meta name="description" content="¿Quieres trabajar con nosotros? Escríbenos o visita nuestro estudio en Barcelona." />

        <meta property="og:title" content="Contacto | Elyon Studios" />
        <meta property="og:description" content="Formulario de contacto, email, teléfono y ubicación." />
        <meta property="og:image" content="/assets/SEO.png" />
        <meta property="og:url" content="https://www.elyonstudiosbcn.com/contacto" />
      </Helmet>
      <FadeInSection>
        <section className="section section-light">
          <ContactComponent />
        </section>
      </FadeInSection>
    </>
);
}