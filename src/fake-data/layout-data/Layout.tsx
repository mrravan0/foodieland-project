import type { ComponentType } from "react";

type LayoutBaseData = {
  title: string;
  description?: string;
  id: number;
  image: string | ComponentType;
  linearGradient?: string;
};

export type RecipesCardProps = {
  data: LayoutBaseData;
};
