import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import i18n from "@/locales/i18n";

interface IProps {
  removeFromWishlist: (productId: string) => void;
  name: { [key: string]: string };
  price: { [key: string]: string };
  imageCover: string;
  id: string | undefined;
  quantity: number | undefined;
}

export function OneProdCart({
  removeFromWishlist,
  id,
  imageCover,
  name,
  price,
  quantity,
}: IProps) {
  const currentLang = i18n.language;
  return (
    <div className="flex items-center justify-between  px-10 py-6 shadow-sm">
      <div className="flex w-1/4 items-center gap-4">
        <div className="relative">
          <Button
            size="icon"
            className="absolute -start-1 -top-1 h-5 w-5 rounded-full bg-main-color text-white "
            onClick={() => removeFromWishlist(id ? id : "")}
          >
            <X />
          </Button>
          <img className="h-10 w-[50px]" src={imageCover} alt="prod name" />
        </div>
        <span className="hidden sm:inline-block">{name[currentLang]}</span>
      </div>
      <p className="w-1/4 text-center">${price[currentLang]}</p>
      <div className="flex w-1/4 justify-center">
        <Input
          type="number"
          className=" rounded-sm border-[#00000066] text-center focus-visible:ring-0 sm:w-[72px]"
          min={0}
          id="quantity"
          name="quantity"
          value={quantity}
        />
      </div>
      <p className="hidden w-1/4 text-end font-semibold sm:block sm:font-normal">
        ${price[currentLang]}
      </p>
    </div>
  );
}
