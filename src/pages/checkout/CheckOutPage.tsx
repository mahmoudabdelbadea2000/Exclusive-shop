import { BreadCrumb, CheckoutForm, CheckoutReset } from "@/components";
import { useTranslation } from "react-i18next";

export function CheckOutPage() {
  const { t } = useTranslation("global");
  return (
    <div className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb />
        <div className="mt-20">
          <h2 className="text-4xl font-medium">{t("checkout.title")}</h2>
          <div className="flex flex-col-reverse justify-between gap-4 md:flex-row">
            <CheckoutForm />
            <CheckoutReset />
          </div>
        </div>
      </div>
    </div>
  );
}
