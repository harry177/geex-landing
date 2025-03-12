import { InfoLineTypes } from "@/components/ui/types";

export interface CompetitionArticleProps {
  periodTitle: string;
  image: string;
  text: string;
  lineData: InfoLineTypes[];
  members: {
    amount: number;
    images: string[];
  };
}

export interface MedalBoxProps {
  medal: string;
  amount: number;
}

export interface PersonItemProps {
  name: string;
  position: string;
  image: string;
  rank?: number;
  arrow?: string;
  rating?: number;
  medal?: "gold" | "silver" | "bronze";
  contentClassName?: string;
  textClassName?: string;
}

export interface PersonTabButtonProps {
  className?: string;
  name?: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ResultArticleProps {
  title: string;
  lineData: InfoLineTypes[];
  games: ResultRowProps[];
}

export interface ResultRowProps {
  firstName: string;
  firstImage: string;
  firstScore: number;
  secondName: string;
  secondImage: string;
  secondScore: number;
}

export interface WinnerItemProps {
  name: string;
  position: string;
  image: string;
  rating?: number;
  background: "red" | "blue";
}
