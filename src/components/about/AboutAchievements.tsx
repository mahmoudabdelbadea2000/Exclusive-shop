import { CircleDollarSign, DollarSign, Gift, Store } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutAchievements() {
  const { t } = useTranslation("global");
  return (
    <div className="my-20 grid gap-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="group flex flex-col items-center gap-6 rounded-sm border border-[#0000004D] p-10 shadow transition hover:border-main-color hover:bg-main-color hover:text-white hover:shadow-2xl">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30] transition group-hover:bg-white">
          <Store className="h-7 w-7 rounded-full text-white transition group-hover:text-black" />
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold">
            {t("about-us.achievements.one.title")}
          </h6>
          <span>{t("about-us.achievements.one.description")}</span>
        </div>
      </div>
      <div className="group flex flex-col items-center gap-6 rounded-sm border border-[#0000004D] p-10 shadow transition hover:border-main-color hover:bg-main-color hover:text-white hover:shadow-2xl">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30] transition group-hover:bg-white">
          <DollarSign className="h-7 w-7 rounded-full text-white transition group-hover:text-black" />
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold">
            {t("about-us.achievements.one.title")}
          </h6>
          <span>{t("about-us.achievements.one.description")}</span>
        </div>
      </div>
      <div className="group flex flex-col items-center gap-6 rounded-sm border border-[#0000004D] p-10 shadow transition hover:border-main-color hover:bg-main-color hover:text-white hover:shadow-2xl">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30] transition group-hover:bg-white">
          <Gift className="h-7 w-7 rounded-full text-white transition group-hover:text-black" />
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold">
            {t("about-us.achievements.one.title")}
          </h6>
          <span>{t("about-us.achievements.one.description")}</span>
        </div>
      </div>
      <div className="group flex flex-col items-center gap-6 rounded-sm border border-[#0000004D] p-10 shadow transition hover:border-main-color hover:bg-main-color hover:text-white hover:shadow-2xl">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30] transition group-hover:bg-white">
          <CircleDollarSign className="h-7 w-7 rounded-full text-white transition group-hover:text-black" />
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold">
            {t("about-us.achievements.one.title")}
          </h6>
          <span>{t("about-us.achievements.one.description")}</span>
        </div>
      </div>
    </div>
  );
}
