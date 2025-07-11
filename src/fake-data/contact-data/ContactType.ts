import type { LayoutBaseData } from "../layout-data/LayoutType";

export type ContactBase = {
  title: string;
  description?: string[];
  id: number;
};

export type ContactWithInput = {
  status: boolean;
  type: string;
  placeholder: string;
};

export type ContactFormProps = {
  data: (ContactBase & ContactWithInput)[];
  sideInfo: LayoutBaseData[];
};
