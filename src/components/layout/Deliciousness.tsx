import type { FC } from "react";

const Deliciousness: FC = () => {
  return (
    <section>
      <div className="container-custom">
        <div className="bg-custom-blue flex items-end justify-between rounded-[60px]">
          <img
            src="/layout/deliciousness/photo1.png"
            alt=""
          />
          <div className="flex flex-col gap-y-16 py-20">
            <div className="flex flex-col gap-y-6 text-center">
              <h1 className="text-custom-5xl">Deliciousness to your inbox</h1>
              <p className="font-light">
                Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqut enim
                ad minim
              </p>
            </div>
            <div className="flex cursor-pointer items-center bg-white py-2.5 pr-2.5 pl-7.5">
              <input
                className="outline-none"
                type="email"
                placeholder="Your email address..."
              />
              <button className="button-custom py-40">Subscribe</button>
            </div>
          </div>
          <img
            src="/layout/deliciousness/photo2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Deliciousness;
