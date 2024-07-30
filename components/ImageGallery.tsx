"use client";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface imgAppProps {
  images: any;
}

const ImageGallery = ({ images }: imgAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);
  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="imageSmall"
              width={200}
              height={200}
              className="w-full h-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-500 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="bigImage"
          width={500}
          height={500}
          className="mb-6 w-full h-full"
        />
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
