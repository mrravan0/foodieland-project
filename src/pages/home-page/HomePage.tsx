import { Fragment } from "react/jsx-runtime";
import HomeHero from "../../components/home-page/homeHero/HomeHero";
import * as HomeData from "../../fake-data/home-data/HomeData";
import Categories from "../../components/home-page/Categories";
import Recipes from "../../components/home-page/Recipes";
import Chef from "../../components/home-page/Chef";

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
    </Fragment>
  );
};

export default HomePage;
