import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SwiperInstance from "swiper";
import { ProductCard } from "../product/ProductCard";
import { GetAllProductsHook } from "@/logic";

interface IProps {
  setSwiper: React.Dispatch<React.SetStateAction<SwiperInstance | null>>;
}

export function HomeProductsList({ setSwiper }: IProps) {
  const { products } = GetAllProductsHook();
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
            name={product.name}
            id={product.id}
            imageCover={product.imageCover}
            quantity={product.quantity}
            ratingCount={product.ratingCount}
            ratingValue={product.ratingValue}
            description={product.description}
            colors={product.colors}
            badgeType="sale"
            saleCount="-45%"
            price={product.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
