import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import TimerIcon from "../../svg/TimerIcon";
import type { ComponentType } from "react";

export interface HomeInfo {
  title: string;
  Icon?: ComponentType;
  id: string;
}

export interface HomeData {
  description: string;
  userName?: string;
}

export const homeHeroInfo: HomeInfo[] = [
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

export const homeHeroData: (HomeInfo & HomeData)[] = [
  {
    title: "Spicy delicious chicken wings",
    description:
      "   Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    userName: "John Smith",
    id: "1",
  },
  {
    title: "Spicy delicious chicken meals",
    description:
      "Another Lorem,Just wanted to create another one, Lorem ipsum dolor sit amet, consectetuipisicing elit",
    userName: "Alex Franklyn",
    id: "2",
  },
  {
    title: "Spicy delicious chicken porks",
    description:
      "Another Lorem,Just wanted to create another one, Lorem ipsum dolor sit amet, consectetuipisicing elit",
    userName: "Joseph Franklyn",
    id: "3",
  },
];
