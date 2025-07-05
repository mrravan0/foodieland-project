import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import TimerIcon from "../../svg/TimerIcon";
import type { DetailsBaseData, DetailsWithIcon } from "./DetailsType";

export const detailsHeroData: (DetailsBaseData & DetailsWithIcon)[] = [
  {
    title: "John Smith",
    description: "15 March 2022",
    image: "/home-page/homeHero/photo3.png",
    id: 1,
  },
  {
    title: "PREP TIME",
    description: "15 Minutes",
    image: TimerIcon,
    id: 2,
  },
  {
    title: "John Smith",
    description: "15 Minutes",
    image: TimerIcon,
    id: 3,
  },
  {
    title: "John Smith",
    image: ForkKnifeIcon,
    id: 4,
  },
];

export const detailsNutritionData: DetailsBaseData[] = [
  { title: "Calories", description: "219.9 kcal", id: 1 },
  { title: "Total Fat", description: "10.7 g", id: 2 },
  { title: "Protein", description: "7.9 g", id: 3 },
  { title: "Cholesterol", description: "37.4 mg", id: 4 },
];

export const detailsIngredientsData: DetailsBaseData[] = [
  { title: "Lorem ipsum dolor sit amet", id: 1 },
  { title: "Lorem ipsum dolor sit amet", id: 2 },
  { title: "Lorem ipsum dolor sit amet", id: 3 },
  { title: "Lorem ipsum dolor sit amet", id: 4 },
  { title: "Lorem ipsum dolor sit amet", id: 5 },
];

export const detailsRecipeData: (DetailsBaseData & DetailsWithIcon)[] = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "/home-page/homeDelicious/photo1.png",
    description: "Snack",
    id: 1,
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/home-page/homeDelicious/photo2.png",
    description: "Healthy",
    id: 2,
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/home-page/homeDelicious/photo3.png",
    description: "Western",
    id: 3,
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "/home-page/homeDelicious/photo4.png",
    description: "Eastern",
    id: 4,
  },
];
