import { Outlet } from "react-router-dom";
import { UserSideBar } from "./UserSideBar";
import { BreadCrumb } from "../utils/BreadCrumb";
import { useTranslation } from "react-i18next";

export function UserLayout() {
  const { t } = useTranslation("global");
  return (
    <div className="container mb-28 mt-14 max-w-container-width">
      <div className="flex w-full items-center justify-between">
        <BreadCrumb />
        <p className="text-sm">
          {t("user.profile.wel")}
          <span className="text-main-color"> Md Rimel</span>
        </p>
      </div>
      <div className="mt-20 grid md:grid-cols-6">
        <UserSideBar />
        <Outlet />
      </div>
    </div>
  );
}
