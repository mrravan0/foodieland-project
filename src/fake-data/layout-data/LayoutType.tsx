import type { Dispatch, SetStateAction } from "react";
import type { ComponentType } from "react";

export type LayoutData = {
  title: string;
  to: string;
  id: string;
};

export type LayoutProps = {
  data: LayoutData[];
  property?: string;
  isClicked?: Dispatch<SetStateAction<boolean>>;
};

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
