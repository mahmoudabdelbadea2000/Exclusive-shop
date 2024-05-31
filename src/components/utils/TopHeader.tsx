import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import i18n from "@/locales/i18n";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface IProps {
  handleUpdateLanguage: (e: string) => void;
}

export function TopHeader({ handleUpdateLanguage }: IProps) {
  const { t } = useTranslation("global");
  const currentLang = i18n.language;

  const handleChangeLanguage = (e: string) => {
    i18n.changeLanguage(e);
    handleUpdateLanguage(e);
    window.location.reload();
  };

  return (
    <div className="w-screen max-w-full bg-foreground md:h-12">
      <div className="container flex h-full max-w-container-width flex-wrap items-center justify-between">
        <div className="hidden text-center text-main-text-color md:block">
          <span className="text-sm">
            {t("header.top-header.span-offer")}
            <Link
              to="all-products"
              className="ms-3 font-semibold leading-6 underline"
            >
              {t("header.top-header.nav-all-products")}
            </Link>
          </span>
        </div>
        <div className="text-main-text-color">
          <Select onValueChange={handleChangeLanguage}>
            <SelectTrigger className="w-[92px] border-none bg-transparent focus:outline-none">
              <SelectValue
                placeholder={t(`header.top-header.lang.${currentLang}`)}
              />
            </SelectTrigger>
            <SelectContent className="text-sm">
              <SelectItem value="en">
                <span>{t(`header.top-header.lang.en`)}</span>
              </SelectItem>
              <SelectItem value="ar">
                <span>{t("header.top-header.lang.ar")}</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
