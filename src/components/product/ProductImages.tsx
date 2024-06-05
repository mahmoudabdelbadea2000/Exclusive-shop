import { useState, useEffect } from "react";

interface IProps {
  imageCover?: string;
  images: string[];
}

export function ProductImages({ images = [] }: IProps) {
  const [mainImage, setMainImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (images.length > 0) {
      setMainImage(images[0]);
    }
  }, [images]);

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
          {mainImage && (
            <img
              src={mainImage}
              className="max-h-full max-w-full"
              alt={`main image`}
            />
          )}
        </div>
      </div>
    </section>
  );
}
