import { imagesDB } from "@/firebase";
import {
  StorageReference,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

export const uploadImageAndGetUrl = async (
  storageRef: StorageReference,
  imagePath: string,
) => {
  const imageData = await fetch(imagePath).then((res) => res.blob());
  const snapshot = await uploadBytes(storageRef, imageData);
  return await getDownloadURL(snapshot.ref);
};

export const uploadImage = async (path: string, image: string) => {
  const imageRef = ref(
    imagesDB,
    `${path}-images/${Date.now()}-${image.split("/").pop()}`,
  );
  return await uploadImageAndGetUrl(imageRef, image);
};
