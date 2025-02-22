import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flex } from "../ui/Flex/Flex";

interface FooterPageSectionProps {
  title: string;
  sections?: string[];
  url: string;
}

export const FooterPageSection = ({
  title,
  sections,
  url,
}: FooterPageSectionProps) => {
  const { t } = useTranslation();

  return (
    <Flex column className="gap-16">
      <Link to={url}>
        <p className="footer__page-section__title">{t(title)}</p>
      </Link>
      <Flex column className="gap-10">
        {sections?.map((item, index) => (
          <p key={index} className="footer__page-section__item">
            {t(item)}
          </p>
        ))}
      </Flex>
    </Flex>
  );
};
