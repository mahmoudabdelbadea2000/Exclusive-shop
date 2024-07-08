import { db } from "@/firebase";
import { ICates } from "@/interface";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export function GetCategoriesHook() {
  const [categories, setCategories] = useState<null | ICates[]>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        setIsLoading(true);
        const categories = await getDocs(collection(db, "category"));
        const catsData = categories.docs.map((doc) => doc.data() as ICates);
        setCategories(catsData);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
    getAllCategories();
  }, []);

  return { categories, isLoading, error };
}
