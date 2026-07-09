"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery({ images = [], imageCover }) {
  const [selectedImage, setSelectedImage] = useState(imageCover);

  return (
    <div className="flex flex-col gap-4 w-full md:w-[80%] mx-auto">
      <div className="relative h-[450px] w-full overflow-hidden ">
        <Image
          src={selectedImage}
          alt="Product"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-full flex justify-between gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(img)}
            className={`relative h-28 w-28 overflow-hidden border-2 transition ${
              selectedImage !== img &&
              "border-gray-200 opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Product ${i + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
