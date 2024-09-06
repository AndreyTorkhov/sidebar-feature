import {
  LucideIcon,
  User,
  Contact,
  MessageSquare,
  Newspaper,
  Settings2,
  DoorOpen,
} from "lucide-react";

export interface IMenuItem {
  icon: LucideIcon;
  name: string;
  link: string;
}

export const MENU: IMenuItem[] = [
  {
    icon: User,
    name: "Home",
    link: "./home",
  },
  {
    icon: MessageSquare,
    name: "Messages",
    link: "./messages",
  },
  {
    icon: Contact,
    name: "Friends",
    link: "./friends",
  },
  {
    icon: Newspaper,
    name: "News",
    link: "./news",
  },
  {
    icon: Settings2,
    name: "Settings",
    link: "./settings",
  },
  {
    icon: DoorOpen,
    name: "Out",
    link: "./out",
  },
];
