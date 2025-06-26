import { Fragment } from "react/jsx-runtime";
import HomeHero from "../../components/home-components/homeHero/HomeHero";
import * as HomeData from "../../fake-data/home-data/HomeData";
import Categories from "../../components/home-components/Categories";
import Recipes from "../../components/home-components/Recipes";
import Chef from "../../components/home-components/Chef";
import CheckOut from "../../components/home-components/check-out/CheckOut";

const HomePage = () => {
  return (
    <Fragment>
      <HomeHero
        data={HomeData.homeHeroData}
        info={HomeData.homeHeroInfo}
      />
      <Categories data={HomeData.homeCategoriesData} />
      <Recipes data={HomeData.homeRecipesData} />
      <Chef />
      <CheckOut data={HomeData.homeCheckOutData} />
    </Fragment>
  );
};

export default HomePage;
