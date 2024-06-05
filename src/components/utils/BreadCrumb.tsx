import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fragment } from "react/jsx-runtime";

interface IProps {
  ProductCrumb?: string;
}

export function BreadCrumb({ ProductCrumb }: IProps) {
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
            <Fragment key={index}>
              <BreadcrumbItem>
                <Link to={`/${crumb}`}>{t(`breadcrumb.${crumb}`)}</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          ))}
          <BreadcrumbItem>
            <BreadcrumbPage>
              {ProductCrumb
                ? ProductCrumb
                : t(`breadcrumb.${crumbs[crumbs.length - 1]}`, {
                    defaultValue: "404 error",
                  })}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
