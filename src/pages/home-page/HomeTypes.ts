import type { ComponentType } from "react";

interface HomeBaseData {
  title: string;
  id: string;
}

interface HomeWithIcon {
  Icon: ComponentType;
}

interface HomeWithMedia {
  linearGradient: string;
  image: string;
}

interface HomeWithDescription {
  description: string;
  userName?: string;
}

export type HomeInfo = HomeBaseData & HomeWithIcon;
export type HomeDescription = HomeBaseData & HomeWithDescription;
export type HomeMedia = HomeBaseData & HomeWithMedia;

export type HomeHeroOverlayProps = {
  data: HomeDescription;
  info: HomeInfo[];
};
export type HomeHeroProps = {
  data: HomeDescription[];
  info: HomeInfo[];
};
export type HomeCategoriesProps = {
  data: HomeMedia[];
};
