import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();
  
    return <h1>{t("portfolio.welcome")}</h1>;
}