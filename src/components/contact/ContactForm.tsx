import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please select an email to display." }),
  phone: z.string(),
  massage: z.string().min(2, {
    message: "massage must be at least 2 characters.",
  }),
});

export function ContactForm() {
  const { t } = useTranslation("global");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      massage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="rounded-sm p-6 shadow-md md:col-span-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("contact.inputs.name")}
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("contact.inputs.email")}
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={t("contact.inputs.phone")}
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
            name="massage"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder={t("contact.inputs.massage")}
                    {...field}
                    className="h-[207px] rounded-sm border-none bg-gray-100 text-gray-500"
                  />
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
              {t("contact.inputs.send")}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
