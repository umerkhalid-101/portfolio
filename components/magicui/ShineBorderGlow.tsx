"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  borderWidth?: number
  duration?: number
  shineColor?: string | string[]
}

export function ShineBorderGlow({
  borderWidth = 1,
  duration = 14,
  shineColor = "#000000",
  className,
  style,
  ...props
}: ShineBorderProps) {
  const color = Array.isArray(shineColor) ? shineColor.join(",") : shineColor

  return (
    <>
      {/* Outer Glow Layer (no clipping!) */}
      <div
        style={{
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(circle, ${color}, transparent 70%)`,
          backgroundSize: "300% 300%",
          filter: "blur(16px)",
          opacity: 0.6,
        } as React.CSSProperties}
        className={cn(
          "pointer-events-none absolute -inset-1 rounded-[inherit] will-change-[background-position] motion-safe:animate-shine z-0"
        )}
      />

      {/* Main Shine Border */}
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(circle, transparent, ${color}, transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: `${borderWidth}px`,
          ...style,
        } as React.CSSProperties}
        className={cn(
          "pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] motion-safe:animate-shine z-10",
          className
        )}
        {...props}
      />
    </>
  )
}
