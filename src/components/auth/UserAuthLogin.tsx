import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { useTranslation } from "react-i18next";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SignInHook } from "@/logic";

export function UserAuthLogin() {
  const { t } = useTranslation("global");

  const { form, isLoading, onSubmit } = SignInHook();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("login-page.email")}
                  type="email"
                  className="rounded-none border-0 border-b-[1px] border-slate-200 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("login-page.password")}
                  type="password"
                  className="rounded-none border-0 border-b-[1px] border-slate-200 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <Button
            disabled={isLoading}
            type="submit"
            className="rounded-sm border-[#00000066] bg-main-color px-12 py-7"
          >
            {isLoading && (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            )}
            {t("login-page.login")}
          </Button>
          <p className=" px-8 text-center text-muted-foreground">
            <Link to="/forget-password" className="text-main-color">
              {t("login-page.forget-password")}
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
}
