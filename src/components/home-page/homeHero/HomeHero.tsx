import { type FC } from "react";
import type { HomeHeroProps } from "../../../fake-data/home-data/HomeTypes";
import HomeHeroOverlay from "./HomeHeroOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

const HomeHero: FC<HomeHeroProps> = ({ data, info }) => {
  return (
    <section className="pt-10">
      <div className="container-custom">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true, type: "custom" }}
          autoplay={{ delay: 3000,pauseOnMouseEnter: true, }}
        >
          {data?.map((item) => (
            <SwiperSlide>
              <HomeHeroOverlay
                data={item}
                info={info}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeHero;
