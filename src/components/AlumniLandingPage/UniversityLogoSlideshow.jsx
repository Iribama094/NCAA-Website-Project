"use client";

import { useEffect, useRef, useState } from "react";

const universityLogos = [
  { name: "University of Toronto", src: "/university-logos/toronto.png" },
  { name: "York University", src: "/university-logos/york.jpg" },
  { name: "Humber College", src: "/university-logos/humber.png" },
  { name: "UBC", src: "/university-logos/ubc.png" },
  { name: "McMaster University", src: "/university-logos/mcmaster.png" },
  { name: "ABUAD", src: "/university-logos/abuad.png" },
  { name: "Ivey Business School", src: "/university-logos/ivey.svg" },
  { name: "University of Waterloo", src: "/university-logos/waterloo.png" },
  { name: "Saint Mary’s University", src: "/university-logos/saintmarys.svg" },
  { name: "Wilfrid Laurier University", src: "/university-logos/laurier.png" },
  { name: "Thompson Rivers University", src: "/university-logos/thompson.svg" },
  { name: "RRC Polytechnic", src: "/university-logos/rrc.png" },
  { name: "Carleton University", src: "/university-logos/carleton.svg" },
  { name: "George Brown", src: "/university-logos/georgebrown.svg" },
  { name: "Memorial University of Newfoundland", src: "/university-logos/memorial.png" },
  { name: "McGill University", src: "/university-logos/mcgill.png" },
  { name: "University of Ottawa", src: "/university-logos/ottawa.png" },
  { name: "Ryerson University", src: "/university-logos/ryerson.svg" },
  { name: "Coady Institute", src: "/university-logos/coady.png" },
  { name: "University of Ontario Institute of Technology", src: "/university-logos/uoit.png" },
  { name: "University of Toronto at Mississauga", src: "/university-logos/utm.svg" }
];

export default function UniversityLogoSlideshow() {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-[var(--secondary-black)] mb-8">Universities Our Members Attended</h2>
        <div className="overflow-hidden relative" style={{height: '110px'}}>
          <div
            ref={containerRef}
            className="flex items-center gap-12"
            style={{
              transform: `translateX(-${offset}px)`,
              transition: 'transform 0.2s linear',
              width: `${universityLogos.length * 180}px`,
            }}
            onTransitionEnd={() => {
              if (offset > universityLogos.length * 180) setOffset(0);
            }}
          >
            {universityLogos.map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center min-w-[160px]">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto object-contain mb-2 drop-shadow-lg bg-white rounded-lg p-2 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  style={{maxWidth: '140px'}}
                />
                <span className="text-xs text-gray-700 text-center">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}