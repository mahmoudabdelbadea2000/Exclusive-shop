import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { GetCategoriesHook } from "@/logic";
import i18n from "@/locales/i18n";

export function HomeCatsSideBar() {
  const { categories } = GetCategoriesHook();
  const currentLang = i18n.language;
  return (
    <div className="hidden py-4 md:block lg:col-span-1 lg:border-e-[0.5px] lg:pb-0 lg:pe-4 lg:pt-6">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex-wrap items-start gap-2 sm:gap-4 lg:flex-col lg:flex-nowrap">
          {categories?.slice(0, 8).map((category) => (
            <NavigationMenuItem key={category?.id}>
              <Link to="/">
                <span>{category?.name[currentLang]}</span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
