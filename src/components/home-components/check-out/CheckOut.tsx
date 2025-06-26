import type { FC } from "react";
import CheckOutCard from "./CheckOutCard";
import type { HomeCheckOutProps } from "../../../fake-data/home-data/HomeTypes";

const CheckOut: FC<HomeCheckOutProps> = ({ data }) => {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(231,249,253,0)_0%,rgba(231,249,253,1)_100%)] py-20">
      <div className="container-custom flex flex-col gap-y-20">
        <div className="flex flex-col items-center gap-y-6">
          <h1 className="text-custom-5xl">
            Check out @foodieland on Instagram
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore
            <br />
            magna aliqut enim ad minim
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10">
          {data?.map((item) => (
            <CheckOutCard
              data={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
