import type { ComponentType } from "react";

export type DetailsBaseData = {
  title: string;
  description?: string;
  id: number;
};

export type DetailsWithIcon = {
  image: string | ComponentType;
  linearGradient?: string;
};

export type DetailsHeroProps = {
  data: (DetailsBaseData & DetailsWithIcon)[];
};

export type DetailsNutritionProps = {
  dataImage: string;
  data: DetailsBaseData[];
};

export type DetailsIngredientsProps = {
  data: DetailsBaseData[];
  sideInfo: (DetailsBaseData & DetailsWithIcon)[];
};

export type DetailsIngredientsInfoProps = {
  data: DetailsBaseData[];
  features: { titleName: string; status: boolean };
};

export type DetailsRecipeProps = {
  data: (DetailsBaseData & DetailsWithIcon)[];
};
