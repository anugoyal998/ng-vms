import { Button } from "@/components/ui/button";
import React from "react";

const data = [
  {
    image: "/projects-done1.png",
    label: "Mission smile 1k: Outdoor charity",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vel!",
    btnLabel: "Learn More",
    btnLink: "",
  },
  {
    image: "/projects-done2.png",
    label: "Weekly excursions",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vel!",
    btnLabel: "Learn More",
    btnLink: "",
  },
  {
    image: "/projects-done3.png",
    label: "Monthly public awareness",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vel!",
    btnLabel: "Learn More",
    btnLink: "",
  },
];

export default function ProjectsDone() {
  return (
    <div className="px-20 py-12">
      <div className="grid grid-cols-3">
        <div className="flex gap-2 col-span-2">
          <div className="bg-primary h-[2px] w-16 mt-3" />
          <div>
            <p className="font-bold text-primary">PROJECTS WE HAVE DONE</p>
            <p className="text-5xl mt-1 font-bold text-primary">
              We are creating a place where children with special needs can
              thrive
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {data.map(({ image, label, text, btnLabel, btnLink }, index) => (
          <div
            key={`projects-done-${index}`}
            style={{
              background: `url(${image})`,
              height: "350px",
              width: "350px",
            }}
            className="rounded-2xl px-8 py-12 flex flex-col justify-between"
          >
            <div>
              <p className="text-3xl font-bold text-white">{label}</p>
              <p className="mt-2 text-white">{text}</p>
            </div>
            <div>
              <Button
                className="bg-white hover:bg-white/80 mt-8"
                variant="secondary"
              >
                {btnLabel}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
