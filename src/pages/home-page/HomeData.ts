import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import TimerIcon from "../../svg/TimerIcon";
import type { ComponentType } from "react";

interface HomeData {
  title: string;
  Icon: ComponentType;
  id: string;
}

export const homeHeroInfo: HomeData[] = [
  {
    title: "30 Minutes",
    Icon: TimerIcon,
    id: "1",
  },
  {
    title: "Chicken",
    Icon: ForkKnifeIcon,
    id: "2",
  },
];

export type HomeHeroProps = { info: HomeData[] };
