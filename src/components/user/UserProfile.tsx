import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please select an email to display." }),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function UserProfile() {
  const { t } = useTranslation("global");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("user.profile.labels.first-name")}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("user.profile.labels.last-name")}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("user.profile.labels.email")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("user.profile.labels.address")}</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("user.profile.labels.password")}</FormLabel>
              <FormControl>
                <div className="space-y-4">
                  <Input
                    type="password"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                    placeholder={t(
                      "user.profile.labels.placeholders.current-pass",
                    )}
                  />
                  <Input
                    type="password"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                    placeholder={t("user.profile.labels.placeholders.new-pass")}
                  />
                  <Input
                    type="password"
                    {...field}
                    className="rounded-sm border-none bg-gray-100 text-gray-500"
                    placeholder={t(
                      "user.profile.labels.placeholders.confirm-password",
                    )}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-end">
          <Button
            type="submit"
            size="lg"
            className="rounded-sm bg-main-color px-12 py-7 hover:bg-main-color"
          >
            {t("user.profile.btn.save")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
