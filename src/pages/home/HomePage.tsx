import {
  FixedScroll,
  HomeBanner,
  HomeCategory,
  HomeCatsSideBar,
  HomeFeatures,
  HomeLandingPoster,
  HomeNewProducts,
  HomeProductSection,
} from "@/components";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container max-w-container-width">
      <section className="grid lg:grid-cols-6 ">
        <HomeCatsSideBar />
        <HomeLandingPoster />
      </section>
      <HomeProductSection
        title={t("home-sections.sales.title")}
        description={t("home-sections.sales.description")}
        navigate
        viewAll
      />
      <hr />
      <HomeCategory
        title={t("home-sections.cats.title")}
        description={t("home-sections.cats.description")}
        navigate
      />
      <hr />

      <HomeProductSection
        title={t("home-sections.recommend-month.title")}
        description={t("home-sections.recommend-month.description")}
        navigate={false}
        viewAll={false}
      />
      <HomeBanner />
      <HomeProductSection
        title={t("home-sections.our-products.title")}
        description={t("home-sections.our-products.description")}
        navigate
        viewAll
      />
      <HomeNewProducts />
      <HomeFeatures />
      <FixedScroll />
    </div>
  );
};
