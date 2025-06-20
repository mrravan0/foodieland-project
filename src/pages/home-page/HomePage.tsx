import { Fragment } from "react/jsx-runtime";
import HomeHero from "../../components/home-page/homeHero/HomeHero";
import * as HomeData from './HomeData';

const HomePage = () => {
  return (
    <Fragment>
      <HomeHero info={HomeData.homeHeroInfo}/>
    </Fragment>
  );
};

export default HomePage;
