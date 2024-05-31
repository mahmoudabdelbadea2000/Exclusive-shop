import { useTranslation } from "react-i18next";
import { HomeSectionTitle } from "./HomeSectionTitle";
import { Button } from "../ui/button";

export function HomeNewProducts() {
  const { t } = useTranslation("global");
  return (
    <section>
      <HomeSectionTitle
        title={t("home-sections.our-products.title")}
        description={t("home-sections.our-products.description")}
        classnames="hidden"
      />
      <div className="flex flex-col items-center justify-between gap-[30px] text-white lg:h-[600px] lg:flex-row">
        <div className="relative flex h-full flex-1 items-center justify-center rounded-sm bg-black">
          <div>
            <img
              src="/src/assets/images/playstation-5.png"
              alt="playstation 5"
            />
          </div>
          <div className="absolute bottom-8 start-8 w-[242px] space-y-4">
            <h6>{t("home-sections.new-arrival.one.title")}</h6>
            <p>{t("home-sections.new-arrival.one.description")}</p>
            <Button className="p-0 text-white underline" variant="link">
              {t("home-sections.shop-now")}
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:h-full lg:gap-[30px]">
          <div className="relative hidden h-1/2 rounded-sm bg-black lg:block">
            <div className="absolute bottom-4 left-4 w-[242px] space-y-4">
              <h6>{t("home-sections.new-arrival.two.title")}</h6>
              <p>{t("home-sections.new-arrival.two.description")}</p>
              <Button className="p-0 text-white underline" variant="link">
                {t("home-sections.shop-now")}
              </Button>
            </div>
          </div>
          <div className="flex h-1/2 w-full flex-col items-center justify-between gap-8 sm:flex-row lg:gap-[30px]">
            <div className="relative z-10 flex w-full items-center justify-center rounded-sm bg-black lg:h-full lg:flex-1">
              <div>
                <img
                  className="h-[221px]"
                  src="/src/assets/images/amazon-speckers.png"
                  alt="amazon speakers"
                />
                <div className="absolute left-[50%] top-[50%] -z-20 h-[400px] max-h-full w-[400px] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#D9D9D9] opacity-30 blur-3xl"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-[242px] space-y-2">
                <h6>{t("home-sections.new-arrival.three.title")}</h6>
                <p>{t("home-sections.new-arrival.three.description")}</p>
                <Button className="p-0 text-white underline" variant="link">
                  {t("home-sections.shop-now")}
                </Button>
              </div>
            </div>
            <div className="relative z-10 flex w-full items-center justify-center rounded-sm bg-black lg:h-full lg:flex-1">
              <div>
                <img
                  className="h-[221px]"
                  src="/src/assets/images/perfuim.png"
                  alt="perfume"
                />
                <div className="absolute left-[50%] top-[50%] -z-20 h-[400px] max-h-full w-[400px] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-full bg-[#D9D9D9] opacity-30 blur-3xl"></div>
              </div>
              <div className="absolute bottom-4 left-4 w-[242px] space-y-2">
                <h6>{t("home-sections.new-arrival.four.title")}</h6>
                <p>{t("home-sections.new-arrival.four.description")}</p>
                <Button className="p-0 text-white underline" variant="link">
                  {t("home-sections.shop-now")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
