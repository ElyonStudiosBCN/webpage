import { useTranslation } from "react-i18next";

export default function Media() {
  const { t } = useTranslation();

  return <h1>{t("media.welcome")}</h1>;
}