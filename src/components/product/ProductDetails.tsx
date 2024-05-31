import { ProductImages } from "./ProductImages";
import { ProductDescription } from "./ProductDescription.1";
import { HomeProductSection } from "../home/HomeProductSection";
import { useTranslation } from "react-i18next";

export function ProductDetails() {
  const { t } = useTranslation("global");
  return (
    <section>
      <div className="mb-10 flex flex-col justify-between lg:flex-row lg:gap-10">
        <ProductImages />
        <ProductDescription />
      </div>
      <HomeProductSection
        title={t("home-sections.sales.title")}
        description={t("home-sections.sales.description")}
        navigate
      />
    </section>
  );
}
