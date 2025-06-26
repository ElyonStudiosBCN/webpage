// src/pages/Contacto.jsx
import "./Contacto.css";
import ContactComponent from "../components/contact";
import FadeInSection from "../components/fadeInSection";

export default function Contacto() {

  return (
    <FadeInSection>
      <section className="section section-light">
        <ContactComponent />
      </section>
    </FadeInSection>
);
}