import { Menu, Search } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { NavBar } from "./NavBar";
import i18n from "@/locales/i18n";

export function AsideNav() {
  const { t } = useTranslation("global");
  const lang = i18n.language;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={lang === "ar" ? "right" : "left"}>
        <div className="mt-10 flex flex-col items-center space-y-9">
          <div className="flex items-center gap-6">
            <form className="relative">
              <Input
                type="search"
                placeholder={t("header.form.search")}
                name="search"
                id="search"
                className="w-[350px] max-w-full rounded-sm border-0 border-none bg-secondary px-5 py-[7px] leading-[18px] placeholder:text-[12px] placeholder:text-primary"
              />
              <Search className="absolute end-3 top-[50%] translate-y-[-50%]" />
            </form>
          </div>
          <SheetClose asChild>
            <NavBar classname="flex-col gap-6" />
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
