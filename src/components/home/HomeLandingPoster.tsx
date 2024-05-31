import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomeLandingPoster() {
  return (
    <Swiper
      pagination={{
        type: "bullets",
        bulletClass: "swiper-pagination-bullet w-3 h-3 ",
        bulletActiveClass:
          "swiper-pagination-bullet-active bg-main-color border-[2px] border-white",
      }}
      modules={[Pagination]}
      className="w-full bg-black lg:col-span-5 lg:ms-6 lg:mt-6"
    >
      <SwiperSlide className="h-full py-3 text-lg">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="ms-5 mt-4 flex flex-1 flex-col gap-3 p-1 text-white lg:ms-10 lg:mt-0 xl:w-[40%]">
            <div className="flex items-center gap-6">
              <img
                className="h-12 w-10"
                src="/src/assets/images/apple-icon.png"
                alt="apple icon"
              />
              <span className="leading-6">iPhone 14 Series</span>
            </div>
            <h2 className=" text-2xl font-semibold leading-10 sm:text-3xl lg:text-5xl lg:leading-[60px] lg:tracking-widest">
              Up to 10% off Voucher
            </h2>
            <Link to="all-products">
              <Button
                variant="link"
                size="lg"
                className="flex gap-2 px-0 font-medium leading-6 text-main-text-color underline"
              >
                Shop Now <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-1 justify-center">
            <img
              className="h-[300px] lg:h-full lg:w-[400px]"
              src="/src/assets/images/laning-poster.jpg"
              alt="iphone 15 pro max"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full py-3 text-lg">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="ms-5 mt-4 flex flex-1 flex-col gap-3 p-1 text-white lg:ms-10 lg:mt-0 xl:w-[40%]">
            <div className="flex items-center gap-6">
              <img
                className="h-12 w-10"
                src="/src/assets/images/apple-icon.png"
                alt="apple icon"
              />
              <span className="leading-6">iPhone 14 Series</span>
            </div>
            <h2 className=" text-2xl font-semibold leading-10 sm:text-3xl lg:text-5xl lg:leading-[60px] lg:tracking-widest">
              Up to 10% off Voucher
            </h2>
            <Link to="all-products">
              <Button
                variant="link"
                size="lg"
                className="flex gap-2 px-0 font-medium leading-6 text-main-text-color underline"
              >
                Shop Now <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-1 justify-center">
            <img
              className="h-[300px] lg:h-full lg:w-[400px]"
              src="/src/assets/images/laning-poster.jpg"
              alt="iphone 15 pro max"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full py-3 text-lg">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
          <div className="ms-5 mt-4 flex flex-1 flex-col gap-3 p-1 text-white lg:ms-10 lg:mt-0 xl:w-[40%]">
            <div className="flex items-center gap-6">
              <img
                className="h-12 w-10"
                src="/src/assets/images/apple-icon.png"
                alt="apple icon"
              />
              <span className="leading-6">iPhone 14 Series</span>
            </div>
            <h2 className=" text-2xl font-semibold leading-10 sm:text-3xl lg:text-5xl lg:leading-[60px] lg:tracking-widest">
              Up to 10% off Voucher
            </h2>
            <Link to="all-products">
              <Button
                variant="link"
                size="lg"
                className="flex gap-2 px-0 font-medium leading-6 text-main-text-color underline"
              >
                Shop Now <ArrowRight className="h-6 w-6" />
              </Button>
            </Link>
          </div>
          <div className="flex w-full flex-1 justify-center">
            <img
              className="h-[300px] lg:h-full lg:w-[400px]"
              src="/src/assets/images/laning-poster.jpg"
              alt="iphone 15 pro max"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
