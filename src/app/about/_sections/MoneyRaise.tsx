import Image from "next/image";
import React from "react";

const MoneyRaise = () => {
  return (
    <div className="rounded-3xl bg-[#f2c94c] w-full  flex pl-20 pr-5 pt-20">
      <div className="w-2/5 flex flex-col pt-16">
        <span className="font-bold text-sm pb-5">OUR JOURNEY</span>
        <span className="font-bold text-5xl pb-7">How we raised 34M</span>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          aliquam quam architecto totam magnam ducimus suscipit non. Distinctio
          aliquid atque inventore delectus quos, nulla nisi possimus quia, nemo
          consectetur repellendus.
        </p>
        <div className="pt-12 flex justify-between w-2/3"> 
        <span>

        <p className="font-bold text-lg">34M+</p>
        <p className="text-sm">Donation Recieved</p>
        </span>
        <span>

        <p className="font-bold text-lg">400+</p>
        <p className="text-sm">Volunteers</p>
        </span>
        <span>

        <p className="font-bold text-lg">20+</p>
        <p className="text-sm">Care Homes</p>
        </span>
      </div>
      </div>
      <div className="w-3/5 pl-40  pb-10">
        <Image src="people.svg" height={350} width={554} alt=""/>
      </div>
      
    </div>
  );
};

export default MoneyRaise;
