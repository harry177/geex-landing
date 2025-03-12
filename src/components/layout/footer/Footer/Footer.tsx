import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { FooterPageSection } from "@/components/layout/footer/FooterPageSection/FooterPageSection";
import { Logo } from "@/components/layout/Logo/Logo";
import { Flex } from "@/components/ui/Flex/Flex";
import { DotInfoLine } from "@/components/ui/DotInfoLine/DotInfoLine";
import { footerInfoData, footerPageData } from "./data";
import "./footer.scss";

export const Footer = () => {
  const { t } = useTranslation();

  const desktop = useMediaQuery("(min-width: 1171px)");
  const mobile = useMediaQuery("(max-width: 768px)");

  return (
    <Flex className="footer">
      <Flex column justify="space-between" className="footer-container">
        <Flex
          column={mobile}
          justify="space-between"
          align={mobile ? "center" : "flex-start"}
          className={mobile ? "gap-20" : ""}
        >
          <Logo type="footer" />
          <Flex className="footer__page-section__container">
            {footerPageData.map((item, index) => (
              <FooterPageSection
                key={index}
                title={item.title}
                sections={item.sections}
                url={item.url}
              />
            ))}
          </Flex>
        </Flex>
        <Flex
          column={mobile}
          justify="space-between"
          className={!desktop ? "footer__info-container" : ""}
        >
          <DotInfoLine data={footerInfoData} gap={6} />
          <p className="footer__rights-section">
            © 2024 Sportrec.&nbsp;
            {t("footer.info.rights")}
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};
