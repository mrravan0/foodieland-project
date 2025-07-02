import type { FC } from "react";
import type { DetailsNutritionProps } from "../../fake-data/details-data/DetailsType";

const DetailsNutrition: FC<DetailsNutritionProps> = ({ dataImage, data }) => {
  return (
    <div className="max-laptop-s:flex-col-reverse max-laptop-s:items-center max-laptop-s:gap-y-15 flex justify-between gap-x-10">
      <img
        className="max-laptop-s:max-w-200 max-laptop-s:w-full w-full rounded-4xl"
        src={dataImage}
        alt=""
      />
      <div className="bg-custom-blue flex w-full min-laptop-s:max-w-120 flex-col justify-between gap-y-10 rounded-4xl p-8">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-custom-4xl">Nutrition Information</h3>
          <ul className="flex flex-col gap-y-4">
            {data?.map((item) => (
              <li
                className="border-custom-grey-10 flex items-center justify-between border-b border-solid pb-4"
                key={item.id}
              >
                <p className="text-custom-grey-40">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-custom-grey-40 text-center">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default DetailsNutrition;
