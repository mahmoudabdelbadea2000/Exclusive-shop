import { Headset, ShieldCheck, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";

export function HomeFeatures() {
  const { t } = useTranslation("global");
  return (
    <div className="my-28 flex flex-wrap items-center justify-center gap-[88px]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30]">
          <Truck className=" h-7 w-7 rounded-full  text-white" />
        </div>
        <div className="text-center">
          <h6 className="text-xl font-semibold">
            {t("home-sections.features.one.title")}
          </h6>
          <span>{t("home-sections.features.one.description")}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30]">
          <Headset className=" h-7 w-7 rounded-full  text-white" />
        </div>
        <div className="text-center">
          <h6 className="text-xl font-semibold">
            {t("home-sections.features.two.title")}
          </h6>
          <span>{t("home-sections.features.two.description")}</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full border-[10px] bg-[#2F2E30]">
          <ShieldCheck className=" h-7 w-7 rounded-full  text-white" />
        </div>
        <div className="text-center">
          <h6 className="text-xl font-semibold">
            {t("home-sections.features.three.title")}
          </h6>
          <span>{t("home-sections.features.three.description")}</span>
        </div>
      </div>
    </div>
  );
}
