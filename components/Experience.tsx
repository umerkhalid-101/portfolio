import React from "react";
import BlurText from "./magicui/blurtext";

const experiences = [
  {
    title: "Design Lead",
    company: "Gamma Labs",
    duration: "Aug 2024 - Present",
  },
  {
    title: "Lead UX/UI Designer",
    company: "Hauraki",
    duration: "Aug 2023 - Aug 2024",
  },
  {
    title: "UX/UI Designer",
    company: "Enlatics",
    duration: "June 2023 - Aug 2023",
  },
  {
    title: "Graphic Designer",
    company: "MailMunch",
    duration: "Oct 2021 - Jun 2023",
  },
  {
    title: "User Experience Analyst",
    company: "Salams",
    duration: "May 2018 - Present",
  },
];

function ExperienceSection() {
  return (
    <div className="container" id="experience">
        <BlurText
                text="Experience"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center mb-5 text-2xl md:text-4xl font-medium"
            />
      <div className="flex flex-col divide-y divide-white/10">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between py-4 md:py-6 text-white"
          >
            <div className="text-lg md:text-xl font-medium">{exp.title}</div>
            <div className="text-right mt-2 md:mt-0">
              <div className="text-lg font-medium text-white/90">{exp.company}</div>
              <div className="text-sm text-white/60">{exp.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceSection;
