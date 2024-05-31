import { BreadCrumb, CartCheckout, CartProducts } from "@/components";

export function CartPage() {
  return (
    <section className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb />
        <div className="space-y-20">
          <CartProducts />
          <CartCheckout />
        </div>
      </div>
    </section>
  );
}
