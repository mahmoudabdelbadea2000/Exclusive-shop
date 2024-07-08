export interface IProducts {
  id?: number;
  prodName: string;
  price: number;
  description: string;
  image: string;
}

export interface ICates {
  id?: string;
  name: {
    [key: string]: string;
  };
  image: string;
  products: IProd[];
  createdAt: string;
}

export interface IProd {
  id?: string;
  name: {
    [key: string]: string;
  };
  price: {
    [key: string]: string;
  };
  priceAfter?: {
    [key: string]: number;
  };
  description?: {
    [key: string]: string;
  };
  imageCover: string;
  images?: string[];
  category?: ICates[];
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
  createdAt?: string;
}
