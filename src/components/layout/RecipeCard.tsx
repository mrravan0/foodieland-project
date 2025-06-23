import { useState, type FC } from "react";
import TimerIcon from "../../svg/TimerIcon";
import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import type { RecipesCardProps } from "../../fake-data/layout-data/Layout";
import HeartIcon from "../../svg/HeartIcon";

const RecipeCard: FC<RecipesCardProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  console.log(data);
  return (
    <div className="relative">
      <div
        className="absolute top-0 right-0 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white duration-300 hover:scale-105"
        onClick={() => setIsLiked(!isLiked)}
      >
        <HeartIcon status={isLiked} />
      </div>
      <div
        className="flex cursor-pointer flex-col gap-y-6 px-4 pt-4 pb-8 rounded-4xl"
        style={{ background: data.linearGradient }}
      >
        <img
          className="rounded-4xl"
          src={data.image}
          alt=""
        />
        <div className="flex flex-col gap-y-6">
          <h2 className="max-laptop:text-2xl text-3xl font-semibold">
            {data.title}
          </h2>
          <div className="flex items-center gap-x-6 font-light">
            <div className="flex items-center gap-x-2.5">
              <TimerIcon />
              <p>30 Minutes</p>
            </div>
            <div className="flex items-center gap-x-2.5">
              <ForkKnifeIcon />
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
