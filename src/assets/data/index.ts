import { ICates, IProd, IProducts } from "@/interface";

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

export const cats: ICates[] = [
  {
    name: {
      en: "Phone",
      ar: "هاتف",
    },
    image: "/src/assets/images/Category-CellPhone.png",
    products: [],
    createdAt: new Date().toString(),
  },
  {
    name: {
      en: "Computer",
      ar: "كمبيوتر",
    },
    image: "/src/assets/images/Category-Computer.png",
    products: [],
    createdAt: new Date().toString(),
  },
  {
    name: {
      en: "Gamepad",
      ar: "دراع",
    },
    image: "/src/assets/images/Category-Gamepad.png",
    products: [],
    createdAt: new Date().toString(),
  },
  {
    name: {
      en: "headPhone",
      ar: "السماعات",
    },
    image: "/src/assets/images/Category-Headphone.png",
    products: [],
    createdAt: new Date().toString(),
  },
  {
    name: {
      en: "SmartWatch",
      ar: "سماعات ذكية",
    },
    image: "/src/assets/images/Category-SmartWatch.png",
    products: [],
    createdAt: new Date().toString(),
  },
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
    imageCover:
      "https://s3-alpha-sig.figma.com/img/e59d/9f34/8cc24eeff489863523b63971c3ff8e4a?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cu7f1QlKRgw5i3OU0uvklfmnM24fioJotbF9iCjtrbRyjL4-JUN0bpWozrj7i7v2ZnjPa6xF41r4wAQxFFB66sFSL38M0-C8Uh~JInG28FqBlF5DidxpzyTHHXOm~~AIgQf7RZCZQUKGPhWiVqx7E2lUnEjzd2KWoI4yCdaLN36ZjDF27z2IFozVMxi34qLK1pwZfhyzZLS52AW33jQgC9uJQD~2X77~4jZAYnJeepBvNZyzr~HSa9oWZbumQi5MLvNm4V7Mb4xlXyUEsCRQnNHBlddcXtVZrUf5wwl~TnNUiij7udtaIsseoeVt5m8kAiTYI18U7QzV7MDh~sMWyQ__",
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
    createdAt: new Date().toString(),
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
    imageCover:
      "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baqPLV77D0bVIUAvIgMSW7a-nieAK2FdP-7xMZ0NFLvPo1FjFDfKRpOH~py6DNKpKEZgE~omg5BkVVjKr-BGH-k-Dw0GXXtu1TXcc2R-bohCWu7E2SV0KX98PH2WUlOjEuKp9BpLHvZ1wQtmcJPx06jbNBo1J5v16tVrA2dvocPlhHBtZO2kaxi-rN~VsdrkG~pqkvPlLLfNugBh4oekgeubWduJ0ortIEd5vjWmTWc8sOYJLudGlZ7HJUaLdTlBLxB256ZdV9swd0GRGSzr6OkxW9rGiqevyeWQYACbz2PCzmyR0vfGUfHMASi5NFuUR7ODO-~RJVrZijxnQRYPxg__",
    images: [
      "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baqPLV77D0bVIUAvIgMSW7a-nieAK2FdP-7xMZ0NFLvPo1FjFDfKRpOH~py6DNKpKEZgE~omg5BkVVjKr-BGH-k-Dw0GXXtu1TXcc2R-bohCWu7E2SV0KX98PH2WUlOjEuKp9BpLHvZ1wQtmcJPx06jbNBo1J5v16tVrA2dvocPlhHBtZO2kaxi-rN~VsdrkG~pqkvPlLLfNugBh4oekgeubWduJ0ortIEd5vjWmTWc8sOYJLudGlZ7HJUaLdTlBLxB256ZdV9swd0GRGSzr6OkxW9rGiqevyeWQYACbz2PCzmyR0vfGUfHMASi5NFuUR7ODO-~RJVrZijxnQRYPxg__",
      "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baqPLV77D0bVIUAvIgMSW7a-nieAK2FdP-7xMZ0NFLvPo1FjFDfKRpOH~py6DNKpKEZgE~omg5BkVVjKr-BGH-k-Dw0GXXtu1TXcc2R-bohCWu7E2SV0KX98PH2WUlOjEuKp9BpLHvZ1wQtmcJPx06jbNBo1J5v16tVrA2dvocPlhHBtZO2kaxi-rN~VsdrkG~pqkvPlLLfNugBh4oekgeubWduJ0ortIEd5vjWmTWc8sOYJLudGlZ7HJUaLdTlBLxB256ZdV9swd0GRGSzr6OkxW9rGiqevyeWQYACbz2PCzmyR0vfGUfHMASi5NFuUR7ODO-~RJVrZijxnQRYPxg__",
      "https://s3-alpha-sig.figma.com/img/5d5c/2e52/50752d55f8b60f2aa2923183dadbc135?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=baqPLV77D0bVIUAvIgMSW7a-nieAK2FdP-7xMZ0NFLvPo1FjFDfKRpOH~py6DNKpKEZgE~omg5BkVVjKr-BGH-k-Dw0GXXtu1TXcc2R-bohCWu7E2SV0KX98PH2WUlOjEuKp9BpLHvZ1wQtmcJPx06jbNBo1J5v16tVrA2dvocPlhHBtZO2kaxi-rN~VsdrkG~pqkvPlLLfNugBh4oekgeubWduJ0ortIEd5vjWmTWc8sOYJLudGlZ7HJUaLdTlBLxB256ZdV9swd0GRGSzr6OkxW9rGiqevyeWQYACbz2PCzmyR0vfGUfHMASi5NFuUR7ODO-~RJVrZijxnQRYPxg__",
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
    createdAt: new Date().toString(),
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
    imageCover:
      "https://s3-alpha-sig.figma.com/img/faa8/0b60/9e3950aed9181acb44510f859f50d850?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mIdrLe9zACP6NO49fOKQ1Sw0yyT6riNE9XLpkd2kZKnnANx6Jia3t6nkTuLoLe188oPcw-vXmaIBSn71xd~GzEnOPrihp5LXlO~k-4YulW5r5GDmbHmavaWzBUh-5M1dLmGeimNjBGbyWv40ulSrBHXtUX6dlueW05qE7uSJtLKiW8R9yrWvxxldB7ImpTOQdNUavy7K-l91qbcBANSX8pfcsrJ~dZW-6m6GSICbK~AEdyiF5DexLrByDXggUMRr~oK8XnVqoplqbwFUYsS8J3c0kCmsnWA~mjG3e1GGO2QGngfOd1yUJ59zHS7yPuIlhT4wWyn1AK2qSxllXpwgug__",
    images: [
      "https://s3-alpha-sig.figma.com/img/1490/1cca/de638588f27b571d7565fbaacfe57243?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paQv91upca-qXIMgC-Dc0szlMDtSpJ0HOrixHAVL6Z4fYW1DX1m9xHVlErFwcirNRjBSdWGtCE7SGAG7rFb5meIxAlRBqf66Ijm72qJJO2-z-xHtnkhjj~hdlwrySMBL47RPN9UTG0ek3vrMsbi4goUdj~04Vsn2UHUQrVqvNYG-imEEHetwdTu251Wq8cgLw14zLj3ZNDjeyRzGsLHbfnIGJHmh~-o0Fl2wtM3ZJbrEj~d4xfob1Vk8Fh-2q~1xNQmczRWnaFhpc-PlpTMOfnNjxJdBBgQDHfR23T5ivM5GStrXvvXm5GULW0VJrovINhzDrcliaQF54U3hWXEDgQ__",
      "https://s3-alpha-sig.figma.com/img/ca92/325b/4d31381f7fe4841786f4511bd4849d87?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UgvbDskHrMiYXXoMehAoe3PAwDrmOtD0Dx2op~fZ~ueCJC8EAxpsUS6WJMlZ1IdH56qPeh1IjVmPccXCVBrGCS9dssaYi3UeqMgo7Rcqvhc~pxONkfo3XgL9aTrVralMUG5AKK~ArgO6Nw~9qyKC4UEKjKH64nP-lMQ7Q7vOiOjTLzh-ioQuVf0e92lccJu6m1rwbD0YWN~eeFxYU3tUsi5zPHQus2WMg1hQKL8b885mPfCYzk85ZKeZtRQOIa3-avEcJAKtC0yyj8ecjc8vSLfO3BK66kX3-l1AvGepuisdosBzBSU3WHPckwJIv37bhe-npg9Fl8LKRVriYZMG6Q__",
      "https://s3-alpha-sig.figma.com/img/bdcf/fcaa/9b23a76cbe02748d2090a0b9a11cf0a5?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nGrbY2rZscDHNrMq3-LzBJy3xmp-S4dnLy~lycJlhbYC2KDwifnx3MeIswNzq85zIJRzS9vOLBg-FmreyZgXPnxLyadZPYE2z49JQvrfvitvuYON-l37YL0cOYe9igJSE32DJLa9TzB42oDWJmPtAgocwGTQhE8rPPB9CGmAVvAAW3Jnovx4JfUKIYduWIBoQZeSkOnrih-eFzYyo7gkGo0HaoYEPN-UK52-XG4n8~Yx-4Rv3eiR~w3-TB2pNtxNIU6O635idQAKAn~WNwEbWjVofbM8hHosxv-Ao8OaMA717ZuR0yWxlWFAly2o9qgDii55-V8haR2HQjwqhAKswg__",
      "https://s3-alpha-sig.figma.com/img/f109/e9ce/a445f7c73ec2a2153e0e149e85ee9d28?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rfhrvvck2yCS72uNy0UTBmwSRd-wL8ccoFXbL2jQ8IJjGK13rJReLNPQxYIVn0U4khguUwl3kezxfihCyFDY462-OMOQyheChkMSA3rKTldrWcgNENhNxfb~nXY1HKuIUgOzeWra8NJS~atOZi0c16cdlM9hYQ2RybfBsX3GknkxSh9txk2eGJgano-j2qU7kNLp5mNFzuAewud7W3WG~LOYAm-HfsO45Qm6lFpVG93vuQU7sYeA7pvTXffnMYlZVRUaRNp1zlucTlowQKBxvqFMHRhSEyEawvmBaXBRkcQZ-tnNKZ-MON4qKnyu2DTEzMq34XwBn5uy8nKMSSe1Gg__",
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
    createdAt: new Date().toString(),
  },
  {
    name: {
      en: "The north coat",
      ar: "جاكيت جلد",
    },
    price: {
      en: "120",
      ar: "١٢٠",
    },
    description: {
      en: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ",
      ar: "إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة سوف يشتت انتباه القارئ عند النظر إلى تخطيطها. المغزى من استخدام لوريم إيبسوم هو أنه يحتوي على توزيع طبيعي للحروف إلى حد ما، على عكس استخدام لوريم إيبسوم.",
    },
    imageCover:
      "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHgoCDB7TpfvzGnob4beCFZrW1w~e7U99xdEiJrELAfIWTLcJiBelLAW1M3jDxg2ePcAELrEaurJGMVymxksD6b-4CRtwa~fShzf1CjMTWmPTmD207n8A0fKo-CLwFVp79mNFOmSVsqO~wCGR3OIve3qBr8ujoU3ppmtyYOQBGll6B9ypC46T3UsINJD20ndwT-oZthQps1IPXNOBMziM5YpNqLKzS0meCJHOvv7E7rXb0H76NLAfNZnswWbj~mG-9DT8-crtYI8h~sr2xpwkDG2Lp-XM6YZ6uF1-wDc496HgqpvSG4Iydjv-WAI94~OI9u4ApE5pA3Ir1yDnLY0dg__",
    images: [
      "https://s3-alpha-sig.figma.com/img/ee9a/3800/1e9f94261b28e16ea21bacb4144473e8?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VHgoCDB7TpfvzGnob4beCFZrW1w~e7U99xdEiJrELAfIWTLcJiBelLAW1M3jDxg2ePcAELrEaurJGMVymxksD6b-4CRtwa~fShzf1CjMTWmPTmD207n8A0fKo-CLwFVp79mNFOmSVsqO~wCGR3OIve3qBr8ujoU3ppmtyYOQBGll6B9ypC46T3UsINJD20ndwT-oZthQps1IPXNOBMziM5YpNqLKzS0meCJHOvv7E7rXb0H76NLAfNZnswWbj~mG-9DT8-crtYI8h~sr2xpwkDG2Lp-XM6YZ6uF1-wDc496HgqpvSG4Iydjv-WAI94~OI9u4ApE5pA3Ir1yDnLY0dg__",
      "https://s3-alpha-sig.figma.com/img/04a1/915f/d6cedd7c8b1073685c5f1be1b50e1ac6?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jyCVFWntv1Cg0wJiobbPyt8z84W3phk4NMx9-ioytBNn0Tw7JvMsuOpBdr5r-2bn9~PkgmF48ry~qeQsy6pUhuCICv9k4MyK-53HhIgDPx8KYE7vD7cfFIApQCbmQSQKHLaNNjVC14HZNN6QjZpv6VRAFOZnpd23ckon1yHoiqOhZsQRZgFh~xLR8U~wFhJoDBB8ZLYcZRjSD8nCDzs-ia~WT-M~jOxC7FCHhFnRI0vTZkN3fbJmRIL~MVZqdkgzDdDs0S2o5wkRG6AYInOPWxmRlwPHIFYaDed4qne~01xftNiKRkG41cIbIKa-r0AHS0OcJR4v5--4NASU2bG-xQ__",
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
    createdAt: new Date().toString(),
  },
];
