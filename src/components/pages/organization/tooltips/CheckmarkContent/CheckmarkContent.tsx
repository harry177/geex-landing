import { useTranslation } from "react-i18next";
import "../tooltips.scss";

export const CheckmarkContent = () => {
  const { t } = useTranslation();

  return (
    <div className="checkmark-content">
      {t("profile_section.tooltips.checkmark")}
    </div>
  );
};
