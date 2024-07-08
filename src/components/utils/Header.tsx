import {
  CreditCard,
  User,
  Search,
  Heart,
  ShoppingCart,
  CircleX,
  Star,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { NavBar } from "./NavBar";
import { TopHeader } from "./TopHeader";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "@/locales/i18n";
import { AsideNav } from "./AsideNav";
import { SignOutHook } from "@/logic/auth/SignOutHook";
import { useGetUser } from "@/Hooks/useGetUser";

interface IProps {
  handleChangeLanguage: (e: string) => void;
}

export function Header({ handleChangeLanguage }: IProps) {
  const { t } = useTranslation("global");
  const currentLang = i18n.language;
  const { logOut } = SignOutHook();
  const { showUser } = useGetUser();

  return (
    <header className="border-b-[0.5px]">
      <TopHeader handleUpdateLanguage={handleChangeLanguage} />
      <div className="container max-w-container-width">
        <div className="flex items-center justify-start py-4 lg:justify-between lg:pb-3 lg:pt-10">
          <Link to="/" className="text-2xl font-bold leading-6 text-primary">
            Exclusive
          </Link>
          <NavBar classname="hidden lg:flex" />

          <div className="flex flex-1 items-center justify-end gap-6 lg:flex-none lg:justify-normal">
            <form className="relative hidden lg:block">
              <Input
                type="search"
                placeholder={t("header.form.search")}
                name="search-header"
                id="search-header"
                className="w-[243px] rounded-sm border-0 border-none bg-secondary px-5 py-[7px] leading-[18px] placeholder:text-[12px] placeholder:text-primary"
              />
              <Search className="absolute end-3 top-[50%] translate-y-[-50%]" />
            </form>
            {showUser && (
              <div className="flex items-center justify-start gap-2 lg:gap-4">
                <Link to="wishlist">
                  <Heart />
                </Link>
                <Link to="cart" className="relative">
                  <ShoppingCart />
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-main-color p-2 text-gray-50">
                      <User />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="
                w-[224px] rounded-sm p-2"
                    align="end"
                  >
                    <DropdownMenuGroup className="space-y-[13px]">
                      <DropdownMenuItem
                        style={{
                          justifyContent:
                            currentLang === "ar" ? "flex-end" : "",
                        }}
                      >
                        <Link to="account" className={`flex cursor-pointer`}>
                          <User
                            className={`me-2 h-4 w-4`}
                            style={{
                              order: currentLang === "ar" ? "2" : "",
                              marginLeft: currentLang === "ar" ? "8px" : "",
                              marginRight: currentLang === "ar" ? "8px" : "",
                            }}
                          />
                          <span>{t("header.form.menu.account")}</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        style={{
                          justifyContent:
                            currentLang === "ar" ? "flex-end" : "",
                        }}
                      >
                        <Link
                          to="account/all-orders"
                          className={`flex cursor-pointer`}
                        >
                          <CreditCard
                            className={`me-2 h-4 w-4`}
                            style={{
                              order: currentLang === "ar" ? "2" : "",
                              marginLeft: currentLang === "ar" ? "8px" : "",
                              marginRight: currentLang === "ar" ? "8px" : "",
                            }}
                          />
                          <span>{t("header.form.menu.order")}</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        style={{
                          justifyContent:
                            currentLang === "ar" ? "flex-end" : "",
                        }}
                      >
                        <Link
                          to="account/all-orders"
                          className={`flex cursor-pointer`}
                        >
                          <CircleX
                            className={`me-2 h-4 w-4 `}
                            style={{
                              order: currentLang === "ar" ? "2" : "",
                              marginLeft: currentLang === "ar" ? "8px" : "",
                              marginRight: currentLang === "ar" ? "8px" : "",
                            }}
                          />
                          <span>{t("header.form.menu.cancellations")}</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        style={{
                          justifyContent:
                            currentLang === "ar" ? "flex-end" : "",
                        }}
                      >
                        <Link to="my-reviews" className={`flex cursor-pointer`}>
                          <Star
                            className={`me-2 h-4 w-4`}
                            style={{
                              order: currentLang === "ar" ? "2" : "",
                              marginLeft: currentLang === "ar" ? "8px" : "",
                              marginRight: currentLang === "ar" ? "8px" : "",
                            }}
                          />
                          <span>{t("header.form.menu.reviews")}</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className={`flex cursor-pointer`}
                        style={{
                          justifyContent:
                            currentLang === "ar" ? "flex-end" : "",
                        }}
                        onClick={() => logOut()}
                      >
                        <LogOut
                          className={`me-2 h-4 w-4`}
                          style={{
                            order: currentLang === "ar" ? "2" : "",
                            marginLeft: currentLang === "ar" ? "8px" : "",
                            marginRight: currentLang === "ar" ? "8px" : "",
                          }}
                        />
                        <span>{t("header.form.menu.logout")}</span>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
          <div className="ms-5 block lg:hidden">
            <AsideNav />
          </div>
        </div>
      </div>
    </header>
  );
}
