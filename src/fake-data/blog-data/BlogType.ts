import type { ComponentType } from "react";

export type BlogBaseData = {
  title: string;
  description?: string;
  id: number;
  image: string | ComponentType;
  linearGradient?: string;
};

export type BlogInfoData = {
  date: string;
  personImage: string;
  personName: string;
};

export type BlogListProps = {
  data: (BlogBaseData & BlogInfoData)[];
};
