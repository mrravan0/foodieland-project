import type { FC } from "react";
import type { ListCardProps } from "../../fake-data/layout-data/LayoutType";

const ListCard: FC<ListCardProps> = ({ data }) => {
  let randomNumbers: number[] = [];
  while (randomNumbers.length < 3) {
    const rand = Math.floor(Math.random() * 8);
    if (!randomNumbers.includes(rand)) {
      randomNumbers.push(rand);
    }
  }

  return (
    <div className="max-laptop-s:w-full flex flex-col gap-y-8">
      <h1 className="max-laptop:text-3xl text-[36px]">Other Recipe</h1>
      <ul className="max-laptop-s:grid max-laptop-s:grid-cols-2 max-mobile:grid-cols-1 flex flex-col gap-6">
        {randomNumbers.map((item) => (
          <li
            className="flex items-center gap-6 max-[450px]:flex-col max-[450px]:text-center"
            key={data[item].id}
          >
            <img
              className="w-full max-w-50 rounded-4xl"
              src={data[item].image as string}
              alt=""
            />
            <div className="flex flex-col gap-y-4">
              <h2 className="font-semibold">{data[item].title}</h2>
              <p className="text-custom-grey-60">By Andreas Paula</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
