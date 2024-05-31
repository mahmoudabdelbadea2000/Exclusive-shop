import {
  AboutAchievements,
  BreadCrumb,
  HomeFeatures,
  Testimonials,
} from "@/components";
import { useTranslation } from "react-i18next";

export function AboutPage() {
  const { t } = useTranslation("global");
  return (
    <section className="min-h-[700px]">
      <div className="container mb-28 mt-14 max-w-container-width">
        <BreadCrumb />
        <div className="flex items-center justify-between gap-11">
          <div className="flex-1 space-y-10">
            <h2 className="text-[54px] font-semibold ">
              {t("about-us.heading")}
            </h2>
            <div className="space-y-6">
              <p>{t("about-us.story.one")}</p>
              <p>{t("about-us.story.two")}</p>
            </div>
          </div>
          <div className="hidden h-[500px] flex-1 bg-[#EB7EA8] lg:block" />
        </div>
        <AboutAchievements />
        <Testimonials />
        <HomeFeatures />
      </div>
    </section>
  );
}
