import type { FC } from "react";
import type { BlogCardProps } from "../../fake-data/layout-data/LayoutType";
import { useNavigate } from "react-router-dom";

const BlogCard: FC<BlogCardProps> = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/post", { state: data });
  };

  return (
    <div
      className="max-mobile:flex-col max-mobile:text-center flex cursor-pointer items-center justify-between gap-x-5 duration-300 hover:scale-95"
      onClick={handleClick}
    >
      <img
        className="rounded-3xl"
        src={data.image as string}
        alt=""
      />
      <div className="max-mobile:items-center flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-custom-4xl">{data.title}</h2>
          <p className="text-custom-grey-60">{data.description}</p>
        </div>
        <div className="max-laptop:gap-x-12 flex items-center gap-x-16">
          <div className="max-laptop:gap-x-4 max-laptop:after:-left-3.5 after:bg-custom-grey-60 relative flex items-center gap-x-6 after:absolute after:top-0 after:-left-8 after:h-full after:w-0.5">
            <img
              src={data.personImage}
              alt=""
            />
            <h3 className="font-bold">{data.personName}</h3>
          </div>
          <p className="text-custom-grey-60">{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
