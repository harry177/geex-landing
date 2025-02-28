import { ReactNode } from "react";

export interface AvatarProps {
  image: string;
  size?: "small" | "medium" | "big" | "xl";
  range?: boolean;
  badge?: "gold" | "silver" | "bronze" | "flag";
}

export interface ButtonProps {
  variant: "primary" | "secondary";
  thin?: boolean;
  icon?: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export interface CarouselDataTypes {
  image: string;
  title?: string;
  banner?: string;
  bannerDetails?: {
    watch: string;
    time: string;
  };
  company?: {
    image: string;
    name: string;
    watchers: string;
    date: string;
  };
}

export interface CarouselProps {
  type: "stream" | "news" | "video";
  data: CarouselDataTypes[];
}

export interface InfoLineTypes {
  content?: string;
  icon?: string;
  amount?: number;
  amountColor?: boolean;
  color?: "light" | "dark";
}

export interface DotInfoLineProps {
  data: InfoLineTypes[];
  gap?: number;
}

export interface DropdownProps {
  label?: string;
  items: { section: string; icon?: (color: string) => ReactNode }[];
  width?: string;
  dispatchedContent?: boolean;
  menuHeader?: boolean;
  children?: ReactNode;
  rootClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
}

export interface FlexProps {
  column?: boolean;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?: "flex-start" | "center" | "flex-end";
  gap?: string;
  className?: string;
  children?: ReactNode;
}

export interface ForwardBoxProps {
  name: string;
  url: string;
  className?: string;
}

export interface PopupProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export interface TabButtonProps {
  className?: string;
  name?: string;
  amount?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  positionClassname: string;
}
