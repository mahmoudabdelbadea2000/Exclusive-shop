import { ICategories, IProd, IProducts } from "@/interface";
import { serverTimestamp } from "firebase/firestore";

export const products: IProducts[] = [
  {
    id: 0,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 1,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 2,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 3,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 4,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 5,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 6,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 7,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 8,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
  {
    id: 9,
    prodName: "HAVIT HV-G92 Gamepad",
    price: 120,
    description: "Description 1",
    image: "/src/assets/images/product-1.png",
  },
];

export const categories: ICategories[] = [
  { name: "Camera", svg: "/src/assets/images/Category-CellPhone.png" },
  { name: "Camera", svg: "/src/assets/images/Category-Computer.png" },
  { name: "Camera", svg: "/src/assets/images/Category-Gamepad.png" },
  { name: "Camera", svg: "/src/assets/images/Category-Headphone.png" },
  { name: "Camera", svg: "/src/assets/images/Category-SmartWatch.png" },
];

export const productsList: IProd[] = [
  {
    name: {
      en: "AK-900 Wired Keyboard",
      ar: "مفاتيح للكيبورد AK-900",
    },
    price: {
      en: "960",
      ar: "١٢٠",
    },
    description: {
      en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      ar: "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي للحروف إلى حد ما، على عكس استخدام لوريم إيبسوم.",
    },
    imageCover: "/src/assets/images/keyboard.png",
    ratingCount: {
      en: "100",
      ar: "١٠٠",
    },
    ratingValue: {
      en: "5",
      ar: "٥",
    },
    quantity: {
      en: "5",
      ar: "٥",
    },
    colors: ["#f5f5f5", "#000"],
    createdAt: serverTimestamp(),
  },
  {
    name: {
      en: "HAVIT HV-G92 Gamepad",
      ar: "دراع بلايستيشن HV-G92",
    },
    price: {
      en: "120",
      ar: "١٢٠",
    },
    description: {
      en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      ar: "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي للحروف إلى حد ما، على عكس استخدام لوريم إيبسوم.",
    },
    imageCover: "/src/assets/images/product-1.png",
    images: [
      "/src/assets/images/product-1.png",
      "/src/assets/images/product-1.png",
      "/src/assets/images/product-1.png",
    ],
    ratingCount: {
      en: "100",
      ar: "١٠٠",
    },
    ratingValue: {
      en: "5",
      ar: "٥",
    },
    quantity: {
      en: "5",
      ar: "٥",
    },
    colors: ["#f5f5f5", "#f30203", "#1f42d0"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    createdAt: serverTimestamp(),
  },
  {
    name: {
      en: "HAVIT HV-G92 Gamepad",
      ar: "دراع بلايستيشن HV-G92",
    },
    price: {
      en: "120",
      ar: "١٢٠",
    },
    description: {
      en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      ar: "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي للحروف إلى حد ما، على عكس استخدام لوريم إيبسوم.",
    },
    imageCover: "/src/assets/images/playstation-main.png",
    images: [
      "/src/assets/images/playstation-side1.png",
      "/src/assets/images/playstation-side2.png",
      "/src/assets/images/playstation-side3.png",
      "/src/assets/images/playstation-side4.png",
    ],
    ratingCount: {
      en: "100",
      ar: "١٠٠",
    },
    ratingValue: {
      en: "5",
      ar: "٥",
    },
    quantity: {
      en: "5",
      ar: "٥",
    },
    colors: ["#f5f5f5", "#f30203", "#1f42d0"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    createdAt: serverTimestamp(),
  },
  {
    name: {
      en: "The north coat",
      ar: "[جاكيت جلد",
    },
    price: {
      en: "120",
      ar: "١٢٠",
    },
    description: {
      en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      ar: "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي للحروف إلى حد ما، على عكس استخدام لوريم إيبسوم.",
    },
    imageCover: "/src/assets/images/jacket-1.png",
    images: [
      "/src/assets/images/jacket-1.png",
      "/src/assets/images/jacket-2.png",
    ],
    ratingCount: {
      en: "100",
      ar: "١٠٠",
    },
    ratingValue: {
      en: "5",
      ar: "٥",
    },
    quantity: {
      en: "5",
      ar: "٥",
    },
    colors: ["#f5f5f5", "#f30203", "#1f42d0"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    createdAt: serverTimestamp(),
  },
];
