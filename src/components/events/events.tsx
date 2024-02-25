"use client";

import { Button } from "@/components/ui/button";
import { MoveRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export type EventType = {
  date: string;
  name: string;
};

interface EventsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: EventType[];
}

const Events = React.forwardRef<HTMLDivElement, EventsProps>(
  ({ data, ...props }, ref) => {
    return (
      <div id="events" {...props} ref={ref}>
        <div className="flex ">
          <p className="text-4xl whitespace-nowrap">Our Events</p>
          <div className="bg-gray-300 h-[2px] w-full mt-5 ml-2" />
        </div>
        <Carousel
          className="py-10 w-full"
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2000 })]}
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={`event-card-${index}`} className="basis-1/2">
                <EventCards {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  }
);

const EventCards = ({ date, name }: { date: string; name: string }) => {
  return (
    <div className="rounded-xl bg-[#f2c94c] pl-10 pb-10">
      <div className="flex pt-7 ">
        <p className="text-5xl font-bold pl-4">{date}</p>
        <div className="flex flex-col">
          <div className="flex">
            <p className="font-bold">Next Events</p>
            <div className="bg-black h-[2px] w-10 mt-3 ml-2" />
          </div>

          <p className="text-2xl font-bold">{name}</p>
        </div>
        <div className="pr-10">
          <Button className="h-14 w-14 rounded-full" variant="tertiary">
            <MoveRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

Events.displayName = "Events";

export default Events;
