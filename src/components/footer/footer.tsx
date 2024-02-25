import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <div className="bg-[#0B0706] px-20 py-12 flex justify-between">
      {/* logo */}
      <p className="text-white">NGMVS</p>
      <div className="flex gap-16">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-white hover:text-white/80">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-white/80">
            About us
          </Link>
          <Link href="/about" className="text-white hover:text-white/80">
            Team
          </Link>
          <Link href="#what-we-do" className="text-white hover:text-white/80">
            What we do
          </Link>
          <Link href="#contact-us" className="text-white hover:text-white/80">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="#projects-done" className="text-white hover:text-white/80">
            More
          </Link>
          <Link href="#projects-done" className="text-white hover:text-white/80">
            Projects
          </Link>
          <Link href="#events" className="text-white hover:text-white/80">
            Events
          </Link>
          <Link href="/" className="text-white hover:text-white/80">
            Donate
          </Link>
          <Link href="#projects-done" className="text-white hover:text-white/80">
            Blog
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-white hover:text-white/80">
            Connect
          </Link>
          <Link href="/" className="text-white hover:text-white/80">
            Facebook
          </Link>
          <Link href="/" className="text-white hover:text-white/80">
            Instagram
          </Link>
          <Link href="/" className="text-white hover:text-white/80">
            Twitter
          </Link>
          <Link href="/" className="text-white hover:text-white/80">
            Linkedin
          </Link>
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-4xl">
          Subscribe to get latest updates
        </p>
        <form className="flex rounded h-12 mt-8">
          <input
            type="email"
            placeholder="Your Email"
            className="text-[#EBF0F9]/30 outline-none border border-[#EBF0F9]/30 px-4 py-3 w-full"
            style={{
              background: "none",
              borderTopLeftRadius: "4px",
              borderBottomLeftRadius: "4px",
            }}
          />
          <Button
            className="h-full"
            variant="tertiary"
            style={{
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
