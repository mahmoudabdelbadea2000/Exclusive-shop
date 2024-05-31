import { useState } from "react";
import image1 from "../../assets/images/playstation-main.png";
import image2 from "../../assets/images/playstation-side1.png";
import image3 from "../../assets/images/playstation-side2.png";
import image4 from "../../assets/images/playstation-side3.png";

export function ProductImages() {
  const images = [image1, image2, image3, image4];
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section>
      <div className="flex flex-col-reverse gap-7 lg:max-w-[600px] xl:flex-row">
        <div className="flex flex-row items-center justify-between gap-4  xl:flex-col">
          {images.map((img, idx) => (
            <div
              className="flex h-[70px] w-[170px] items-center justify-center rounded-sm bg-[#f5f5f5] lg:h-[138px]"
              key={idx}
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                className={`max-h-full cursor-pointer lg:h-[124px] lg:w-[121px]`}
                alt={`image${idx + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="flex h-[300px]  items-center justify-center rounded-sm bg-[#f5f5f5] lg:h-[600px] lg:w-[600px]">
          <img
            src={mainImage}
            className="max-h-full max-w-full"
            alt={`main image`}
          />
        </div>
      </div>
    </section>
  );
}
