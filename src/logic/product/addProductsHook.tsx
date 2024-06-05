import { productsList } from "@/assets/data";
import { toast } from "@/components/ui/use-toast";
import { db, imagesDB } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  StorageReference,
} from "firebase/storage";

export function AddProductsHook() {
  const collectionRef = collection(db, "products");

  const uploadImageAndGetUrl = async (
    storageRef: StorageReference,
    imagePath: string,
  ) => {
    const imageData = await fetch(imagePath).then((res) => res.blob());
    const snapshot = await uploadBytes(storageRef, imageData);
    return await getDownloadURL(snapshot.ref);
  };

  const addProd = async () => {
    for (const product of productsList) {
      try {
        const imageCoverRef = ref(
          imagesDB,
          `images/${Date.now()}-${product.imageCover.split("/").pop()}`,
        );
        const imageCoverUrl = await uploadImageAndGetUrl(
          imageCoverRef,
          product.imageCover,
        );

        const imagesUrls = [];
        if (product.images) {
          for (const image of product.images) {
            const imageRef = ref(
              imagesDB,
              `images/${Date.now()}-${image.split("/").pop()}`,
            );
            const imageUrl = await uploadImageAndGetUrl(imageRef, image);
            imagesUrls.push(imageUrl);
          }
        }
        await addDoc(collectionRef, {
          ...product,
          imageCover: imageCoverUrl,
          images: imagesUrls,
        });

        toast({
          title: "Product added successfully",
          description: "We've added your product for you.",
        });
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error adding product:",
            description: error.message,
            variant: "destructive",
          });
        }
      }
    }
  };

  return { addProd };
}
