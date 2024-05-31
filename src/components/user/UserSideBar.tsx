import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export function UserSideBar() {
  const { t } = useTranslation("global");

  return (
    <div className="mb-10 flex justify-between gap-5 md:col-span-2 md:mb-0 md:block md:space-y-4">
      <div>
        <h6 className="font-medium">{t("user.userSide.manage.title")}</h6>
        <ul className="mt-4 space-y-2 md:ms-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-main-color" : "text-gray-500"
              }
              to="/account"
              end
            >
              {t("user.userSide.manage.my-profile")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-main-color" : "text-gray-500"
              }
              to="/account/address"
            >
              {t("user.userSide.manage.address")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-main-color" : "text-gray-500"
              }
              to="/account/payment"
            >
              {t("user.userSide.manage.payment")}
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="font-medium">{t("user.userSide.order.title")}</h6>
        <ul className="mt-4 space-y-2 md:ms-6">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-main-color" : "text-gray-500"
              }
              to="/"
              end
            >
              {t("user.userSide.order.return")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-main-color" : "text-gray-500"
              }
              to="/"
            >
              {t("user.userSide.order.cancel")}
            </NavLink>
          </li>
        </ul>
      </div>
      <h6 className="font-medium">
        <Link to="/wishlist">{t("user.userSide.wishlist")}</Link>
      </h6>
    </div>
  );
}
