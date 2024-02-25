import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Hero from "./_sections/hero";
import KnowAboutUs from "./_sections/know-about-us";
import WhatWeDo from "./_sections/what-we-do";
import ProjectsDone from "./_sections/projects-done";
import DonationStat from "./_sections/donation-stat";
import Footer from "@/components/footer/footer";
import Volunteer from "@/components/volunteer/volunteer";
import Events from "@/components/events/events";
import ContactUs from "./_sections/contact-us";

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
      <Hero />
      <KnowAboutUs />
      <WhatWeDo />
      <ProjectsDone />
      <DonationStat />
      <div className="px-20 py-12">
        <Volunteer />
      </div>
      <div className="px-20 py-12">
        <Events data={event_info} />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
}
