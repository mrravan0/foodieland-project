import type { FC } from "react";
import CheckOutCard from "./CheckOutCard";
import type { HomeCheckOutProps } from "../../../fake-data/home-data/HomeTypes";
import InstagramIcon from "../../../svg/InstagramIcon";
import useMediaQuery from "../../../hooks/UseMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const CheckOut: FC<HomeCheckOutProps> = ({ data }) => {
  const isMobileS = useMediaQuery(550.9, "max");
  return (
    <section className="bg-[linear-gradient(180deg,rgba(231,249,253,0)_0%,rgba(231,249,253,1)_100%)] pb-20">
      <div className="container-custom flex flex-col items-center gap-y-20">
        <div className="max-mobile-s:text-center flex flex-col items-center gap-y-6">
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
        <div className="max-tablet:grid-cols-2 max-mobile-s:flex grid grid-cols-4 gap-10 w-full">
          {isMobileS ? (
            <div className="w-full">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true, type: "bullets" }}
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              >
                {data?.map((item) => (
                  <SwiperSlide>
                    <CheckOutCard
                      data={item}
                      key={item.id}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            data?.map((item) => (
              <CheckOutCard
                data={item}
                key={item.id}
              />
            ))
          )}
        </div>
        <button className="button-custom max-laptop:max-w-57.5 flex w-full max-w-76.25 items-center gap-x-4">
          Visit Our Instagram
          <InstagramIcon color="white" />
        </button>
      </div>
    </section>
  );
};

export default CheckOut;
