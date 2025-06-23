import type { FC } from "react";
import type { HomeCategoriesProps } from "../../fake-data/home-data/HomeTypes";

const Categories: FC<HomeCategoriesProps> = ({ data }) => {
  return (
    <section className="max-tablet:py-25 py-40">
      <div className="container-custom flex flex-col gap-y-20">
        <div className="flex items-center justify-between font-semibold">
          <h1 className="max-laptop:text-5xl text-6xl">Categories</h1>
          <button className="bg-custom-blue rounded-2xl text-center">
            View All Categories
          </button>
        </div>
        <ul className="flex items-center justify-between gap-x-10">
          {data?.map((item) => (
            <li
              className={`max-laptop:max-w-45 flex w-full max-w-60 cursor-pointer flex-col items-center gap-y-12.5 rounded-4xl py-5 duration-300 hover:scale-105`}
              style={{ background: item.linearGradient}}
              key={item.id}
            >
              <img
                src={item.image}
                alt=""
              />
              <h2 className="font-semibold">{item.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
