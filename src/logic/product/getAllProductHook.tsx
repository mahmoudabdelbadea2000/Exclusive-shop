import { db } from "@/firebase";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";

interface ProductWithId extends DocumentData {
  id: string;
}

export function GetAllProductsHook() {
  const [products, setProducts] = useState<ProductWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      async (snapshot) => {
        await setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })),
        );

        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { products, isLoading };
}
