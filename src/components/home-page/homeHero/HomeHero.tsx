import type { HomeData, HomeInfo } from "../../../pages/home-page/HomeData";
import { type FC } from "react";
import HomeHeroOverlay from "./HomeHeroOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

type HomeHeroProps = {
  data: (HomeData & HomeInfo)[];
  info: HomeInfo[];
};

const HomeHero: FC<HomeHeroProps> = ({ data, info }) => {
  return (
    <section className="pt-10 pb-40">
      <div className="container-custom">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, reverseDirection: true }}
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
