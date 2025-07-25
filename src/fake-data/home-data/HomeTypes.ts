import type { ComponentType } from "react";

export type HomeBaseData = {
  title: string;
  id: number;
};

export type HomeWithIcon = {
  Icon: ComponentType;
};

export type HomeWithMedia = {
  linearGradient?: string;
  image: string;
};

export type HomeWithDescription = {
  description: string;
  userName?: string;
};

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

export type HomeRecipesProps = {
  data: (HomeMedia & HomeWithDescription)[];
};

export type HomeCheckOutProps = {
  data: (HomeDescription & HomeWithMedia)[];
};

export type HomeCheckOutCardProps = {
  data: (HomeDescription & HomeWithMedia);
};

export type HomeDeliciousProps = {
  data:(HomeDescription & HomeWithMedia)[]
}