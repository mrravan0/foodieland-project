import { useState, type FC } from "react";
import PlayButtonIcon from "../../../svg/PlayButtonIcon";
import useMediaQuery from "../../../hooks/UseMediaQuery";
import type { HomeHeroOverlayProps } from "../../../fake-data/home-data/HomeTypes";

const HomeHeroOverlay: FC<HomeHeroOverlayProps> = ({ data, info }) => {
  const [isClicked,setIsClicked] = useState(false);
  const isMobileS = useMediaQuery(550.9, "max");
  return (
    <div className="bg-custom-blue max-laptop-s:items-center max-tablet:flex-col-reverse max-tablet:p-4 flex justify-between rounded-4xl max-mobile-s:gap-y-10">
      {isMobileS && !isClicked ? (
        <button className="button-custom" onClick={() => setIsClicked(true)}>Read more...</button>
      ) : (
        <div className="max-tablet:p-4 flex w-full flex-col justify-between gap-y-15 p-12.5">
          <div className="flex flex-col gap-y-7.5">
            <div className="max-laptop:max-w-40 flex w-full max-w-52.5 justify-center gap-x-3.5 rounded-4xl bg-white py-2.5">
              <img
                src="/home-page/homeHero/photo2.png"
                alt=""
              />
              <p className="font-semibold">Hot Recipes</p>
            </div>
            <div className="flex flex-col gap-y-6.25">
              <h1 className="text-custom-5xl max-laptop-s:text-3xl font-semibold">
                {data.title}
              </h1>
              <p className="text-custom-grey-60">{data.description}</p>
            </div>
            <div className="text-custom-grey-60 flex items-center gap-x-4">
              {info?.map((item) => {
                return (
                  <div
                    className="flex cursor-pointer items-center gap-x-2.5 rounded-4xl bg-[rgba(0,0,0,0.05)] px-4 py-2 duration-300 hover:scale-95"
                    key={item.id}
                  >
                    <item.Icon />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-laptop-s:flex-col max-laptop-s:gap-y-5 flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <img
                src="/home-page/homeHero/photo3.png"
                alt=""
              />
              <div className="flex flex-col gap-y-2">
                <p className="font-bold">{data.userName}</p>
                <p>15 March 2022</p>
              </div>
            </div>
            <button className="button-custom max-laptop:max-w-50 max-w-66.5 gap-x-4">
              View Recipes
              <PlayButtonIcon />
            </button>
          </div>
        </div>
      )}
      <img
        className="max-laptop-s:max-w-150 w-full cursor-pointer rounded-4xl duration-300 hover:scale-105"
        src="/home-page/homeHero/photo1.png"
        alt=""
      />
    </div>
  );
};

export default HomeHeroOverlay;
