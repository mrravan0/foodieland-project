import type { FC } from "react";
import type { DetailsRecipeProps } from "../../fake-data/details-data/DetailsType";
import RecipeCard from "../layout/RecipeCard";

const DetailsRecipe: FC<DetailsRecipeProps> = ({ data }) => {
  return (
    <section className="py-40">
      <div className="container-custom flex flex-col gap-y-20">
        <h1 className="max-mobile:text-center text-5xl font-bold">
          You may like these recipe too
        </h1>
        <div className="max-laptop-s:grid-cols-2 max-mobile:grid-cols-1 grid grid-cols-4 gap-10">
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

export default DetailsRecipe;
