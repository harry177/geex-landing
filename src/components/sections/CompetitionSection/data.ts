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
    periodTitle: "competition_section.period_title.this_week",
    image: "competition-1.jpg",
    text: "Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет",
    lineData: [
      { content: "17 марта, 14:00", icon: "calendar.svg", color: "dark" },
      { content: "Москва, Россия", icon: "location-icon.svg", color: "dark" },
      { content: "5 матчей", icon: "", color: "dark" },
    ],
    members: {
      amount: 167,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
  {
    periodTitle: "competition_section.period_title.next_week",
    image: "competition-2.jpg",
    text: "Соревновании по греко-римской борьбе среди юношей до 16 лет памяти ЗТСССР В.А.Бормана в честь дня рождения",
    lineData: [
      { content: "21 февраля, 08:30", icon: "calendar.svg", color: "dark" },
      { content: "Москва, Россия", icon: "location-icon.svg", color: "dark" },
      { content: "10 матчей", icon: "", color: "dark" },
    ],
    members: {
      amount: 24,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];


export const presentDataComp: CompetitionArticleProps[] = [
  {
    periodTitle: "Сегодня",
    image: "competition-2.jpg",
    text: "Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров до 24 лет",
    lineData: [
      { content: "11 марта, 18:00", icon: "calendar.svg", color: "dark" },
      { content: "Ульяновск, Россия", icon: "location-icon.svg", color: "dark" },
      { content: "8 матчей", icon: "", color: "dark" },
    ],
    members: {
      amount: 27,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
  {
    periodTitle: "Завтра",
    image: "competition-1.jpg",
    text: "Соревновании по греко-римской борьбе среди юношей до 16 лет памяти ЗТСССР В.А.Бормана в честь дня рождения",
    lineData: [
      { content: "12 марта, 12:00", icon: "calendar.svg", color: "dark" },
      { content: "Москва, Россия", icon: "location-icon.svg", color: "dark" },
      { content: "5 матчей", icon: "", color: "dark" },
    ],
    members: {
      amount: 90,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];


export const pastDataComp: CompetitionArticleProps[] = [
  {
    periodTitle: "В прошлом месяце",
    image: "competition-2.jpg",
    text: "Первенство Республики Татарстан по спортивной борьбе (вольная борьба) среди юниоров до 24 лет",
    lineData: [
      { content: "30 января, 18:00", icon: "calendar.svg", color: "dark" },
      { content: "Казань, Россия", icon: "location-icon.svg", color: "dark" },
      { content: "10 матчей", icon: "", color: "dark" },
    ],
    members: {
      amount: 51,
      images: ["users/user-1.png", "users/user-2.png", "users/user-3.png"],
    },
  },
];
