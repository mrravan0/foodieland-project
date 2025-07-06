import type { Dispatch, SetStateAction } from "react";
import type { ComponentType } from "react";

export type LayoutData = {
  title: string;
  to: string;
  id: string;
};

type LayoutBaseData = {
  title: string;
  description?: string;
  id: number;
  image: string | ComponentType;
  linearGradient?: string;
};

type LayoutInfoData = {
  date: string;
  personImage: string;
  personName: string;
};

export type LayoutProps = {
  data: LayoutData[];
  property?: string;
  isClicked?: Dispatch<SetStateAction<boolean>>;
};

export type RecipesCardProps = {
  data: LayoutBaseData;
};

export type BlogCardProps = {
  data: LayoutBaseData & LayoutInfoData;
};
