import { useRef, type FC } from "react";

const Deliciousness: FC = () => {
  const inputReF = useRef<HTMLInputElement | null>(null);

  return (
    <section>
      <div className="container-custom">
        <div className="bg-custom-blue flex items-end justify-between rounded-[60px]">
          <img
            className="max-laptop-s:w-62.5"
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
            <div
              className="flex cursor-pointer items-center justify-between rounded-3xl bg-white py-2.5 pr-2.5 pl-7.5"
              onClick={() => inputReF.current?.focus()}
            >
              <input
                className="h-full grow outline-none"
                type="email"
                placeholder="Your email address..."
                ref={inputReF}
              />
              <button className="button-custom z-10 max-w-40 py-5">
                Subscribe
              </button>
            </div>
          </div>
          <img
            className="max-laptop-s:w-62.5 max-tablet:w-50"
            src="/layout/deliciousness/photo2.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Deliciousness;
