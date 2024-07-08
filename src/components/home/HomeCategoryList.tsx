import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperInstance from "swiper";
import { GetCategoriesHook } from "@/logic";
import { Skeleton } from "../ui/skeleton";
import i18n from "@/locales/i18n";

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

  const { categories, isLoading } = GetCategoriesHook();
  const currentLang = i18n.language;

  return (
    <Swiper
      slidesPerView={1}
      breakpoints={breakpoints}
      spaceBetween={30}
      modules={[Navigation]}
      onSwiper={setSwiper}
    >
      {isLoading
        ? Array.from({ length: 6 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[180px] w-[190px] rounded-sm" />
              </div>
            </SwiperSlide>
          ))
        : categories &&
          categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="group flex h-36 cursor-pointer flex-col items-center justify-center gap-4 rounded-sm border-[1px] border-[#0000004D] transition hover:border-main-color hover:bg-main-color">
                <img
                  src={category.image}
                  alt={category.name[currentLang]}
                  className="h-14 w-14 group-hover:text-white"
                />
                <span className="group-hover:text-white">
                  {category.name[currentLang]}
                </span>
              </div>
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
