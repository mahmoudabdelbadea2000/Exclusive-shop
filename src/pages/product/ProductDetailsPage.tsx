import { BreadCrumb, ProductDetails } from "@/components";
import i18n from "@/locales/i18n";
import { GetOneProduct } from "@/logic";
import { useParams } from "react-router-dom";

export function ProductDetailsPage() {
  const { id } = useParams();
  const { oneProduct, isLoading } = GetOneProduct(id || "");
  const currentLang = i18n.language;
  return (
    <section className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb ProductCrumb={oneProduct?.name[currentLang]} />
        <ProductDetails oneProduct={oneProduct} isLoading={isLoading} />
      </div>
    </section>
  );
}
