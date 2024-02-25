import Supporters from "@/components/supporters/supporters";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function KnowAboutUs() {
  return (
    <div className="py-12 px-20">
      <div className="grid grid-cols-2 items-center">
        <div className="flex gap-2">
          <div className="bg-primary h-[2px] w-16 mt-3" />
          <div>
            <p className="font-bold text-primary">KNOW ABOUT US</p>
            <p className="text-5xl mt-1 font-bold text-primary">
              We provide a happy place for children and women
            </p>
            <p className="mt-1 text-[#525560]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus voluptatum hic soluta ea pariatur.
            </p>
            <p className="mt-5 text-[#525560]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur totam maiores labore? Consequuntur ex facilis ipsa,
              minima harum, vel perferendis eveniet excepturi id totam officiis
              libero reiciendis numquam obcaecati quod.
            </p>
            <Button className="mt-8 px-6" variant="secondary">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
        <div className="flex w-full justify-center py-10 relative">
          <Image
            src="/knowAboutUs-image.png"
            width={480}
            height={578}
            alt="knowAboutUs-image"
          />
          <div className="absolute -top-8 -left-4 -z-10">
            <Image src="circle3.svg" width={225} height={210} alt="circle3" />
          </div>
          <div className="absolute -bottom-12 -right-4 -z-10">
            <Image src="circle2.svg" width={219} height={187} alt="circle3" />
          </div>
        </div>
      </div>
      <Supporters className="mt-8" />
    </div>
  );
}
