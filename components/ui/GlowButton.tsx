'use client';
import { motion } from 'framer-motion';

type GlowButtonProps = {
  children: React.ReactNode;
};

export default function GlowButton({ children }: GlowButtonProps) {
  return (
    <div className="relative inline-block overflow-hidden rounded-full border border-gray-500 px-6 py-2 text-white text-lg font-semibold bg-black group">
      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Shine Beam Animation */}
      <motion.div
        className="absolute top-0 left-[-150%] h-full w-[200%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 rounded-full blur-sm"
        animate={{ x: ['-150%', '150%'], opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 5.8,
          ease: 'linear',
        }}
      />
    </div>
  );
}
