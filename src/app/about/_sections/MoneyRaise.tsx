import Image from "next/image";
import React from "react";

const MoneyRaise = () => {
  return (
    <div className="rounded-3xl bg-[#f2c94c] grid grid-cols-2">
      <div className="px-16 py-20">
        <p className="font-bold mb-5">OUR JOURNEY</p>
        <p className="font-bold text-5xl mb-7">How we raised 34M</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          aliquam quam architecto totam magnam ducimus suscipit non. Distinctio
          aliquid atque inventore delectus quos, nulla nisi possimus quia, nemo
          consectetur repellendus.
        </p>
        <div className="mt-8 flex gap-4">
          <div>
            <p className="font-medium text-2xl">34M+</p>
            <p className="text-xs font-medium">Donation Recieved</p>
          </div>
          <div>
            <p className="font-medium text-2xl">400+</p>
            <p className="text-xs font-medium">Volunteers</p>
          </div>
          <div>
            <p className="font-medium text-2xl">20+</p>
            <p className="text-xs font-medium">Care Homes</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src="people.svg"
          height={350}
          width={554}
          alt=""
          className="border rounded-3xl border-black/50"
        />
      </div>
    </div>
  );
};

export default MoneyRaise;
