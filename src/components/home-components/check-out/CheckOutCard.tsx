import type { FC } from "react";
import HeartIcon from "../../../svg/checkOutIcons/HeartIcon";
import CommentIcon from "../../../svg/checkOutIcons/CommentIcon";
import SaveIcon from "../../../svg/checkOutIcons/SaveIcon";
import type { HomeCheckOutCardProps } from "../../../fake-data/home-data/HomeTypes";
import MessengerIcon from "../../../svg/checkOutIcons/MessengerIcon";

const CheckOutCard: FC<HomeCheckOutCardProps> = ({ data }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-y-2.5 rounded-lg bg-white py-2.5 duration-300 hover:scale-95">
      <div className="flex items-center justify-between pr-3 pl-2.5">
        <div className="flex items-center gap-x-2.5">
          <img
            src="/home-page/homeCheckOut/photo1.png"
            alt=""
          />
          <div className="flex flex-col gap-y-1">
            <h2 className="font-semibold">Foodieland</h2>
            <p className="text-sm font-light">Tokyo,Japan</p>
          </div>
        </div>
        <div className="flex items-center gap-x-0.5">
          <span className="size-0.5 rounded-full bg-black"></span>
          <span className="size-0.5 rounded-full bg-black"></span>
          <span className="size-0.5 rounded-full bg-black"></span>
        </div>
      </div>
      <img
        src={data.image}
        alt=""
      />
      <div className="flex flex-col gap-y-2.5 pr-3 pl-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-3.5">
            <HeartIcon />
            <CommentIcon />
            <MessengerIcon />
          </div>
          <SaveIcon />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-x-1.25">
            <img
              className="size-5"
              src="/home-page/homeCheckOut/photo2.png"
              alt=""
            />
            <p className="grow text-sm">
              Liked by
              <span className="font-bold"> {data.title}</span>
              and
              <span className="font-bold">44,686</span>
            </p>
          </div>
          <p>
            <span className="font-semibold">Foodieland.</span>
            {data.description}
          </p>
        </div>
        <p className="text-custom-grey-40">September,19</p>
      </div>
    </div>
  );
};

export default CheckOutCard;
