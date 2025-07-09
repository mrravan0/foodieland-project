export type PostBase = {
  title: string;
  description: string;
  id: number;
};

export type PostInfoProps = {
  data: PostBase[];
};
