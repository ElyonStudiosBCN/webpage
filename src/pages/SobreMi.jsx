import { useTranslation } from "react-i18next";

export default function SobreMi() {
  const { t } = useTranslation();
  
    return <h1>{t("about.welcome")}</h1>;
}