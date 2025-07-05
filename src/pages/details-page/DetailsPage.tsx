import { Fragment, type FC } from "react";
import DetailsHero from "../../components/details-components/DetailsHero";
import Ingredients from "../../components/details-components/Ingredients/Ingredients";
import Directions from "../../components/details-components/Directions";
import { homeRecipesData } from "../../fake-data/home-data/HomeData";
import * as DetailsData from "../../fake-data/details-data/DetailsData";

const DetailsPage: FC = () => {
  return (
    <Fragment>
      <DetailsHero data={DetailsData.detailsHeroData} />
      <Ingredients
        data={DetailsData.detailsIngredientsData}
        sideInfo={homeRecipesData}
      />
      <Directions />
    </Fragment>
  );
};

export default DetailsPage;
