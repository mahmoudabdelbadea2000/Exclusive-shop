import { products } from "@/assets/data";
import { BreadCrumb, HomeSectionTitle } from "@/components";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const WishListPage = () => {
  const { t } = useTranslation("global");
  return (
    <div className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb />
        <div className="space-y-20">
          <section className="space-y-[60px]">
            <div className=" flex items-center justify-between">
              <h6 className="text-xl">{t("wishlist.title")} (4)</h6>
              <Button
                size="lg"
                className="rounded-sm  border border-black bg-transparent px-12 font-medium capitalize text-black hover:bg-transparent hover:text-black"
              >
                {t("wishlist.btn")}
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  productName={product.prodName}
                  prodImage={product.image}
                  badgeType="sale"
                  saleCount="-45%"
                  price={product.price}
                  isDelete
                  isFav
                  isShow
                />
              ))}
            </div>
          </section>
          <section>
            <HomeSectionTitle title={t("wishlist.recommendation")} />
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  productName={product.prodName}
                  prodImage={product.image}
                  badgeType="sale"
                  saleCount="-45%"
                  price={product.price}
                  isFav
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
