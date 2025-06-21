import { Fragment } from "react/jsx-runtime";
import HomeHero from "../../components/home-page/homeHero/HomeHero";
import * as HomeData from "./HomeData";
import Categories from "../../components/home-page/categories/categories";

const HomePage = () => {
  return (
    <Fragment>
      <HomeHero
        data={HomeData.homeHeroData}
        info={HomeData.homeHeroInfo}
      />
      <Categories data={HomeData.homeCategories}/>
    </Fragment>
  );
};

export default HomePage;
