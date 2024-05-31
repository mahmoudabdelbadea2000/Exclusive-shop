import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { products } from "@/assets/data";
import { Navigation } from "swiper/modules";
import SwiperInstance from "swiper";
import { ProductCard } from "../product/ProductCard";

interface IProps {
  setSwiper: React.Dispatch<React.SetStateAction<SwiperInstance | null>>;
}

export function HomeProductsList({ setSwiper }: IProps) {
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
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
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
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            productName={product.prodName}
            prodImage={product.image}
            badgeType="sale"
            saleCount="-45%"
            price={product.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
