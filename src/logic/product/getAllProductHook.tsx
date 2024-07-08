import { db } from "@/firebase";
import { IProd } from "@/interface";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export function GetAllProductsHook() {
  const [products, setProducts] = useState<null | IProd[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getAllProds = async () => {
      try {
        setIsLoading(true);
        const products = await getDocs(collection(db, "products"));
        const prodsData = products.docs.map((doc) => doc.data() as IProd);
        setProducts(prodsData);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    getAllProds();
  }, []);

  return { products, isLoading, error };
}
