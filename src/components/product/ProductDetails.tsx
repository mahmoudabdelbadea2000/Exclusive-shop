import { ProductImages } from "./ProductImages";
import { ProductDescription } from "./ProductDescription.1";
import { HomeProductSection } from "../home/HomeProductSection";
import { useTranslation } from "react-i18next";
import { DocumentData } from "firebase/firestore";
import { SkeletonDetailsCard } from "./SkeletonDetailsCard";

interface IProps {
  oneProduct: DocumentData | null;
  isLoading: boolean;
}

export function ProductDetails({ isLoading, oneProduct }: IProps) {
  const { t } = useTranslation("global");
  return (
    <section>
      {isLoading ? (
        <SkeletonDetailsCard />
      ) : (
        <div className="mb-10 flex flex-col justify-between lg:flex-row lg:gap-10">
          <ProductImages images={oneProduct?.images} />
          <ProductDescription {...oneProduct} />
        </div>
      )}
      <HomeProductSection
        title={t("home-sections.sales.title")}
        description={t("home-sections.sales.description")}
        navigate
      />
    </section>
  );
}
