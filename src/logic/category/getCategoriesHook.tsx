import { db } from "@/firebase";
import { collection, onSnapshot, DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";

interface CategoryWithId extends DocumentData {
  id: string;
}

export function GetCategoriesHook() {
  const [categories, setCategories] = useState<CategoryWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onSnapshot(
      collection(db, "category"),
      async (snapshot) => {
        await setCategories(
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

  return { categories, isLoading };
}
