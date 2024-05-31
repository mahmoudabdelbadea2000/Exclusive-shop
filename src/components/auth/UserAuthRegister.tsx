import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "../ui/use-toast";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { GlobalSchema } from "@/validation";

export function UserAuthRegister() {
  const { signInSchema } = GlobalSchema();
  const { t } = useTranslation("global");

  type userRegisterValues = z.infer<typeof signInSchema>;
  const defaultValues: Partial<userRegisterValues> = {};

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<userRegisterValues>({
    resolver: zodResolver(signInSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (data: userRegisterValues) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
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
