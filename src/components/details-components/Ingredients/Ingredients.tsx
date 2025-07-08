import { memo, type FC } from "react";
import type { DetailsIngredientsProps } from "../../../fake-data/details-data/DetailsType";
import IngredientsInfo from "./IngredientsBottom";
import ListCard from "../../layout/ListCard";

const Ingredients: FC<DetailsIngredientsProps> = memo(({ data, sideInfo }) => {
  return (
    <section className="pb-3">
      <div className="container-custom flex flex-col gap-y-7.5">
        <div className="max-laptop-s:flex-col-reverse max-laptop-s:gap-y-20 flex items-start justify-between gap-x-5">
          <IngredientsInfo
            data={data}
            features={{ titleName: "For main dish", status: true }}
          />
          <ListCard data={sideInfo} />
        </div>
        <div className="max-tablet:flex-col-reverse max-laptop-s:gap-y-20 flex items-center justify-between gap-x-5">
          <IngredientsInfo
            data={data}
            features={{ titleName: "For the sauce", status: false }}
          />
          <div className="max-tablet:w-full max-tablet:px-0 flex grow flex-col items-center rounded-2xl bg-[linear-gradient(180deg,rgba(53,115,85,1)_0%,rgba(29,72,59,1)_100%)] p-10">
            <h4 className="text-custom-4xl text-center text-white">
              Don’t forget to eat <br /> healthy food
            </h4>
            <img
              src="/details-page/photo1.png"
              alt=""
            />
            <p className="text-custom-white-60">www.foodieland.com</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Ingredients;
