import { UserAuthRegister } from "@/components";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export function SignUpPage() {
  const { t } = useTranslation("global");
  return (
    <div className="container relative h-[781px] flex-col items-center justify-center pb-28 pt-14 md:grid lg:max-w-[1305px] lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col p-10 lg:flex">
        <img
          alt="Login image"
          src="/src/assets/images/login-image.jpg"
          className="absolute inset-0 h-full w-full  bg-zinc-900"
        />
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-12 sm:w-[350px]">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-medium tracking-tight">
              {t("sign-page.title")}
            </h1>
            <p className="text-sm text-muted-foreground">
              {t("sign-page.label")}
            </p>
          </div>
          <UserAuthRegister />
          <p className="px-8 text-center text-sm text-muted-foreground">
            {t("sign-page.have-account")}
            <Link
              to="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              {t("sign-page.login")}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
