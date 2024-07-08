import { toast } from "@/components/ui/use-toast";
import { db } from "@/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function GetOneProduct(prodID: string) {
  const [oneProduct, setOneProduct] = useState<null | DocumentData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, "products", prodID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOneProduct(docSnap.data());
        } else {
          toast({
            title: "Error in Product page details:",
            description: "Product not found",
            variant: "destructive",
          });
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          toast({
            title: "Error in Product page details:",
            description: error.message,
            variant: "destructive",
          });
        }
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, []);

  return { oneProduct, isLoading, error };
}
