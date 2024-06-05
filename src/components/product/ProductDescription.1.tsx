import { Heart, Repeat2, Truck } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { StarRating } from "../utils/StartRating";
import i18n from "@/locales/i18n";

export function ProductDescription({ ...oneProduct }) {
  console.log(oneProduct);
  const { t } = useTranslation("global");
  const currentLang = i18n.language;
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
        <h6 className="text-2xl font-semibold">
          {oneProduct && oneProduct.name && oneProduct.name[currentLang]}
        </h6>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <StarRating rating={5} />

            {oneProduct &&
              oneProduct.ratingCount &&
              oneProduct.ratingCount[currentLang] && (
                <span className="text-sm">
                  ({oneProduct.ratingCount[currentLang]} {t("products.reviews")}
                  )
                </span>
              )}
          </div>
          <span>|</span>
          {oneProduct && oneProduct.quantity ? (
            <span className="text-sm text-[#00FF66]">
              {t("products.stock.in")}
            </span>
          ) : (
            <span className="text-sm text-main-color">
              {t("products.stock.out")}
            </span>
          )}
        </div>
        <span className="block text-2xl">
          ${oneProduct && oneProduct.price && oneProduct.price[currentLang]}
        </span>
        <p className="text-sm">
          {oneProduct &&
            oneProduct.description &&
            oneProduct.description[currentLang]}
        </p>
        <hr />
        <div className="flex items-center gap-6">
          {t("products.color")}:
          <div className="flex items-center gap-2">
            {oneProduct &&
              oneProduct.colors &&
              oneProduct.colors.map((color: string) => (
                <span
                  key={color}
                  className="block h-5 w-5 cursor-pointer rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          {t("products.size")}:
          <div className="flex items-center gap-4">
            {oneProduct &&
              oneProduct.sizes &&
              oneProduct.sizes.map((size: string) => (
                <span
                  key={size}
                  className=" flex  h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border border-black text-sm font-medium uppercase transition hover:border-main-color hover:bg-main-color hover:text-white"
                >
                  {size}
                </span>
              ))}
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
