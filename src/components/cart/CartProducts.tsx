import { useTranslation } from "react-i18next";
import { OneProdCart } from "./OneProdCart";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function CartProducts() {
  const { t } = useTranslation("global");
  return (
    <section className="mt-24 space-y-10">
      <div className="flex items-center justify-between px-10 py-4 shadow-sm">
        <p className="w-1/4 text-sm sm:text-base">{t("cart.prod")}</p>
        <p className="w-1/4 text-center text-sm sm:text-base">
          {t("cart.price")}
        </p>
        <p className="w-1/4 text-center text-sm sm:text-base">
          {t("cart.quantity")}
        </p>
        <p className="hidden w-1/4 text-end sm:block">{t("cart.total")}</p>
      </div>
      <OneProdCart />
      <OneProdCart />
      <OneProdCart />
      <div className="flex items-center justify-between">
        <Link to="/">
          <Button
            variant="outline"
            className="rounded-sm border-[#00000080] sm:px-12"
          >
            {t("cart.btn.return")}
          </Button>
        </Link>
        <Button
          variant="outline"
          className="rounded-sm border-[#00000080] sm:px-12"
        >
          {t("cart.btn.update")}
        </Button>
      </div>
    </section>
  );
}
