import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizontal,
  Twitter,
} from "lucide-react";

export function Footer() {
  const { t } = useTranslation("global");
  return (
    <footer className="bg-black pt-14 lg:h-[440px]">
      <div className="container max-w-container-width">
        <div className="flex flex-wrap justify-between gap-9 text-white">
          <div className="space-y-4">
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-2xl font-bold leading-6">
                Exclusive
              </Link>
              <span className="cursor-pointer text-xl font-medium text-gray-100">
                {t("footer.logo.subscribe")}
              </span>
              <span className="text-gray-100">{t("footer.logo.discount")}</span>
            </div>
            <form className="relative">
              <Input
                type="email"
                placeholder={t("footer.logo.input")}
                name="search"
                id="search"
                className="w-[230px] rounded-sm border-2 border-white bg-transparent px-5 py-[7px] leading-[18px] placeholder:text-[12px]"
              />
              <SendHorizontal className="absolute end-3 top-[50%] translate-y-[-50%]" />
            </form>
          </div>
          <ul className="hidden space-y-6 text-gray-100 md:block">
            <li className="text-xl font-medium">{t("footer.support.title")}</li>
            <li className="max-w-44">{t("footer.support.address")}</li>
            <li>{t("footer.support.email")}</li>
            <li>{t("footer.support.phone")}</li>
          </ul>
          <ul className="hidden space-y-6 text-gray-100 md:block">
            <li className="text-xl font-medium">{t("footer.account.title")}</li>
            <li className="max-w-44">{t("footer.account.account")}</li>
            <li className="max-w-44">{t("footer.account.login-register")}</li>
            <li>{t("footer.account.cart")}</li>
            <li>{t("footer.account.wishlist")}</li>
            <li>{t("footer.account.shop")}</li>
          </ul>
          <ul className="hidden space-y-6 text-gray-100 md:block">
            <li className="text-xl font-medium">
              {t("footer.quick-link.title")}
            </li>
            <li className="max-w-44">{t("footer.quick-link.title")}</li>
            <li className="max-w-44">{t("footer.quick-link.policy")}</li>
            <li>{t("footer.quick-link.terms")}</li>
            <li>{t("footer.quick-link.faq")}</li>
            <li>{t("footer.quick-link.contact")}</li>
          </ul>
          <div className="space-y-6">
            <h6 className="text-xl font-medium text-gray-100">
              {t("footer.download-app.title")}
            </h6>
            <div>
              <span className="text-[12px] font-medium text-gray-100">
                {t("footer.download-app.description")}
              </span>
              <img
                src="/src/assets/images/download-app.png"
                alt="download app"
              />
            </div>
            <div className="flex gap-6 text-gray-100">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t-[1px] border-gray-500 p-2 text-center text-gray-400">
        <span>&copy; {t("footer.copy-right")}</span>
      </div>
    </footer>
  );
}
