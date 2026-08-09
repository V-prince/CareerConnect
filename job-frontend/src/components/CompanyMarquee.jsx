import React from 'react'

import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";


const companies = [
  {
    name: "Google",
    logo: "/images/google.png",
  },
  {
    name: "Microsoft",
    logo: "/images/microsoft.png",
  },
  {
    name: "Swiggy",
    logo: "/images/Swiggy.png",
  },
  {
    name: "Zomato",
    logo: "/images/zomato.png",
  },
  {
    name: "Delloit",
    logo: "/images/delloit.png",
  },
  {
    name: "LinkedIn",
    logo: "/images/linkedin.png",
  },
];

const CompanyMarquee = () => {
  return (
    <div className="relative w-full h-25 flex items-center overflow-hidden shadow-xl bg-white-50/50 backdrop-blur-2xl py-5">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-blue-50 to-transparent md:w-28" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-blue-50 to-transparent md:w-28" />

      <div className="flex gap-x-10 md:gap-x-24  w-max animate-marquee">

        {[...companies, ...companies].map((company, index) => {
          const Icon = company.icon;

          return (
            <div
              key={index}
              className="mx-7 flex items-center gap-3 text-zinc-500"
            >
              <img src={company.logo} alt=""  className='h-7 w-7 object-contain md:h-7 md:w-7'/>

              <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                {company.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyMarquee;