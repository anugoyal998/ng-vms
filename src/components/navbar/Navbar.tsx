import React from "react";
import { NavLink } from "./client";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="flex px-20 py-3 justify-between items-center">
      {/* icon */}
      <p className="">NGMVS</p>
      <div className="flex justify-between gap-11">
        <NavLink path="/" label="Home" />
        <NavLink path="/about" label="About" />
        <NavLink path="/#what-we-do" label="What We Do" />
        <NavLink path="/#contact-us" label="Contact" />
      </div>
      <Button>Donate</Button>
    </div>
  );
}