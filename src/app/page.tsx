import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Hero from "./_sections/hero";
import KnowAboutUs from "./_sections/know-about-us";
import WhatWeDo from "./_sections/what-we-do";
import ProjectsDone from "./_sections/projects-done";
import DonationStat from "./_sections/donation-stat";
import Footer from "@/components/footer/footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <ProjectsDone />
      <DonationStat />
      <Footer />
    </div>
  );
}
