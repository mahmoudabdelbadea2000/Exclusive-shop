import { BreadCrumb } from "@/components";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function PageNotFound() {
  const { t } = useTranslation("global");
  return (
    <div className="min-h-[500px]">
      <div className="container mb-28 mt-14 max-w-container-width text-center">
        <BreadCrumb />
        <div className="mx-auto w-[829px] max-w-full space-y-10">
          <h1 className="text-[100px] font-medium">{t("404.title")}</h1>
          <span>{t("404.description")}</span>
        </div>
        <Link to="/">
          <Button
            type="button"
            className="mt-16 h-[65px] bg-main-color px-28 font-medium"
          >
            {t("404.btn")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
