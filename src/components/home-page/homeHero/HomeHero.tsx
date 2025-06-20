import type { HomeHeroProps } from "../../../pages/home-page/HomeData";
import { type FC } from "react";
import HomeHeroOverlay from "./HomeHeroOverlay";

const HomeHero: FC<HomeHeroProps> = ({ info }) => {
  return (
    <section className="pt-10 pb-40">
      <div className="container-custom">
        <HomeHeroOverlay info={info} />
      </div>
    </section>
  );
};

export default HomeHero;
