import React from "react";
import Award from "./_sections/award";
import MoneyRaise from "./_sections/MoneyRaise";
import MeetOurTeam from "./_sections/MeetOurTeam";
import Volunteer from "@/components/volunteer/volunteer";
import Events from "@/components/events/events";
import Supporters from "@/components/supporters/supporters";
const data = [
  {
    image: "awardbadge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "New York, USA",
  },
  {
    image: "awardbadge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "New York, USA",
  },
  {
    image: "awardbadge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "New York, USA",
  },
  {
    image: "awardbadge.svg",
    year: "2021",
    title: "Best NGO Award",
    location: "New York, USA",
  },
];

const event_info = [
  {
    date: "13 APR",
    name: "A day with our wonderful children",
  },
  {
    date: "13 APR",
    name: "A day with our wonderful children",
  },
  {
    date: "13 APR",
    name: "A day with our wonderful children",
  },
  {
    date: "13 APR",
    name: "A day with our wonderful children",
  },
];

export default function page() {
  return (
    <div>
      <div className="header px-24 pt-8 bg-white">
        <div className="section_title text-black text-sm ">
          ----- know about us
        </div>
        <div className="flex w-full  text-black pl-20">
          <div className="w-1/2 ">
            <p className="text-4xl">we are a non-governmental </p>
            <p className="text-4xl">organization</p>
          </div>

          <div className="w-1/2">
            <p className="text-2xl">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptates, iat dolor?
            </p>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              architecto perferendis vero11 porro facilis illum animi odit
              necessitatibus ducimus repudiandae deserunt aut, aliquid minima at
              consequatur hic soluta quas excepturi.
            </p>
          </div>
        </div>
        <div className="flex justify-center h-64 pt-20">
          <video className="bg-red-500 w-full rounded-3xl h-64"></video>
          {/* <Image src="BG.svg" height={1000} width={300} alt="ads" /> */}
        </div>
      </div>
      <div className="bg-[#fcedc6] header px-24 py-8">
        <div className="pt-20 px-20 flex">
          <div className="w-1/2 bg-blue-500 pr-10">
            <div className="font-bold text-sm">our mission</div>
            <p className="text-2xl font-bold pt-5">
              we make sure to provide inclusive care for children with special
              needs
            </p>
            <p className="text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              asperiores pariatur expedita. Voluptatibus voluptate distinctio
              libero praesentium quaerat iusto aperiam modi illum, iste
              perferendis repellendus quae sit? Maiores, repudiandae quasi.
            </p>
          </div>
          <div className="w-1/2 bg-green-500 pl-10">
            <div className="font-bold text-sm">our mission</div>
            <p className="text-2xl font-bold pt-5">
              we make sure to provide inclusive care for children with special
              needs
            </p>
            <p className="text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
              asperiores pariatur expedita. Voluptatibus voluptate distinctio
              libero praesentium quaerat iusto aperiam modi illum, iste
              perferendis repellendus quae sit? Maiores, repudiandae quasi.
            </p>
          </div>
        </div>
        <Supporters className="pt-16" />
      </div>
      <div className="pt-20 px-24">
        <h1 className="font-bold text-5xl flex justify-center">
          Awards and Recognition
        </h1>
        {}
        <div className="flex justify-between pt-16 px-20">
          {data.map((item, index) => (
            <Award key={`award-${index}`} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-20 px-24">
        <MoneyRaise />
      </div>
      <div className="mt-20 px-24">
        <MeetOurTeam />
      </div>
      <div className="mt-20 px-24 ">
        <Volunteer />
      </div>
      <div className="mt-20 px-24">
        <Events data={event_info} />
      </div>
    </div>
  );
}
