import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function OneProdCart() {
  return (
    <div className="flex items-center justify-between  px-10 py-6 shadow-sm">
      <div className="flex w-1/4 flex-wrap items-center gap-4">
        <div className="relative">
          <img
            className="h-10 w-[50px]"
            src="/src/assets/images/cart-image.png"
            alt="prod name"
          />
          <Button
            size="icon"
            className="absolute -start-1 -top-1 h-5 w-5 rounded-full bg-main-color text-white "
          >
            <X />
          </Button>
        </div>
        <span className="hidden sm:inline-block">LCD Monitor</span>
      </div>
      <p className="w-1/4 text-center">$650</p>
      <div className="flex w-1/4 justify-center">
        <Input
          type="number"
          className=" rounded-sm border-[#00000066] text-center focus-visible:ring-0 sm:w-[72px]"
          min={0}
          id="quantity"
          name="quantity"
        />
      </div>
      <p className="hidden w-1/4 text-end font-semibold sm:block sm:font-normal">
        $650
      </p>
    </div>
  );
}
