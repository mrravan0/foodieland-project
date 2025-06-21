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

export type HomeHeroInfo = HomeBaseData & HomeWithIcon;
export type HomeHeroData = HomeBaseData & HomeWithDescription;
export type HomeCategories = HomeBaseData & HomeWithMedia;

export type HomeHeroOverlayProps = {
  data: HomeHeroData;
  info: HomeHeroInfo[];
};
export type HomeHeroProps = {
  data: HomeHeroData[];
  info: HomeHeroInfo[];
};
export type HomeCategoriesProps = {
  data: HomeCategories[];
};
