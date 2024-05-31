import { ProductDetails } from "@/components";

export function ProductDetailsPage() {
  return (
    <section className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        {/* <BreadCrumb /> */}
        <ProductDetails />
      </div>
    </section>
  );
}
