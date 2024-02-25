import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface VolunteerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Volunteer = React.forwardRef<HTMLDivElement, VolunteerProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <div
        className={cn("rounded-3xl", className)}
        style={{
          background: `url(bg_donate.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: 384,
          ...style,
        }}
        ref={ref}
        {...props}
      >
        <p className="text-white text-5xl font-bold text-center px-24 pt-16 ">
          You can contribute to provide a place for children with special needs!
        </p>
        <div className="pt-16 flex justify-center gap-8">
          <Button className="" variant="secondary">
            Join as a volunteer
          </Button>
          <Button className="bg-white hover:bg-white/80" variant="secondary">
            Donate
          </Button>
        </div>
      </div>
    );
  }
);

Volunteer.displayName = "Volunteer";

export default Volunteer;
