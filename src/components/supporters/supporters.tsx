import Image from "next/image";
import React from "react";

interface SupportersProps extends React.HTMLAttributes<HTMLDivElement> {
  hr?: boolean;
}

const Supporters = React.forwardRef<HTMLDivElement, SupportersProps>(
  ({ hr, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        <div className="flex justify-between items-center gap-4">
          <p className="text-lg font-medium whitespace-nowrap">
            OUR SUPPORTERS
          </p>
          {hr && <div className="w-full h-[1px] bg-[#E5E5E5]" />}
        </div>
        <div className="flex pt-6 justify-between">
          {Array.from({ length: 6 })
            .map((_, index) => `logo${index + 1}.svg`)
            .map((image, index) => (
              <Image
                key={`logo-${index}`}
                src={image}
                width={142}
                height={28}
                alt="logo"
              />
            ))}
        </div>
      </div>
    );
  }
);

Supporters.displayName = "Supporters";

export default Supporters;
