import { useTranslation } from "react-i18next";

export default function Servicios() {
  const { t } = useTranslation();

  return <h1>{t("services.welcome")}</h1>;
}