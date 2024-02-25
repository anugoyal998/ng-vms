/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function ContactUs() {
  return (
    <div id="contact-us" className="px-20 py-12 bg-[#FCEDC6]">
      <div className="grid grid-cols-2 gap-8 p-12">
        <div className="flex gap-3">
          <div className="w-16 h-[1px] bg-primary mt-3" />
          <div>
            <p className="text-primary font-bold">CONTACT US</p>
            <p className="text-primary text-5xl font-bold mt-4">
              We'd love to hear from you
            </p>
            <p className="text-primary mt-3">
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>
          </div>
        </div>
        <div>
            <p className="font-bold text-primary text-2xl">Let's talk! </p>
            <div className="flex gap-3 mt-1">
                <p className="text-primary">+234 09012346514</p>
                <p className="text-primary">hello@largerthani.com</p>
            </div>
            <p className="mt-5 text-primary font-bold text-xl">Head Office</p>
            <p className="text-[#525560]">New Delhi</p>
            <p className="mt-5 text-primary font-bold text-xl">Branch Office</p>
            <p className="text-[#525560]">New Delhi</p>
        </div>
      </div>
    </div>
  );
}
