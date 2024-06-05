import { db } from "@/firebase";
import { DocumentData, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export function GetOneProduct(prodID: string) {
  const [oneProduct, setOneProduct] = useState<null | DocumentData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const get = async () => {
      setIsLoading(true);
      try {
        const docSnap = await getDoc(doc(db, "products", prodID));
        if (docSnap.exists()) {
          await setOneProduct(docSnap.data());
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { oneProduct, isLoading };
}
