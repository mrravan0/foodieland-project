import type { FC } from "react";
import RecipeCard from "../layout/RecipeCard";
import type { HomeRecipesProps } from "../../fake-data/home-data/HomeTypes";

const Recipes: FC<HomeRecipesProps> = ({ data }) => {
  return (
    <section>
      <div className="container-custom flex flex-col gap-y-25">
        <div className="flex flex-col items-center gap-y-6.25 text-center">
          <h1 className="text-custom-5xl font-semibold">
            Simple and tasty recipes
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut <br /> labore et dolore magna aliqut enim ad
            minim
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {data?.map((item) => (
            <RecipeCard
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
