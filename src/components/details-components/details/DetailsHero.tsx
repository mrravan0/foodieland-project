import { memo, type FC } from "react";
import { useLocation } from "react-router-dom";
import type { DetailsHeroProps } from "../../../fake-data/details-data/DetailsType";
import PrintIcon from "../../../svg/detailsIcons/PrintIcon";
import ShareIcon from "../../../svg/detailsIcons/ShareIcon";
import DetailsNutrition from "./DetailsNutrition";
import { detailsNutritionData } from "../../../fake-data/details-data/DetailsData";

const DetailsHero: FC<DetailsHeroProps> = memo(({ data }) => {
  const location = useLocation();
  const { state } = location;

  return (
    <section className="py-20">
      <div className="container-custom flex flex-col gap-y-15">
        <div className="max-tablet:flex-col max-tablet:gap-y-10 flex items-center justify-between">
          <div className="flex flex-col gap-y-12">
            <h1 className="text-custom-5xl">{state.title}</h1>
            <ul className="max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-10 flex items-center justify-between gap-2.5 max-[400px]:grid-cols-1">
              {data?.map((item) => (
                <li
                  className="not-first:after:bg-custom-grey-10 max-laptop:after:-left-1/3 max-mobile:after:content-none max-mobile:justify-evenly relative flex h-13 items-center gap-x-4 content-[''] after:absolute after:top-0 after:-left-1/2 after:h-full after:w-0.5"
                  key={item.id}
                >
                  {typeof item.image === "string" ? (
                    <img
                      src={item.image}
                      alt=""
                    />
                  ) : (
                    <item.image />
                  )}
                  <div className="flex flex-col gap-y-2">
                    <h2>{item.title}</h2>
                    <p>{item?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex cursor-pointer flex-col items-center gap-y-4 duration-300 hover:scale-105">
              <div className="bg-custom-blue flex size-20 items-center justify-center rounded-full">
                <PrintIcon />
              </div>
              <p>PRINT</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center gap-y-4 duration-300 hover:scale-105">
              <div className="bg-custom-blue flex size-20 items-center justify-center rounded-full">
                <ShareIcon />
              </div>
              <p>SHARE</p>
            </div>
          </div>
        </div>
        <DetailsNutrition
          dataImage={state.image}
          data={detailsNutritionData}
        />
        <p className="text-custom-grey-60 max-laptop-s:text-center pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
});

export default DetailsHero;
