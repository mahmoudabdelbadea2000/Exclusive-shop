import { cats } from "@/assets/data";
import { toast } from "@/components/ui/use-toast";
import { db, imagesDB } from "@/firebase";
import { uploadImageAndGetUrl } from "@/lib";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref } from "firebase/storage";
import { useEffect, useState } from "react";

export function AddCategoryHook() {
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const addCat = async () => {
      for (const category of cats) {
        try {
          setIsLoading(true);
          const collectionRef = collection(db, "category");

          const imageCoverRef = ref(
            imagesDB,
            `category-images/${Date.now()}-${category.image.split("/").pop()}`,
          );
          const imageUrl = await uploadImageAndGetUrl(
            imageCoverRef,
            category.image,
          );

          const newDocRef = doc(collectionRef);
          const newCategory = {
            ...category,
            id: newDocRef.id,
            image: imageUrl,
          };

          await setDoc(newDocRef, newCategory);
          toast({
            title: "Category added successfully",
            description: "We've added your category for you.",
          });
        } catch (error) {
          if (error instanceof Error) {
            setError(error.message);
            toast({
              title: "Error adding category:",
              description: error.message,
              variant: "destructive",
            });
          }
        } finally {
          setIsLoading(false);
        }
      }
    };
    addCat();
  }, []);

  return { error, isLoading };
}
