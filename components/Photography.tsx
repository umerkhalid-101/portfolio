import React from "react";
import BlurText from "./magicui/blurtext";

const photos = [
  {
    image: "/assets/photography1.jpg",
    title: "Sandy dunes somewhere",
    date: "Sep 5, 2023",
  },
  {
    image: "/assets/photography2.jpg",
    title: "The silence of the sunrise",
    date: "Jul 20, 2022",
  },
  {
    image: "/assets/photography3.avif",
    title: "Ghost Clouds?",
    date: "Jun 20, 2023",
  },
];

function PhotographySection() {
  return (
    <div className="container my-24" id="hobbies">


      <BlurText
        text="Photography as a hobby"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-center mb-5 text-2xl md:text-4xl font-medium"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map((photo, idx) => (
          <div key={idx} className="group">
            <div className="overflow-hidden rounded-xl h-[500px]">
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:brightness-110"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">{photo.date}</p>
            <h3 className="font-semibold text-white mt-1 text-lg">
              {photo.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotographySection;
