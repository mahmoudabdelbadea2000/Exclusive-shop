import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Testimonials() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <Swiper
      slidesPerView={1}
      breakpoints={breakpoints}
      pagination={{
        type: "bullets",
        bulletClass: "swiper-pagination-bullet w-3 h-3 ",
        bulletActiveClass:
          "swiper-pagination-bullet-active bg-main-color border-[1px] border-main-color",
        clickable: true,
      }}
      modules={[Pagination]}
      className="py-14"
    >
      <SwiperSlide>
        <div className="space-y-[32px] ">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="space-y-[32px]">
          <div>
            <img src="/src/assets/images/testimonials-1.png" alt="person one" />
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-3xl font-medium">Tom Cruise</h5>
              <span>Managing Director</span>
            </div>
            <div className="flex items-center gap-4">
              <FacebookIcon className="h-6 w-6 cursor-pointer" />
              <TwitterIcon className="h-6 w-6 cursor-pointer" />
              <LinkedinIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
