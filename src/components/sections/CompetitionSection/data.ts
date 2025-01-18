import { InfoLineTypes } from "../../ui/DotInfoLine/DotInfoLine";
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


export const futureDataComp: CompetitionArticleProps[] = [
  {
    periodTitle: "competition_section.data.future.1.period_title",
    image: "competition-1.jpg",
    text: "competition_section.data.future.1.text",
    lineData: [
      { content: "competition_section.data.future.1.info_line.1", icon: "calendar.svg", color: "dark" },
      { content: "competition_section.data.future.1.info_line.2", icon: "location-icon.svg", color: "dark" },
      { content: "competition_section.data.future.1.info_line.3", icon: "", color: "dark" },
    ],
    members: {
      amount: 167,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
  {
    periodTitle: "competition_section.data.future.2.period_title",
    image: "competition-2.jpg",
    text: "competition_section.data.future.2.text",
    lineData: [
      { content: "competition_section.data.future.2.info_line.1", icon: "calendar.svg", color: "dark" },
      { content: "competition_section.data.future.2.info_line.2", icon: "location-icon.svg", color: "dark" },
      { content: "competition_section.data.future.2.info_line.3", icon: "", color: "dark" },
    ],
    members: {
      amount: 24,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];


export const presentDataComp: CompetitionArticleProps[] = [
  {
    periodTitle: "competition_section.data.current.1.period_title",
    image: "competition-2.jpg",
    text: "competition_section.data.current.1.text",
    lineData: [
      { content: "competition_section.data.current.1.info_line.1", icon: "calendar.svg", color: "dark" },
      { content: "competition_section.data.current.1.info_line.2", icon: "location-icon.svg", color: "dark" },
      { content: "competition_section.data.current.1.info_line.3", icon: "", color: "dark" },
    ],
    members: {
      amount: 27,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
  {
    periodTitle: "competition_section.data.current.2.period_title",
    image: "competition-1.jpg",
    text: "competition_section.data.current.2.text",
    lineData: [
      { content: "competition_section.data.current.2.info_line.1", icon: "calendar.svg", color: "dark" },
      { content: "competition_section.data.current.2.info_line.2", icon: "location-icon.svg", color: "dark" },
      { content: "competition_section.data.current.2.info_line.3", icon: "", color: "dark" },
    ],
    members: {
      amount: 90,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];


export const pastDataComp: CompetitionArticleProps[] = [
  {
    periodTitle: "competition_section.data.past.1.period_title",
    image: "competition-2.jpg",
    text: "competition_section.data.past.1.text",
    lineData: [
      { content: "competition_section.data.past.1.info_line.1", icon: "calendar.svg", color: "dark" },
      { content: "competition_section.data.past.1.info_line.2", icon: "location-icon.svg", color: "dark" },
      { content: "competition_section.data.past.1.info_line.3", icon: "", color: "dark" },
    ],
    members: {
      amount: 51,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];
