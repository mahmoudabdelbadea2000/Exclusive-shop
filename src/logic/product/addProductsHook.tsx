import { productsList } from "@/assets/data";
import { toast } from "@/components/ui/use-toast";
import { db } from "@/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function AddProductsHook() {
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const addProd = async () => {
      for (const product of productsList) {
        try {
          setIsLoading(true);
          const collectionRef = collection(db, "products");

          const newDocRef = doc(collectionRef);
          const newProduct = {
            ...product,
            id: newDocRef.id,
          };

          await setDoc(newDocRef, newProduct);

          toast({
            title: "Product added successfully",
            description: "We've added your Product for you.",
          });
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
            toast({
              title: "Error adding Product:",
              description: error.message,
              variant: "destructive",
            });
          }
        } finally {
          setIsLoading(false);
        }
      }
    };
    addProd();
  }, []);

  return { error, isLoading };
}
