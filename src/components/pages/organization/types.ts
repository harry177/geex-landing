import { CompetitionArticleProps, ResultRowProps } from "@/components/shared/types";
import { InfoLineTypes } from "@/components/ui/types";

export interface CompetitionMapTypes {
  "competition_section.tabs.future_data": CompetitionArticleProps[];
  "competition_section.tabs.current_data": CompetitionArticleProps[];
  "competition_section.tabs.past_data": CompetitionArticleProps[];
}

export interface ProfileSectionProps {
  onTabChange: (tabName: string) => void;
}

export interface ResultDataProps {
    header: {
      title: string;
      lineData: InfoLineTypes[];
    };
    content: ResultRowProps[];
  }