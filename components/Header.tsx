"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Case Studies", id: "casestudies" },
  { name: "Experience", id: "experience" },
  { name: "Skill", id: "skill" },
  { name: "Hobbies", id: "hobbies" },
];

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Scroll to section if hash exists in URL
  useEffect(() => {
    const hash = window.location.hash?.substring(1);
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  const handleScroll = (id: string) => {
    setIsMobileOpen(false);

    if (pathname !== "/") {
      // Navigate to homepage with hash
      router.push(`/#${id}`);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
  <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl py-10 z-50">

  {/* Desktop Nav */}
  <div className="hidden md:flex justify-center items-center">
    <nav>
      <ul className="flex gap-10 text-base">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:font-bold transition-all duration-300"
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  </div>

  {/* Mobile Nav Toggle */}
  <div className="md:hidden flex justify-end items-center px-6">
    <button onClick={() => setIsMobileOpen(prev => !prev)}>
      {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>

  {/* Mobile Nav */}
  {isMobileOpen && (
    <nav className="md:hidden absolute top-14  left-0 w-full mt-4 z-50">
      <ul className="flex flex-col gap-4 text-lg bg-black text-white p-6 rounded-xl backdrop-blur-2xl bg-opacity-5">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer hover:font-bold transition-all duration-300"
            onClick={() => handleScroll(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  )}
</header>

  );
}

export default Header;
