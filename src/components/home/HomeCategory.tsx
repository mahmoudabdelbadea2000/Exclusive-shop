import { useState } from "react";
import SwiperInstance from "swiper";
import { HomeSectionTitle, HomeCategoryList } from "@/components";

interface IProps {
  title: string;
  description: string;
  navigate?: boolean;
}

export function HomeCategory({ title, description, navigate }: IProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="relative my-24">
      <HomeSectionTitle
        title={title}
        description={description}
        navigate={navigate}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <HomeCategoryList setSwiper={setSwiper} />
    </section>
  );
}
