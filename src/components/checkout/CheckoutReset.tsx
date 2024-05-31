import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

export function CheckoutReset() {
  const { t } = useTranslation("global");
  return (
    <section className="mt-10 w-full space-y-[32px] md:w-[527px] ">
      <div className="space-y-[32px] md:w-[425px]">
        <div className="space-y-[32px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-[50px]"
                src="/src/assets/images/cart-image.png"
                alt="prod name"
              />
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-10 w-[50px]"
                src="/src/assets/images/cart-image.png"
                alt="prod name"
              />
              <span>LCD Monitor</span>
            </div>
            <span>$650</span>
          </div>
        </div>
        <div className="w-full text-center ">
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
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <Input
          type="text"
          placeholder={t("cart.checkout.input")}
          id="checkout-coupon"
          name="checkout-coupon"
          className="h-14  rounded-sm focus-visible:ring-0"
        />
        <Button type="submit" className=" h-14 rounded-sm bg-main-color">
          {t("cart.btn.coupon")}
        </Button>
      </div>
      <Button
        type="submit"
        className=" h-14 w-full rounded-sm bg-main-color px-12 md:w-fit"
      >
        {t("checkout.details.submit")}
      </Button>
    </section>
  );
}
