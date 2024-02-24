import Image from "next/image";
import React from "react";

export default function DonationStat() {
  return (
    <div className="px-8 py-12 bg-black flex items-center justify-between">
      <div>
        <p className="text-6xl font-bold text-white w-[85%]">
          How we spend your donations and where it goes
        </p>
        <p className="w-[85%] text-white mt-6">
          We understand that when you make a  donation, you want to know exactly
          where your money is going and we pledge to be transparent.
        </p>
        <div className="mt-8 w-[80%] grid grid-cols-3 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#BEF3C0] rounded" />
            <p className="text-white font-medium">40% child care home</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#AC94F1] rounded" />
            <p className="text-white font-medium">35% cleanliness program</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#FFF0CA] rounded" />
            <p className="text-white font-medium">10% helping people</p>
          </div>
        </div>
        <div className="mt-8 w-[80%] grid grid-cols-3 items-center">
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#F9CF64] rounded" />
            <p className="text-white font-medium">10% excursions</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-4 h-4 bg-[#F38FBF] rounded" />
            <p className="text-white font-medium">5% feeding the poor</p>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="donation-chart.svg"
          width={375}
          height={375}
          alt="donation-chart"
        />
      </div>
    </div>
  );
}
