import { ReactNode } from "react";

export interface FooterPageSectionProps {
  title: string;
  sections?: string[];
  url: string;
}

export interface HeaderMobileSectionProps {
  category: "profile" | "lang" | "nav";
  children: ReactNode;
  items: {
    section: string;
    icon?: (color: string) => ReactNode;
    url?: string;
  }[];
}

export interface HeaderNavItemProps {
  page: string;
  icon: (page: string) => ReactNode;
  url: string;
  isActive: boolean;
}

export interface LogoProps {
  type: "header" | "footer";
}
