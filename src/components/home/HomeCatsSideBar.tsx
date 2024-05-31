import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Factory } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeCatsSideBar() {
  return (
    <div className="hidden py-4 md:block lg:col-span-1 lg:border-e-[0.5px] lg:pb-0 lg:pe-4 lg:pt-6">
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex-wrap items-start gap-2 sm:gap-4 lg:flex-col lg:flex-nowrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="h-0 justify-between p-0 text-base">
              <span>Woman's Fashion</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Factory className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Electronics</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Home & Lifestyle</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Medicine</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Sports & Outdoor</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Baby’s & Toys</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Groceries & Pets</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Health & Beauty</span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/docs"
              className={`p-0 text-base font-medium hover:bg-transparent`}
            >
              <span>Health & Beauty</span>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
