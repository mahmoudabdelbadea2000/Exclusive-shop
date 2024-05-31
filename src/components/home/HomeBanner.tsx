import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function HomeBanner() {
  const { t } = useTranslation("global");
  return (
    <div className="mt-24 flex min-h-[500px] flex-col items-center justify-between bg-black p-10 md:flex-row">
      <div className="flex-1 space-y-6 md:space-y-10">
        <h6 className="font-semibold text-[#00ff66]">
          {t("home-sections.banner.title")}
        </h6>
        <p className="text-2xl font-semibold tracking-wide text-gray-100 sm:text-4xl md:text-5xl">
          {t("home-sections.banner.description")}
        </p>
        <div className="flex gap-3  md:gap-6 ">
          <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white ">
            <span className="text-base font-semibold leading-3">23</span>
            <span className="text-sm">
              {t("home-sections.banner.time.days")}
            </span>
          </div>
          <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white ">
            <span className="text-base font-semibold leading-3">23</span>
            <span className="text-sm">
              {t("home-sections.banner.time.hours")}
            </span>
          </div>
          <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white ">
            <span className="text-base font-semibold leading-3">23</span>
            <span className="text-sm">
              {t("home-sections.banner.time.minutes")}
            </span>
          </div>
          <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white ">
            <span className="text-base font-semibold leading-3">23</span>
            <span className="text-sm">
              {t("home-sections.banner.time.seconds")}
            </span>
          </div>
        </div>
        <div>
          <Link to="/">
            <Button className="h-14 rounded-sm bg-[#00ff66] px-12 py-4 font-medium text-gray-100 hover:bg-[#00ff66]">
              {t("home-sections.banner.buy-now")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative z-10 mt-5 flex-1 md:mt-0">
        <img
          className="max-w-full"
          src="/src/assets/images/banner.png"
          alt="banner"
        />
        <div className="absolute left-[50%] top-[50%] -z-20 h-[400px] max-h-full w-[400px] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#D9D9D9] opacity-30 blur-3xl"></div>
      </div>
    </div>
  );
}
