import { ResultRowProps } from "../../ResultRow/ResultRow";
import { InfoLineTypes } from "../../ui/DotInfoLine/DotInfoLine";

export interface ResultArticleProps {
  header: {
    title: string;
    lineData: InfoLineTypes[];
  };
  content: ResultRowProps[];
}

export const resultData: ResultArticleProps[] = [
  {
    header: {
      title:
        "Первенство Московской области по спортивной борьбе (вольная борьба) среди юниоров",
      lineData: [
        { content: "17 Марта, 14:00", icon: "calendar.svg", color: "dark" },
        {
          content: "Москва, Россия",
          icon: "location-icon.svg",
          color: "dark",
        },
        { content: "5 матчей" },
      ],
    },
    content: [
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 2,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 1,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 5,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 3,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 1,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 8,
      },
    ],
  },
  {
    header: {
      title:
        "Соревновании по греко-римской борьбе среди юношей до 16 лет памяти ЗТСССР В.А.Бормана",
      lineData: [
        { content: "17 Марта, 14:00", icon: "calendar.svg", color: "dark" },
        {
          content: "Санкт-Петербург, Россия",
          icon: "location-icon.svg",
          color: "dark",
        },
        { content: "10 матчей" },
      ],
    },
    content: [
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 10,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 6,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 5,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 3,
      },
      {
        firstName: "Александр Магомедов",
        firstImage: "players/player-1.png",
        firstScore: 1,
        secondName: "Сергей Корнилов",
        secondImage: "players/player-2.png",
        secondScore: 8,
      },
    ],
  },
];
