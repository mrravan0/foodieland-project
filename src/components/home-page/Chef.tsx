import type { FC } from "react";

const Chef: FC = () => {
  return (
    <section className="pt-35 pb-40">
      <div className="container-custom flex justify-between items-center gap-x-2.5">
        <div className="flex flex-col gap-y-17.5">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-custom-5xl">
              Everyone can be a
              <br />
              chef in their own kitchen
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <button className="button-custom max-laptop:max-w-45 max-w-60">
            Learn More
          </button>
        </div>
        <img
          src="/home-page/homeChef/photo1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Chef;
