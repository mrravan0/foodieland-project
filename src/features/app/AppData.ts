interface LayoutData {
  title: string;
  to?: string;
  id: string;
}

export const layoutData: LayoutData[] = [
  {
    title: "Home",
    to: "/",
    id: "1",
  },
  {
    title: "Recipes",
    to: "/recipe",
    id: "2",
  },
  {
    title: "Blog",
    to: "/blog",
    id: "3",
  },
  {
    title: "Contact",
    id: "4",
  },
  {
    title: "About us",
    id: "5",
  },
];

export type HeaderProps = { data: LayoutData[], property?: string };
