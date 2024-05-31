import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export function CartCheckout() {
  const { t } = useTranslation("global");
  return ( 
    <section className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-0">
      <div className="flex w-[470px] max-w-full items-center gap-4">
        <Input
          type="text"
          placeholder={t("cart.checkout.input")}
          id="coupon"
          name="coupon"
          className="rounded-sm focus-visible:ring-0 lg:w-[300px]"
        />
        <Button type="submit" className=" rounded-sm bg-main-color lg:px-12">
          {t("cart.btn.coupon")}
        </Button>
      </div>
      <div className="w-[470px] max-w-full space-y-2 rounded-sm border-[1.5px] border-black px-3 py-5">
        <h6 className="text-xl font-medium">{t("cart.checkout.title")}</h6>
        <div className="w-full text-center">
          <div className="flex justify-between py-2">
            <span>{t("cart.checkout.subtotal")}:</span>
            <span>$1760</span>
          </div>
          <hr className="h-[1px] bg-black" />
          <div className="flex justify-between py-2">
            <span>{t("cart.checkout.shipping")}:</span>
            <span>$1760</span>
          </div>
          <hr className="h-[1px] bg-black" />
          <div className="flex justify-between py-2">
            <span>{t("cart.checkout.total")}:</span>
            <span>$1760</span>
          </div>
          <Button
            type="submit"
            className="mt-4 h-14 w-[260px] rounded-sm bg-main-color px-12"
          >
            {t("cart.btn.coupon")}
          </Button>
        </div>
      </div>
    </section>
  );
}
