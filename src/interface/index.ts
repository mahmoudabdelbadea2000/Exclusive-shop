import { FieldValue } from "firebase/firestore";

export interface IProducts {
  id: number;
  prodName: string;
  price: number;
  description: string;
  image: string;
}

export interface ICategories {
  name: string;
  svg: string;
}

export interface IProd {
  name: {
    [key: string]: string;
  };
  price: {
    [key: string]: string;
  };
  priceAfter?: {
    [key: string]: string;
  };
  description?: {
    [key: string]: string;
  };
  imageCover: string;
  images?: string[];
  ratingCount?: {
    [key: string]: string;
  };
  ratingValue?: {
    [key: string]: string;
  };
  quantity?: {
    [key: string]: string;
  };
  colors?: string[];
  sizes?: string[];
  createdAt?: FieldValue;
}
