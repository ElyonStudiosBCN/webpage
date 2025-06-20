import { useTranslation } from "react-i18next";

export default function Contacto() {
  const { t } = useTranslation();
  return <h1>{t("contact.welcome")}</h1>;
}