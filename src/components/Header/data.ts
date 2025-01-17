import { PrizeIcon } from "../../svg/PrizeIcon";
import { HomeIcon } from "../../svg/HomeIcon";
import { StreamIcon } from "../../svg/StreamIcon";
import { ShopperIcon } from "../../svg/ShopperIcon";
import { OrganizationIcon } from "../../svg/OrganizationIcon";
import { UsersIcon } from "../../svg/UsersIcon";
import { UserIcon } from "../../svg/UserIcon";
import { PlusIcon } from "../../svg/PlusIcon";
import { WalletIcon } from "../../svg/WalletIcon";
import { TicketIcon } from "../../svg/TicketIcon";
import { DocumentIcon } from "../../svg/DocumentIcon";
import { PhoneIcon } from "../../svg/PhoneIcon";
import { ExitIcon } from "../../svg/ExitIcon";
import { RussiaIcon } from "../../svg/RussiaIcon";
import { BritainIcon } from "../../svg/BritainIcon";
import { GermanyIcon } from "../../svg/GermanyIcon";

export const navData = [
  { page: "header.nav.feed", icon: HomeIcon, url: "/" },
  { page: "header.nav.marketplace", icon: ShopperIcon, url: "marketplace" },
  { page: "header.nav.ratings", icon: UsersIcon, url: "ratings" },
  { page: "header.nav.competitions", icon: PrizeIcon, url: "competitions" },
  { page: "header.nav.organizations", icon: OrganizationIcon, url: "organizations" },
  { page: "header.nav.live", icon: StreamIcon, url: "streams" },
];

export const userData = [
  { section: "header.profile.profile", icon: UserIcon },
  { section: "header.profile.add_organization", icon: PlusIcon },
  { section: "header.profile.my_competitions", icon: PrizeIcon },
  { section: "header.profile.payments_history", icon: WalletIcon },
  { section: "header.profile.my_tickets", icon: TicketIcon },
  { section: "header.profile.get_license", icon: DocumentIcon },
  { section: "header.profile.change_phone_number", icon: PhoneIcon },
  { section: "header.profile.exit", icon: ExitIcon },
];

export const languageData = [
  { section: "EN", icon: BritainIcon },
  { section: "DE", icon: GermanyIcon },
  { section: "RU", icon: RussiaIcon },
];
