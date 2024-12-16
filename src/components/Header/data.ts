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
import { FranceIcon } from "../../svg/FranceIcon";

export const navData = [
  { page: "Лента", icon: HomeIcon, url: "/" },
  { page: "Маркетплейс", icon: ShopperIcon, url: "marketplace" },
  { page: "Рейтинги", icon: UsersIcon, url: "ratings" },
  { page: "Соревнования", icon: PrizeIcon, url: "competitions" },
  { page: "Организации", icon: OrganizationIcon, url: "organizations" },
  { page: "Live", icon: StreamIcon, url: "streams" },
];

export const userData = [
  { section: "Профиль", icon: UserIcon },
  { section: "Добавить организацию", icon: PlusIcon },
  { section: "Мои соревнования", icon: PrizeIcon },
  { section: "История платежей", icon: WalletIcon },
  { section: "Мои билеты", icon: TicketIcon },
  { section: "Получить лицензию", icon: DocumentIcon },
  { section: "Смена номера телефона", icon: PhoneIcon },
  { section: "Выйти", icon: ExitIcon },
];

export const languageData = [
  { section: "RU", icon: RussiaIcon },
  { section: "EN", icon: BritainIcon },
  { section: "FR", icon: FranceIcon },
];
