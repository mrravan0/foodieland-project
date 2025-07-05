import type { FC } from "react";
import type { DetailsRecipeProps } from "../../fake-data/details-data/DetailsType";
import RecipeCard from "../layout/RecipeCard";

const DetailsRecipe: FC<DetailsRecipeProps> = ({ data }) => {
  return (
    <section className="py-40">
      <div className="container-custom flex flex-col gap-y-20">
        <h1 className="text-5xl font-bold max-mobile:text-center">You may like these recipe too</h1>
        <div className="grid grid-cols-4 gap-10 max-laptop-s:grid-cols-2 max-mobile:grid-cols-1">
          {data?.map((item) => <RecipeCard data={item} />)}
        </div>
      </div>
    </section>
  );
};

export default DetailsRecipe;
