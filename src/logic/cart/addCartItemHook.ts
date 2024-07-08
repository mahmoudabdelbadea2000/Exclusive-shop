import { useEffect, useState } from "react";
import { GetOneProduct } from "../product/getOneProductsHook";
import { toast } from "@/components/ui/use-toast";
import { auth } from "@/firebase";
import { IProd } from "@/interface";

interface IProps {
  prodID?: string;
}

export function AddCartItemHook({ prodID }: IProps) {
  const [isCartProd, setIsCartProd] = useState<boolean>(false);
  const [cartItems, setIsCartItems] = useState<number>(0);
  const { oneProduct } = GetOneProduct(prodID ? prodID : "");

  useEffect(() => {
    const cartProd = JSON.parse(localStorage.getItem("cartProd") || "[]");
    setIsCartProd(cartProd.some((prod: IProd) => prod.id === oneProduct?.id));
  }, [oneProduct]);

  const toggleCartItems = () => {
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: "Error adding product to cart",
        description: "Please login to add products to cart",
        variant: "destructive",
      });
      return;
    }

    const cartProd = JSON.parse(localStorage.getItem("cartProd") || "[]");
    if (isCartProd) {
      const updatedCartProd = cartProd
        .filter((prod: IProd) => prod.id !== oneProduct?.id)
        .map((prod: IProd) => ({ ...prod, count: 1 }));

      localStorage.setItem("cartProd", JSON.stringify(updatedCartProd));
    } else {
      const updatedCartProd = [...cartProd, { ...oneProduct, count: 1 }];
      localStorage.setItem("cartProd", JSON.stringify(updatedCartProd));
      setIsCartItems(cartProd.length);
      toast({
        title: "adding product to cart",
        description: "added product to cart",
      });
    }

    setIsCartProd(!isCartProd);
  };

  return { toggleCartItems, isCartProd, cartItems };
}
