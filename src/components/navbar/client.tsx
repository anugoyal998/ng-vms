"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ path, label }: { path: string; label: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={cn(
        "font-semibold",
        pathname === path ? "text-[#0B0706]" : "text-[#525560]"
      )}
    >
      {label}
    </Link>
  );
};
