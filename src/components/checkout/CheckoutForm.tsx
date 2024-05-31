import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Asterisk } from "lucide-react";
import { useTranslation } from "react-i18next";

export function CheckoutForm() {
  const { t } = useTranslation("global");
  return (
    <section className="mt-10 w-full space-y-6 md:w-[470px]">
      <div className="grid items-center gap-2">
        <Label htmlFor="firstName" className="text-gray-400">
          {t("checkout.inp.name")}
          <Asterisk className="inline-block w-3 text-red-600" />
        </Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          className="rounded-sm border-none bg-[#F5F5F5]"
          required
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="company" className="text-gray-400">
          {t("checkout.inp.company")}
        </Label>
        <Input
          type="text"
          id="company"
          name="company"
          className="rounded-sm border-none bg-[#F5F5F5]"
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="address" className="text-gray-400">
          {t("checkout.inp.address")}
          <Asterisk className="inline-block w-3 text-red-600" />
        </Label>
        <Input
          type="text"
          id="address"
          name="address"
          className="rounded-sm border-none bg-[#F5F5F5]"
          required
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="apartment" className="text-gray-400">
          {t("checkout.inp.apartment")}
        </Label>
        <Input
          type="text"
          id="apartment"
          name="apartment"
          className="rounded-sm border-none bg-[#F5F5F5]"
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="city" className="text-gray-400">
          {t("checkout.inp.city")}
          <Asterisk className="inline-block w-3 text-red-600" />
        </Label>
        <Input
          type="text"
          id="city"
          name="city"
          className="rounded-sm border-none bg-[#F5F5F5]"
          required
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="phone" className="text-gray-400">
          {t("checkout.inp.phone")}
          <Asterisk className="inline-block w-3 text-red-600" />
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          className="rounded-sm border-none bg-[#F5F5F5]"
          required
        />
      </div>
      <div className="grid items-center gap-2">
        <Label htmlFor="email" className="text-gray-400">
          {t("checkout.inp.email")}
          <Asterisk className="inline-block w-3 text-red-600" />
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          className="rounded-sm border-none bg-[#F5F5F5]"
          required
        />
      </div>
      <div className="flex items-center gap-4">
        <Checkbox id="terms" />
        <Label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {t("checkout.inp.save-info")}
        </Label>
      </div>
    </section>
  );
}
