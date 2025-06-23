import type { FC } from "react";
import PlayButtonIcon from "../../../svg/PlayButtonIcon";
import type { HomeHeroOverlayProps } from "../../../fake-data/home-data/HomeTypes";

const HomeHeroOverlay: FC<HomeHeroOverlayProps> = ({ data, info }) => {
  return (
    <div className="bg-custom-blue flex justify-between rounded-4xl">
      <div className="flex flex-col justify-between p-12.5">
        <div className="flex flex-col gap-y-7.5">
          <div className="max-laptop:max-w-40 flex w-full max-w-52.5 justify-center gap-x-3.5 rounded-4xl bg-white py-2.5">
            <img
              src="/home-page/homeHero/photo2.png"
              alt=""
            />
            <p className="font-semibold">Hot Recipes</p>
          </div>
          <div className="flex flex-col gap-y-6.25">
            <h1 className="text-[64px] font-semibold">{data.title}</h1>
            <p className="text-custom-grey-60">{data.description}</p>
          </div>
          <div className="text-custom-grey-60 flex items-center gap-x-4">
            {info?.map((item) => {
              const Icon = item.Icon!;
              return (
                <div
                  className="flex cursor-pointer items-center gap-x-2.5 rounded-4xl bg-[rgba(0,0,0,0.05)] px-4 py-2 duration-300 hover:scale-95"
                  key={item.id}
                >
                  <Icon />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-between">
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
          <button className="flex items-center justify-center gap-x-4 rounded-2xl bg-black px-9 py-4 font-semibold text-white">
            View Recipes
            <PlayButtonIcon />
          </button>
        </div>
      </div>
      <img
        className="cursor-pointer rounded-4xl duration-300 hover:scale-105"
        src="/home-page/homeHero/photo1.png"
        alt=""
      />
    </div>
  );
};

export default HomeHeroOverlay;
