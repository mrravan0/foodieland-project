import { useState, type FC } from "react";
import BlogCard from "../layout/BlogCard";
import type { BlogListProps } from "../../fake-data/blog-data/BlogType";
import ListCard from "../layout/ListCard";
import useMediaQuery from "../../hooks/UseMediaQuery";

const BlogList: FC<BlogListProps> = ({ data, sideInfo }) => {
  const fakeSlides = ["1", "2", "3", "4", "5", "..."];
  const [isClicked, setIsClicked] = useState<number>(1);
  const isMobileScreen = useMediaQuery(550.9, "max");

  return (
    <section className="pb-40">
      <div className="container-custom flex flex-col items-center gap-y-20">
        <div className="max-laptop-s:flex-col flex items-start justify-between gap-10">
          <div className="max-mobile:gap-y-20 flex w-full max-w-287.5 grow flex-col gap-y-9">
            {data?.map((item) => (
              <BlogCard
                data={item}
                key={item.id}
              />
            ))}
          </div>
          <div className="max-laptop-s:w-full flex flex-col gap-y-20">
            <ListCard data={sideInfo} />
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
        <ul className="flex items-center gap-x-4">
          {fakeSlides.map((item, index) => {
            const isNumeric = !isNaN(Number(item));
            const screenRender =
              !isMobileScreen || (isNumeric && Number(item) < 4);
            return (
              screenRender && (
                <li
                  key={index}
                  className={`max-laptop:text-lg border-custom-grey-10 flex size-16 cursor-pointer items-center justify-center rounded-2xl border border-solid text-3xl duration-300 ${
                    isClicked === index + 1
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => isNumeric && setIsClicked(Number(item))}
                >
                  {item}
                </li>
              )
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BlogList;
