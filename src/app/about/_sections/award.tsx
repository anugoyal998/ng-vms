import Image from "next/image";
import React from "react";

const Award = ({
  year,
  title,
  location,
  image,
}: {
  year: string;
  title: string;
  location: string;
  image: string;
}) => {
  return (
    <div className="w-36 h-48 flex flex-col justify-center items-center">
      <Image src={image} height={92} width={111} alt="" />
      <p className="font-bold text-2xl mt-4 text-primary">{year}</p>
      <p className="font-bold text-primary mt-4">{title}</p>
      <p className="text-xs text-primary font-medium mt-3"> {location}</p>
    </div>
  );
};

export default Award;
