import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function BreadCrumb() {
  const { t } = useTranslation("global");
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return (
    <div className="my-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/">{t("breadcrumb.home")}</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {crumbs.splice(0, crumbs.length - 1).map((crumb, index) => (
            <>
              <BreadcrumbItem key={index}>
                <Link to={`/${crumb}`}>{t(`breadcrumb.${crumb}`)}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>
              {t(`breadcrumb.${crumbs[crumbs.length - 1]}`) || "404 error"}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
