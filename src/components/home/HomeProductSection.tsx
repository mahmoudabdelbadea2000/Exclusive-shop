import { useState } from "react";
import SwiperInstance from "swiper";
import { HomeSectionTitle, HomeProductsList } from "@/components";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface IProps {
  title: string;
  description: string;
  navigate?: boolean;
  viewAll?: boolean;
  classnames?: string;
}

export function HomeProductSection({
  title,
  description,
  navigate,
  viewAll,
}: IProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const { t } = useTranslation("global");

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <section className="relative mt-24">
      <HomeSectionTitle
        title={title}
        description={description}
        navigate={navigate}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <HomeProductsList setSwiper={setSwiper} />
      {viewAll && (
        <div className="my-16 text-center">
          <Button className=" h-[56px] rounded-sm bg-main-color px-12 py-4 text-primary-foreground hover:bg-main-color hover:text-primary-foreground">
            {t("home-sections.master-btn")}
          </Button>
        </div>
      )}
    </section>
  );
}
