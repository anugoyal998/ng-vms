import Image from "next/image";
import React from "react";

const data = [
  {
    image: "family-support.svg",
    label: "Family Support",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Verorepellendus voluptatum hic soluta ea pariatur.",
  },
  {
    image: "health-benefits.svg",
    label: "Health Benefits",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Verorepellendus voluptatum hic soluta ea pariatur.",
  },
  {
    image: "scholarship.svg",
    label: "Scholarship",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Verorepellendus voluptatum hic soluta ea pariatur.",
  },
  {
    image: "therapy.svg",
    label: "Therapy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Verorepellendus voluptatum hic soluta ea pariatur.",
  },
];

export default function WhatWeDo() {
  return (
    <div className="bg-[#FCEDC6] py-12 px-8 grid grid-cols-7 gap-10 items-center">
      <div className="flex gap-2 col-span-5">
        <div className="bg-primary h-[2px] w-8 mt-3" />
        <div>
          <p className="font-bold text-primary">WHAT WE DO</p>
          <p className="text-5xl mt-1 font-bold text-primary">
            Some services we provide for our children
          </p>
          <p className="mt-4 text-[#525560]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            repellendus voluptatum hic soluta ea pariatur.
          </p>
          <div className="mt-4 flex flex-col ml-4 gap-2">
            {data.map(({ image, text, label }, index) => (
              <div
                key={`what-we-do-${index}`}
                className="flex gap-3"
              >
                <div className="h-10 w-10 mt-2">
                  <Image src={image} width={40} height={40} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-2xl font-bold text-primary">{label}</p>
                  <p className="text-[#525560]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <Image src="/what-we-do-image.png" width={480} height={658} alt="what-we-do-image" />
      </div>
    </div>
  );
}
