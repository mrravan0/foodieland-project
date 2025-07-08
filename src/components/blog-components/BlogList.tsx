import type { FC } from "react";
import BlogCard from "../layout/BlogCard";
import type { BlogListProps } from "../../fake-data/blog-data/BlogType";
import ListCard from "../layout/ListCard";

const BlogList: FC<BlogListProps> = ({ data, sideInfo }) => {
  return (
    <section className="pb-40">
      <div className="container-custom flex flex-col gap-y-20">
        <div className="flex justify-between gap-10 items-start max-laptop-s:flex-col">
          <div className="flex w-full max-w-287.5 grow flex-col gap-y-9 max-mobile:gap-y-20">
            {data?.map((item) => <BlogCard data={item} />)}
          </div>
          <div className="flex flex-col gap-y-20 ">
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
      </div>
    </section>
  );
};

export default BlogList;
