import { Eye, Heart, Star, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface IProps {
  productName: string;
  prodImage: string;
  price: number;
  rating?: string;
  badgeType?: string;
  saleCount?: string;
  isDelete?: boolean;
  isFav?: boolean;
  isShow?: boolean;
}

export function ProductCard({
  prodImage,
  productName,
  badgeType,
  saleCount,
  price,
  isDelete,
  isFav,
  isShow,
}: IProps) {
  return (
    <div className="h-[350px]">
      <div className="flex flex-col gap-4">
        <div className="group relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f5f5f5]">
          <div className="absolute top-0 flex w-full justify-between p-2">
            {badgeType && badgeType === "sale" ? (
              <Badge variant="destructive">{saleCount}</Badge>
            ) : (
              <Badge variant="default">new</Badge>
            )}
            <div className="flex flex-col">
              {!isFav && (
                <Button
                  size="icon"
                  className="h-[34px] w-[34px] rounded-full bg-background"
                >
                  <Heart className="text-black" />
                </Button>
              )}
              {!isShow && (
                <Link
                  to="all-products/:id"
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-background"
                >
                  <Eye />
                </Link>
              )}
              {isDelete && (
                <Button
                  size="icon"
                  className="h-[34px] w-[34px] rounded-full bg-background"
                >
                  <Trash2 className="text-black" />
                </Button>
              )}
            </div>
          </div>
          <div className="flex h-[180px] w-[190px] items-center justify-center">
            <img
              className="max-h-full max-w-full"
              src={prodImage}
              alt={productName}
            />
          </div>
          <Button className="absolute bottom-0 left-0 h-10 w-full rounded-ee-sm rounded-es-sm bg-black font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Add To Cart
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-medium ">{productName}</h6>
          <span className="font-medium text-main-color">${price}</span>
          <div className="flex items-center gap-2">
            <div className="flex">
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
              <Star className="h-5 w-5 text-[#FFAD33]" />
            </div>
            <span className="text-sm font-semibold">(88)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
