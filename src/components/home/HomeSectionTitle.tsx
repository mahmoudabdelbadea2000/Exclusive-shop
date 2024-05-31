import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import i18n from "@/locales/i18n";

interface IProps {
  title: string;
  description?: string;
  navigate?: boolean;
  onPrev?: () => void;
  onNext?: () => void;
  classnames?: string;
}

export function HomeSectionTitle({
  title,
  description,
  navigate,
  onPrev,
  onNext,
  classnames,
}: IProps) {
  const { t } = useTranslation("global");
  const currentLang = i18n.language;

  return (
    <div className=" mb-24 flex items-center justify-between">
      <div className="space-y-3 sm:space-y-6">
        <div className="flex items-center gap-4">
          <span className="inline-block h-10 w-5 rounded-sm bg-main-color"></span>
          <span className="font-semibold leading-5 text-main-color ">
            {title}
          </span>
        </div>
        <h5 className="text-2xl font-semibold sm:text-4xl">{description}</h5>
      </div>
      <div className={classnames}>
        {navigate ? (
          <div className="flex items-center justify-end gap-2 ">
            <Button
              size="icon"
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] text-primary hover:bg-[#f5f5f5] hover:text-primary"
              onClick={currentLang === "en" ? onPrev : onNext}
            >
              {currentLang === "en" ? (
                <ArrowLeft />
              ) : (
                <ArrowLeft className="rotate-180" />
              )}
            </Button>
            <Button
              size="icon"
              className="h-[46px] w-[46px] rounded-full bg-[#F5F5F5] text-primary hover:bg-[#f5f5f5] hover:text-primary"
              onClick={currentLang === "en" ? onNext : onPrev}
            >
              {currentLang === "en" ? (
                <ArrowRight />
              ) : (
                <ArrowRight className="rotate-180" />
              )}
            </Button>
          </div>
        ) : (
          <Button
            size="lg"
            className="rounded-sm bg-main-color font-medium text-white hover:bg-main-color hover:text-white"
          >
            {t("home-sections.btn")}
          </Button>
        )}
      </div>
    </div>
  );
}
