import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { IProd } from "@/interface";
import { useEffect, useState } from "react";

interface IProds extends IProd {
  count: number;
}

export function ViewCartItems() {
  const [cartProducts, setCartProducts] = useState<IProds[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: "Error adding product to cart",
        description: "Please login to add products to cart",
        variant: "destructive",
      });
      return;
    }

    const storedCartItems = localStorage.getItem("cartProd");
    if (storedCartItems) {
      setCartProducts(JSON.parse(storedCartItems));
    }
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedCarlist = cartProducts.filter(
      (product) => product.id !== productId,
    );
    setCartProducts(updatedCarlist);
    localStorage.setItem("cartProd", JSON.stringify(updatedCarlist));
  };

  return { cartProducts, removeFromWishlist };
}
