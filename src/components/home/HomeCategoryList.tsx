import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperInstance from "swiper";
import { categories } from "@/assets/data";
import { Camera } from "lucide-react";

interface IProps {
  setSwiper: React.Dispatch<React.SetStateAction<SwiperInstance | null>>;
}

export function HomeCategoryList({ setSwiper }: IProps) {
  const breakpoints = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  };
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={breakpoints}
      spaceBetween={30}
      modules={[Navigation]}
      onSwiper={setSwiper}
    >
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="group flex h-36 cursor-pointer flex-col items-center justify-center gap-4 rounded-sm border-[1px] border-[#0000004D] transition hover:border-main-color hover:bg-main-color">
            <Camera className="h-14 w-14  group-hover:text-white" />
            <span className="group-hover:text-white">{category.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
