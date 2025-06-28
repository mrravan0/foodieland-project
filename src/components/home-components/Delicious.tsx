import type { FC } from "react";
import RecipeCard from "../layout/RecipeCard";
import type { HomeDeliciousProps } from "../../fake-data/home-data/HomeTypes";

const Delicious: FC<HomeDeliciousProps> = ({ data }) => {
  return (
    <section className="py-40">
      <div className="container-custom flex flex-col gap-y-25">
        <div className="max-tablet:gap-y-10 max-tablet:flex-col max-tablet:text-center flex items-center justify-between gap-x-5">
          <h1 className="text-custom-5xl">
            Try this delicious recipe
            <br />
            to make your day
          </h1>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor
            <br />
            incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className="max-tablet:grid-cols-2 max-mobile:grid-cols-1 grid grid-cols-4 gap-3">
          {data?.map((item) => <RecipeCard data={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
};

export default Delicious;
