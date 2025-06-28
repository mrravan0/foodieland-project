import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import TimerIcon from "../../svg/TimerIcon";
import * as HomeTypes from "./HomeTypes";

export const homeHeroInfo: HomeTypes.HomeInfo[] = [
  {
    title: "30 Minutes",
    Icon: TimerIcon,
    id: "1",
  },
  {
    title: "Chicken",
    Icon: ForkKnifeIcon,
    id: "2",
  },
];

export const homeHeroData: HomeTypes.HomeDescription[] = [
  {
    title: "Spicy delicious chicken wings",
    description:
      "   Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    userName: "John Smith",
    id: "1",
  },
  {
    title: "Spicy delicious chicken meals",
    description:
      "Another Lorem,Just wanted to create another one, Lorem ipsum dolor sit amet, consectetuipisicing elit",
    userName: "Alex Franklyn",
    id: "2",
  },
  {
    title: "Spicy delicious chicken porks",
    description:
      "Another Lorem,Just wanted to create another one, Lorem ipsum dolor sit amet, consectetuipisicing elit",
    userName: "Joseph Franklyn",
    id: "3",
  },
];

export const homeCategoriesData: HomeTypes.HomeMedia[] = [
  {
    title: "Breakfast",
    linearGradient:
      "linear-gradient(180deg,rgba(112, 130, 70, 0) 0%, rgba(112, 130, 70, 0.1) 100%)",
    image: "/home-page/homeCategories/photo1.png",
    id: "1",
  },
  {
    title: "Vegan",
    linearGradient:
      "linear-gradient(180deg,rgba(108, 198, 63, 0) 0%, rgba(108, 198, 63, 0.1) 100%)",
    image: "/home-page/homeCategories/photo2.png",
    id: "2",
  },
  {
    title: "Meat",
    linearGradient:
      "linear-gradient(180deg,rgba(204, 38, 27, 0) 0%, rgba(204, 38, 27, 0.1) 100%)",
    image: "/home-page/homeCategories/photo3.png",
    id: "3",
  },
  {
    title: "Dessert",
    linearGradient:
      "linear-gradient(180deg,rgba(240, 158, 0, 0) 0%, rgba(240, 158, 0, 0.1) 100%)",
    image: "/home-page/homeCategories/photo4.png",
    id: "4",
  },
  {
    title: "Lunch",
    linearGradient:
      "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)",
    image: "/home-page/homeCategories/photo5.png",
    id: "5",
  },
  {
    title: "Chocolate",
    linearGradient:
      "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)",
    image: "/home-page/homeCategories/photo6.png",
    id: "6",
  },
];

export const homeRecipesData: (HomeTypes.HomeMedia &
  HomeTypes.HomeWithDescription)[] = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo1.png",
    description: "Snack",
    id: "1",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo2.png",
    description: "Fish",
    id: "2",
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo3.png",
    description: "Breakfast",
    id: "3",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo4.png",
    description: "Healthy",
    id: "4",
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo5.png",
    description: "Meat",
    id: "5",
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo6.png",
    description: "Snack",
    id: "6",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo2.png",
    description: "Fish",
    id: "7",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo4.png",
    description: "Healthy",
    id: "8",
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    linearGradient:
      "linear-gradient(180deg,rgba(231, 249, 253, 0) 0%, rgba(231, 249, 253, 1) 100%)",
    image: "/home-page/homeRecipes/photo1.png",
    description: "Snack",
    id: "9",
  },
];

export const homeCheckOutData: (HomeTypes.HomeDescription &
  HomeTypes.HomeWithMedia)[] = [
  {
    title: "craig_love",
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    image: "/home-page/homeCheckOut/photo3.png",
    id: "1",
  },
  {
    title: "result__12",
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    image: "/home-page/homeCheckOut/photo4.png",
    id: "2",
  },
  {
    title: "mr_elliot",
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    image: "/home-page/homeCheckOut/photo5.png",
    id: "3",
  },
  {
    title: "craig_love",
    description:
      "The vegetables dishes need to have certain vitamin for those people",
    image: "/home-page/homeCheckOut/photo6.png",
    id: "4",
  },
];

export const homeDeliciousData: (HomeTypes.HomeMedia &
  HomeTypes.HomeWithDescription)[] = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "/home-page/homeDelicious/photo1.png",
    description: "Snack",
    id: "1",
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/home-page/homeDelicious/photo2.png",
    description: "Healthy",
    id: "2",
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/home-page/homeDelicious/photo3.png",
    description: "Western",
    id: "3",
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "/home-page/homeDelicious/photo4.png",
    description: "Eastern",
    id: "4",
  },
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "/home-page/homeDelicious/photo1.png",
    description: "Snack",
    id: "1",
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/home-page/homeDelicious/photo2.png",
    description: "Healthy",
    id: "2",
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/home-page/homeDelicious/photo3.png",
    description: "Western",
    id: "3",
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "/home-page/homeDelicious/photo4.png",
    description: "Eastern",
    id: "4",
  },
];
