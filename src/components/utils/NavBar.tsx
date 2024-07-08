import { useGetUser } from "@/Hooks/useGetUser";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export function NavBar({ classname }: { classname?: string }) {
  const { t } = useTranslation("global");

  const { showUser } = useGetUser();
  return (
    <nav className={`text-primary ${classname} `}>
      <ul className={`flex items-center justify-between gap-12 ${classname}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-[1px] border-primary" : ""
            }
          >
            {t("header.nav.home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact-us"
            className={({ isActive }) =>
              isActive ? "border-b-[1px] border-primary" : ""
            }
          >
            {t("header.nav.contact")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "border-b-[1px] border-primary" : ""
            }
          >
            {t("header.nav.about")}
          </NavLink>
        </li>
        {!showUser && (
          <li>
            <NavLink
              to="sign-up"
              className={({ isActive }) =>
                isActive ? "border-b-[1px] border-primary" : ""
              }
            >
              {t("header.nav.signup")}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
