import { Fragment, type FC } from "react";
import DetailsHero from "../components/details-components/details/DetailsHero";
import Ingredients from "../components/details-components/Ingredients/Ingredients";
import Directions from "../components/details-components/Directions";
import { homeRecipesData } from "../fake-data/home-data/HomeData";
import DetailsRecipe from "../components/details-components/DetailsRecipe";
import { recipeCardGlobalData } from "../fake-data/layout-data/LayoutData";
import * as DetailsData from "../fake-data/details-data/DetailsData";

const DetailsPage: FC = () => {
  return (
    <Fragment>
      <DetailsHero data={DetailsData.detailsHeroData} />
      <Ingredients
        data={DetailsData.detailsIngredientsData}
        sideInfo={homeRecipesData}
      />
      <Directions />
      <DetailsRecipe data={recipeCardGlobalData} />
    </Fragment>
  );
};

export default DetailsPage;
