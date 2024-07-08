import { Eye, Heart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { IProd } from "@/interface";
import i18n from "@/locales/i18n";
import { StarRating } from "../utils/StartRating";
import {
  AddCartItemHook,
  AddProductToWishlistHook,
  GetAllProductsHook,
} from "@/logic";
import { SkeletonCard } from "./SkeletonCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

interface IProps extends IProd {
  badgeType?: string;
  saleCount?: string;
  isDelete?: boolean;
  isFav?: boolean;
  isShow?: boolean;
  id?: string;
}

export function ProductCard({
  name,
  imageCover,
  ratingCount,
  ratingValue,
  price,
  isDelete,
  isFav,
  isShow,
  id,
}: IProps) {
  const currentLang = i18n.language;
  const { isLoading } = GetAllProductsHook();
  const { toggleWishlist, isFavProd } = AddProductToWishlistHook(id ? id : "");
  const { toggleCartItems, isCartProd } = AddCartItemHook({
    prodID: id ? id : "",
  });

  return (
    <>
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="h-[350px]">
          <div className="flex flex-col gap-4">
            <div className="group relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f5f5f5]">
              <div className="group absolute end-0 top-0 flex w-full justify-between p-2">
                {/* {badgeType && badgeType === "sale" ? (
                  <Badge variant="destructive">{saleCount}</Badge>
                ) : (
                  <Badge variant="default">new</Badge>
                )} */}
                <div className="absolute end-full top-2 flex flex-col transition group-hover:end-2">
                  {!isFav && (
                    <Button
                      size="icon"
                      className="h-[34px] w-[34px] rounded-full bg-background"
                      onClick={toggleWishlist}
                    >
                      {isFavProd ? (
                        <Heart className="border-main-color fill-main-color" />
                      ) : (
                        <Heart className="text-black" />
                      )}
                    </Button>
                  )}
                  {!isShow && (
                    <Link
                      to={`/all-products/${id}`}
                      className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-background"
                    >
                      <Eye />
                    </Link>
                  )}
                  {isDelete && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="icon"
                          className="h-[34px] w-[34px] rounded-full bg-background"
                        >
                          <Trash2 className="text-black" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>
                            delete product from wishlist
                          </DialogTitle>
                          <DialogDescription>
                            did you really want to delete this product?
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <div className="flex items-center justify-end gap-3">
                            <Button
                              variant="destructive"
                              onClick={toggleWishlist}
                              type="submit"
                            >
                              delete
                            </Button>
                            <DialogClose asChild>
                              <Button type="button" variant="secondary">
                                cancel
                              </Button>
                            </DialogClose>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
              <div className="flex h-[180px] w-[190px] items-center justify-center">
                <img
                  className="max-h-full max-w-full"
                  src={imageCover}
                  alt={name[currentLang]}
                />
              </div>
              {isCartProd ? (
                <Button
                  className="absolute bottom-0 left-0 h-10 w-full rounded-none rounded-ee-sm rounded-es-sm bg-green-400 font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  onClick={toggleCartItems}
                >
                  product in cart
                </Button>
              ) : (
                <Button
                  className="absolute bottom-0 left-0 h-10 w-full rounded-none rounded-ee-sm rounded-es-sm bg-black font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  onClick={toggleCartItems}
                >
                  Add To Cart
                </Button>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium ">{name[currentLang]}</h6>
              <span className="font-medium text-main-color">
                ${price[currentLang]}
              </span>
              <div className="flex items-center gap-2">
                <StarRating
                  rating={parseInt(ratingValue ? ratingValue["en"] : "1")}
                />
                <span className="text-sm font-semibold">
                  ({ratingCount && ratingCount[currentLang]})
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
