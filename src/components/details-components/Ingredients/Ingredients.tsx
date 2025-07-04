import { memo, type FC } from "react";
import type { DetailsIngredientsProps } from "../../../fake-data/details-data/DetailsType";
import IngredientsInfo from "./IngredientsBottom";

const Ingredients: FC<DetailsIngredientsProps> = memo(({ data, sideInfo }) => {
  let randomNumbers: number[] = [];
  while (randomNumbers.length < 3) {
    const rand = Math.floor(Math.random() * 8);
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand);
    }
  }

  return (
    <section className="pb-3">
      <div className="container-custom flex flex-col gap-y-7.5">
        <div className="max-laptop-s:flex-col-reverse max-laptop-s:gap-y-20 flex items-start justify-between gap-x-5">
          <IngredientsInfo
            data={data}
            features={{ titleName: "For main dish", status: true }}
          />
          <div className="max-laptop-s:w-full flex flex-col gap-y-8">
            <h1 className="max-laptop:text-3xl text-[36px]">Other Recipe</h1>
            <ul className="max-laptop-s:grid max-laptop-s:grid-cols-2 max-mobile:grid-cols-1 flex flex-col gap-6">
              {randomNumbers.map((item) => (
                <li
                  className="flex items-center gap-6 max-[450px]:flex-col max-[450px]:text-center"
                  key={sideInfo[item].id}
                >
                  <img
                    className="w-full max-w-50 rounded-4xl"
                    src={sideInfo[item].image as string}
                    alt=""
                  />
                  <div className="flex flex-col gap-y-4">
                    <h2 className="font-semibold">{sideInfo[item].title}</h2>
                    <p className="text-custom-grey-60">By Andreas Paula</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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
