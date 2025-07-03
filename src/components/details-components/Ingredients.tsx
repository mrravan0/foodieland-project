import { memo, useState, type FC } from "react";
import CheckIcon from "../../svg/detailsIcons/CheckIcon";
import type { DetailsIngredientsProps } from "../../fake-data/details-data/DetailsType";

const Ingredients: FC<DetailsIngredientsProps> = memo(({ data, sideInfo }) => {
  const [isChecked, setIsChecked] = useState(false);

  let randomNumbers: number[] = [];
  while (randomNumbers.length < 3) {
    const rand = Math.floor(Math.random() * 8);
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand);
    }
  }

  return (
    <section className="pb-3">
      <div className="container-custom flex flex-col">
        <div className="max-laptop-s:flex-col-reverse flex items-start justify-between gap-x-5 max-laptop-s:gap-y-20">
          <div className="flex w-full max-w-287.5 grow flex-col gap-y-12">
            <h1 className="max-laptop:text-3xl text-[36px]">Ingredients</h1>
            <div className="flex flex-col max-mobile-s:items-center">
              <h2 className="text-custom-4xl">For main dish</h2>
              <ul>
                {data?.map((item) => (
                  <li
                    className="border-custom-grey-10 flex items-center gap-x-6 border-b border-solid py-7.5 max-mobile-s:justify-center"
                    key={item.id}
                  >
                    <div
                      className={`border-custom-grey-10 flex size-6 cursor-pointer items-center justify-center rounded-full border border-solid duration-300 hover:scale-105 ${isChecked ? "bg-black" : "bg-white"}`}
                      onClick={() => setIsChecked(!isChecked)}
                    >
                      {isChecked && <CheckIcon />}
                    </div>
                    <p> Lorem ipsum dolor sit amet</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-y-8 max-laptop-s:w-full">
            <h1 className="max-laptop:text-3xl text-[36px]">Other Recipe</h1>
            <ul className="max-laptop-s:grid max-laptop-s:grid-cols-2 flex flex-col gap-6 max-mobile:grid-cols-1">
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
                    <h2 className="font-semibold ">{sideInfo[item].title}</h2>
                    <p className="text-custom-grey-60">By Andreas Paula</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Ingredients;
