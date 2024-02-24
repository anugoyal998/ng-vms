import Image from "next/image";
import React from "react";

const Award = ({
  year,
  title,
  location,
  image
}: {
  year: string;
  title: string;
  location: string;
  image: string;
}) => {
  return (
    <div>
      <div className="max-w-36 h-48 flex flex-col justify-center items-center">
        <Image src={image} height={92} width={111} alt="" />
        <div className="font-bold text-3xl pt-4">{year}</div>
        <div className="font-bold text-md pt-4">{title}</div>
        <div className=" text-sm pt-3"> {location}</div>
      </div>
    </div>
  );
};

export default Award;
