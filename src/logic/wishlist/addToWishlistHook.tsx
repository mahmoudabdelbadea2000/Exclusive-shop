import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { GetOneProduct } from "../product/getOneProductsHook";
import { useEffect, useState } from "react";
import { IProd } from "@/interface";

export function AddProductToWishlistHook(prodID: string) {
  const [isFavProd, setIsFavProd] = useState<boolean>(false);
  const { oneProduct } = GetOneProduct(prodID);

  useEffect(() => {
    const favProd = JSON.parse(localStorage.getItem("favProd") || "[]");
    setIsFavProd(favProd.some((prod: IProd) => prod.id === oneProduct?.id));
  }, [oneProduct]);

  const toggleWishlist = () => {
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: "Error adding product to wishlist",
        description: "Please login to add products to wishlist",
        variant: "destructive",
      });
      return;
    }

    const favProd = JSON.parse(localStorage.getItem("favProd") || "[]");
    if (isFavProd) {
      const updatedFavProd = favProd.filter(
        (prod: IProd) => prod.id !== oneProduct?.id,
      );
      localStorage.setItem("favProd", JSON.stringify(updatedFavProd));
    } else {
      const updatedFavProd = [...favProd, oneProduct];
      localStorage.setItem("favProd", JSON.stringify(updatedFavProd));
    }

    setIsFavProd(!isFavProd);
  };

  return { toggleWishlist, isFavProd };
}
