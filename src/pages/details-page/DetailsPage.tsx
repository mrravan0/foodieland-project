import { Fragment, type FC } from "react";
import DetailsHero from "../../components/details-components/DetailsHero";
import * as DetailsData from "../../fake-data/details-data/DetailsData";
import Ingredients from "../../components/details-components/Ingredients/Ingredients";
import { homeRecipesData } from "../../fake-data/home-data/HomeData";

const DetailsPage: FC = () => {
  return (
    <Fragment>
      <DetailsHero data={DetailsData.detailsHeroData} />
      <Ingredients
        data={DetailsData.detailsIngredientsData}
        sideInfo={homeRecipesData}
      />
    </Fragment>
  );
};

export default DetailsPage;
