import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { toast } from "@/components/ui/use-toast";
import { IProd } from "@/interface";

export function GetWishlistProductHook() {
  const [wishlist, setWishlist] = useState<IProd[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: "Error adding product to wishlist",
        description: "Please login to add products to wishlist",
        variant: "destructive",
      });
      return;
    }

    const storedWishlist = localStorage.getItem("favProd");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(
      (product) => product.id !== productId,
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("favProd", JSON.stringify(updatedWishlist));
  };

  return { wishlist, removeFromWishlist };
}
