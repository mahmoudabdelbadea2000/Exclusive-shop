import { categories } from "@/assets/data";
import { toast } from "@/components/ui/use-toast";
import { db, imagesDB } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  StorageReference,
} from "firebase/storage";

export function addCategoryHook() {
  const collectionRef = collection(db, "category");

  const uploadImageAndGetUrl = async (
    storageRef: StorageReference,
    imagePath: string,
  ) => {
    const imageData = await fetch(imagePath).then((res) => res.blob());
    const snapshot = await uploadBytes(storageRef, imageData);
    return await getDownloadURL(snapshot.ref);
  };

  const addCat = async () => {
    for (const category of categories) {
      try {
        const imageCoverRef = ref(
          imagesDB,
          `images/${Date.now()}-${category.svg.split("/").pop()}`,
        );
        const imageUrl = await uploadImageAndGetUrl(
          imageCoverRef,
          category.svg,
        );

        await addDoc(collectionRef, {
          ...category,
          image: imageUrl,
        });

        toast({
          title: "Category added successfully",
          description: "We've added your category for you.",
        });
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error adding category:",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    }
  };

  return { addCat };
}
