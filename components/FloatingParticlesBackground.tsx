'use client';
import React from 'react';

const COLORS = ['#ff6ec4', '#7366ff', '#6ee7b7', '#facc15', '#f87171', '#60a5fa', '#a855f7'];

const FloatingParticlesBackground = ({ count = 10 }) => {
  const particles = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 250 + 80; // between 80px and 230px
    const delay = Math.random() * 1;
    const duration = Math.random() * 2 + 6; // 6s to 16s
    const xMove = Math.random() * 150 - 50; // -50% to +50%
    const yMove = Math.random() * 100 - 50;
    const rotate = Math.random() * 960;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];

    return (
      <div
        key={i}
        className="floating-particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          '--xMove': `${xMove}%`,
          '--yMove': `${yMove}%`,
          '--rotate': `${rotate}deg`,
        } as React.CSSProperties}
      />
    );
  });

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center blur-[60px] sm:blur-[80px] md:blur-[100px] 2xl:blur-[120px]">
      <div className="relative rounded-full w-[80vw] h-[80vh] bg-black overflow-hidden md:scale-[0.8]">
        {particles}
      </div>
    </div>
  );
};

export default FloatingParticlesBackground;
