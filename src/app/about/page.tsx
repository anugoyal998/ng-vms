import React from "react";
import Award from "./_sections/award";
import MoneyRaise from "./_sections/MoneyRaise";
import MeetOurTeam from "./_sections/MeetOurTeam";
import Volunteer from "@/components/volunteer/volunteer";
import Events from "@/components/events/events";
import Supporters from "@/components/supporters/supporters";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import Footer from "@/components/footer/footer";

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
      <Navbar />
      <div className="header px-24 pt-8 bg-white">
        <div className="section_title flex gap-3 items-center">
          <div className="h-[1px] w-16 bg-primary" />
          <p className="font-bold text-primary">KMOW ABOUT US</p>
        </div>
        <div className="flex w-full  text-black mt-3 pl-20">
          <div className="w-1/2">
            <p className="text-4xl">We are a non-governmental </p>
            <p className="text-4xl">organization</p>
          </div>

          <div className="w-1/2">
            <p className="text-xl text-primary font-bold">
              {" "}
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
            <p className="text-primary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              architecto perferendis vero11 porro facilis illum animi odit
              necessitatibus ducimus repudiandae deserunt aut, aliquid minima at
              consequatur hic soluta quas excepturi.
            </p>
          </div>
        </div>
        <div className="flex justify-center h-64 pt-20">
          {/* <video className="bg-red-500 w-full rounded-3xl h-64"></video> */}
          <div className="w-full h-64">
            <Image
              src="about-us-video-play-image.svg"
              height={1000}
              width={300}
              alt="ads"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fcedc6] header px-24 py-8 mt-36">
        <div className="pt-20 px-20 flex">
          <div className="w-1/2 pr-10">
            <div className="font-bold text-primary">OUR MISSION</div>
            <p className="text-3xl font-bold mt-2 text-primary">
              We make sure to provide inclusive care for children with special
              needs
            </p>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
          <div className="w-1/2 pl-10">
            <div className="font-bold text-primary">OUR MISSION</div>
            <p className="text-3xl font-bold mt-2 text-primary">
              Provide more inclusive care to children around the world
            </p>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
        <Supporters className="pt-16" />
      </div>
      <div className="pt-20 px-24">
        <p className="font-bold text-5xl text-primary text-center">
          Awards and Recognition
        </p>
        <div className="flex justify-between pt-16 px-20">
          {data.map((item, index) => (
            <Award key={`award-${index}`} {...item} />
          ))}
        </div>
      </div>

      <div className="mt-20 px-20">
        <MoneyRaise />
      </div>
      <div className="mt-20 px-20">
        <MeetOurTeam />
      </div>
      <div className="mt-20 px-20">
        <Volunteer />
      </div>
      <div className="mt-20 px-20">
        <Events data={event_info} />
      </div>
      <Footer />
    </div>
  );
}
