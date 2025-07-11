import type { FC } from "react";
import { useLocation } from "react-router-dom";

const PostHero: FC = () => {
  const location = useLocation();
  const { state } = location;
  
  return (
    <section className="py-20">
      <div className="container-custom flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center gap-y-10 text-center">
          <h1 className="text-custom-5xl font-bold">{state.title}</h1>
          <div className="max-laptop:max-w-80 flex w-full max-w-107.5 items-center justify-between">
            <div className="after:bg-custom-grey-10 max-laptop:after:-right-5 relative flex items-center gap-x-4 after:absolute after:top-0 after:-right-1/2 after:h-full after:w-0.5">
              <img
                src={state.personImage}
                alt=""
              />
              <h2>{state.personName}</h2>
            </div>
            <p className="text-custom-grey-40">{state.date}</p>
          </div>
          <p className="text-custom-grey-40 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>
        <img
          className="min-tablet:w-1/2 min-mobile-s:min-w-130 min-w-75 rounded-3xl"
          src={state.image}
          alt=""
        />
      </div>
    </section>
  );
};

export default PostHero;
