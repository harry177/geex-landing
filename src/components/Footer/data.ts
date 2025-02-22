import { InfoLineTypes } from "../ui/DotInfoLine/DotInfoLine";

export const footerPageData = [
  {
    title: "footer.pages.feed.title",
    sections: [
      "footer.pages.feed.last_news",
      "footer.pages.feed.my_subscribtions",
      "footer.pages.feed.competitions_list",
      "footer.pages.feed.marketplace",
    ],
    url: "/",
  },
  {
    title: "footer.pages.ratings.title",
    sections: [
      "footer.pages.ratings.sportsmen",
      "footer.pages.ratings.referees",
      "footer.pages.ratings.trainers",
      "footer.pages.ratings.viewers",
    ],
    url: "/ratings",
  },
  {
    title: "footer.pages.competitions.title",
    sections: [
      "footer.pages.competitions.upcoming",
      "footer.pages.competitions.current",
      "footer.pages.competitions.past",
    ],
    url: "/competitions",
  },
  { title: "footer.pages.organizations.title", url: "/organizations" },
  {
    title: "footer.pages.my_profile.title",
    sections: [
      "footer.pages.my_profile.my_competitions",
      "footer.pages.my_profile.payments_history",
      "footer.pages.my_profile.my_tickets",
      "footer.pages.my_profile.license",
      "footer.pages.my_profile.settings",
    ],
    url: "/profile"
  },
];

export const footerInfoData: InfoLineTypes[] = [
  { content: "footer.info.conditions.copyright", color: "light" },
  { content: "footer.info.conditions.terms_of_use", color: "light" },
  { content: "footer.info.conditions.privacy_policy", color: "light" },
  { content: "footer.info.conditions.our_advertising", color: "light" },
];
