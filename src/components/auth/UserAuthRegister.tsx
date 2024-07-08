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
import { SignInHook, SignUpHook } from "@/logic";

export function UserAuthRegister() {
  const { t } = useTranslation("global");
  const { form, isLoading, onSubmit } = SignUpHook();
  const { signInWithGoogle } = SignInHook();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={t("sign-page.name")}
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={t("sign-page.email")}
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
                  placeholder={t("sign-page.password")}
                  type="password"
                  className="rounded-none border-0 border-b-[1px] border-slate-200 focus-visible:ring-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="w-full rounded-sm border-[#00000066] bg-main-color py-7"
        >
          {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
          {t("sign-page.title")}
        </Button>
      </form>
      <Button
        variant="outline"
        type="button"
        className="rounded-sm py-7"
        disabled={isLoading}
        onClick={signInWithGoogle}
      >
        {isLoading ? (
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <img
            src="/src/assets/images/google-icon.png"
            alt="google icon"
            className="me-2 h-6 w-6"
          />
        )}
        {t("sign-page.google")}
      </Button>
    </Form>
  );
}
