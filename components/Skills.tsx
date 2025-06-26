import React from 'react'
import { ShineBorder } from './magicui/shine-border'
import BlurText from './magicui/blurtext';
const skills = [
    { label: "UI Design", shineColor: ["#A07CFE", "#FE8FB5", "#FFBE7B"], duration: 8 },
    { label: "UX Design", shineColor: ["#00C9FF", "#92FE9D"], duration: 12 },
    { label: "Product Design", shineColor: ["#FCE38A", "#F38181"], duration: 10 },
    { label: "Consulting", shineColor: ["#43CBFF", "#9708CC"], duration: 14 },
    { label: "Design Systems", shineColor: ["#C33764", "#1D2671"], duration: 11 },
    { label: "Workshops", shineColor: ["#00F260", "#0575E6"], duration: 9 },
    { label: "Design Sprint", shineColor: ["#FF6FD8", "#3813C2"], duration: 13 },
    { label: "Interaction Design", shineColor: ["#B24592", "#F15F79"], duration: 10 },
    { label: "User Testing", shineColor: ["#5EFCE8", "#736EFE"], duration: 15 },
    { label: "Usability Testing", shineColor: ["#667EEA", "#764BA2"], duration: 12 },
    { label: "UX Research", shineColor: ["#F7971E", "#FFD200"], duration: 9 },
    { label: "Leadership", shineColor: ["#43C6AC", "#F8FFAE"], duration: 14 },
    { label: "Mentoring", shineColor: ["#3EECAC", "#EE74E1"], duration: 10 },
    { label: "No-Code", shineColor: ["#9795f0", "#fbc8d4"], duration: 11 },
    { label: "+ More", shineColor: ["#FAD961", "#F76B1C"], duration: 8 },
];


function Skills() {
    return (
        <div className='container my-32 mb-44' id='skill'>
            <BlurText
                text="Skills"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-center mb-5 text-2xl md:text-4xl font-medium"
            />

            <div className='flex flex-wrap flex-row justify-start gap-3 items-center'>
                {skills.map(({ label, shineColor, duration }, key) => (
                    <div key={key} className='relative overflow-hidden p-3 px-5 rounded-xl bg-black hover:cursor-pointer'>
                        <ShineBorder shineColor={["#ffffff58", "#dddddd60", "#f4f4f490"]} borderWidth={2} duration={duration} />
                        {label}
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Skills