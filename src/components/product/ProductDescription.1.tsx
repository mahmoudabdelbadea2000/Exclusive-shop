import { Heart, Repeat2, Star, Truck } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function ProductDescription() {
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState<number>(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <section className="mt-10 lg:mt-0">
      <div className="space-y-6">
        <h6 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h6>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
            </div>
            <span className="text-sm ">(150 {t("products.reviews")})</span>
          </div>
          <span>|</span>
          <span className="text-sm text-[#00FF66]">
            {t("products.stock.in")}
          </span>
        </div>
        <span className="block text-2xl">$192.00</span>
        <p className="text-sm">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal Pressure
          sensitive.
        </p>
        <hr />
        <div className="flex items-center gap-6">
          {t("products.color")}:
          <div className="flex items-center gap-2">
            <span className="block h-5 w-5 cursor-pointer rounded-full bg-main-color"></span>
            <span className="block h-5 w-5 cursor-pointer rounded-full bg-[#A0BCE0]"></span>
            <span className="block h-5 w-5 cursor-pointer rounded-full bg-green-900"></span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {t("products.size")}:
          <div className="flex items-center gap-4">
            <span className=" flex  h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border border-black text-sm font-medium uppercase transition hover:border-main-color hover:bg-main-color hover:text-white">
              xs
            </span>
            <span className=" flex  h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border border-black text-sm font-medium uppercase transition hover:border-main-color hover:bg-main-color hover:text-white">
              s
            </span>
            <span className=" flex  h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border border-black text-sm font-medium uppercase transition hover:border-main-color hover:bg-main-color hover:text-white">
              m
            </span>
            <span className=" flex  h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border border-black text-sm font-medium uppercase transition hover:border-main-color hover:bg-main-color hover:text-white">
              l
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:justify-between">
          <div className="flex w-[159px] items-center">
            <Button
              className="w-10 rounded-sm rounded-e-none border border-black bg-transparent text-4xl text-black transition hover:border-main-color hover:bg-main-color hover:text-white"
              onClick={handleDecrement}
            >
              -
            </Button>
            <Input
              className="no-arrows w-[calc(100%_-_80px)] rounded-none border-e-0 border-s-0 border-black text-center font-bold"
              type="number"
              min={1}
              value={quantity}
              readOnly
              id="quantity"
              name="quantity"
            />
            <Button
              className="w-10 rounded-sm rounded-s-none border border-black bg-transparent text-4xl text-black transition hover:border-main-color hover:bg-main-color hover:text-white"
              onClick={handleIncrement}
            >
              +
            </Button>
          </div>
          <Button className="rounded-sm bg-main-color  px-10">
            {t("products.btn")}
          </Button>
          <Button
            size="icon"
            className="border border-black bg-transparent text-black"
          >
            <Heart />
          </Button>
        </div>
        <div className="w-fit rounded-sm border border-black lg:w-full">
          <div className=" border-b border-b-black">
            <div className="flex items-center gap-4 p-4">
              <Truck />
              <div className="flex flex-col gap-2">
                <span className="font-medium">
                  {t("products.delivery.free")}
                </span>
                <span className="text-[12px] font-medium underline">
                  {t("products.delivery.description")}
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-4">
              <Repeat2 />
              <div className="flex flex-col gap-2">
                <span className="font-medium">{t("products.return")}</span>
                <span className="text-[12px] font-medium underline">
                  {t("products.delivery.description-2")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
