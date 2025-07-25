import { useState, type FC } from "react";
import TimerIcon from "../../svg/TimerIcon";
import ForkKnifeIcon from "../../svg/ForkKnifeIcon";
import type { RecipesCardProps } from "../../fake-data/layout-data/LayoutType";
import HeartIcon from "../../svg/HeartIcon";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const RecipeCard: FC<RecipesCardProps> = ({ data }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate: NavigateFunction = useNavigate();

  const handleClick = () => {
    const headerEl = document.getElementById("main-header");
    if (headerEl) {
      headerEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setTimeout(() => {
      navigate("/details", { state: data });
    }, 50);
  };

  return (
    <div className="relative">
      <div
        className="absolute top-6 right-6 flex size-12 cursor-pointer items-center justify-center rounded-full bg-white duration-300 hover:scale-105"
        onClick={() => setIsLiked(!isLiked)}
      >
        <HeartIcon status={isLiked} />
      </div>
      <div
        className="flex h-full cursor-pointer flex-col gap-y-6 rounded-4xl px-4 pt-4 pb-8"
        style={{ background: data?.linearGradient }}
        onClick={handleClick}
      >
        <img
          className="rounded-4xl"
          src={data.image as string}
          alt=""
        />
        <div className="flex h-full flex-col justify-between gap-y-6">
          <h2 className="max-laptop-s:text-lg text-2xl">{data.title}</h2>
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
