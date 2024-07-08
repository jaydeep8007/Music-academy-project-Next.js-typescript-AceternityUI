"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Umang Bareja",
    designation: "Product Manager",
    image: "/photos/Umang.jpeg",
  },
  {
    id: 2,
    name: "Popu",
    designation: "Software Engineer",
    image: "/photos/Popu1.jpeg",
  },

  {
    id: 3,
    name: "Dhuli ",
    designation: "Ui/Ux designer",
    image: "/photos/dhuli.jpeg",
  },
  {
    id: 4,
    name: "Ganpat ",
    designation: "Data Scientist",
    image: "/photos/ganpat.jpeg",
  },
  {
    id: 5,
    name: "Tanyo ",
    designation: "Marketing manager",
    image: "/photos/tanyo1.jpeg",
  },
  {
    id: 6,
    name: "mata ",
    designation: "Fashion Artist",
    image: "/photos/mamata.jpeg",
  },
  {
    id: 7,
    name: "JD",
    designation: "web Developer",
    image: "/photos/Jd.jpeg",
  },
];

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will guide your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
