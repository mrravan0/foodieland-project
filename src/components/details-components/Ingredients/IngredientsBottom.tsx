import { useState, type FC } from "react";
import type { DetailsIngredientsInfoProps } from "../../../fake-data/details-data/DetailsType";
import CheckIcon from "../../../svg/detailsIcons/CheckIcon";

const IngredientsInfo: FC<DetailsIngredientsInfoProps> = ({
  data,
  features,
}) => {
  const [isChecked, setIsChecked] = useState<Set<number>>(new Set());

  const toggleCheck = (id: number) => {
    setIsChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return (
    <div className="flex w-full max-w-287.5 grow flex-col gap-y-12">
      {features.status && (
        <h1 className="max-laptop:text-3xl text-[36px]">Ingredients</h1>
      )}
      <div className="max-mobile-s:items-center flex flex-col">
        <h2 className="text-custom-4xl">{features.titleName}</h2>
        <ul>
          {data.map((item) => {
            const checked = isChecked.has(item.id);
            return (
              <li
                key={item.id}
                className="border-custom-grey-10 flex items-center gap-x-6 border-b border-solid py-7.5"
              >
                <div
                  onClick={() => toggleCheck(item.id)}
                  className={`border-custom-grey-10 flex size-6 cursor-pointer items-center justify-center rounded-full border border-solid duration-300 hover:scale-105 ${checked ? "bg-black" : "bg-white"} `}
                >
                  {checked && <CheckIcon />}
                </div>
                <p> {item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IngredientsInfo;
