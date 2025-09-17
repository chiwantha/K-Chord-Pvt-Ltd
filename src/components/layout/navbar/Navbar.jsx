"use client";

import { useEffect, useState } from "react";
import Company from "@/constants/Company";
import Image from "next/image";
import Links from "./links/Links";
import ActionNav from "./action/ActionNav";
import WidthWrapper from "../widthWrapper/WidthWrapper";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        transition-all duration-300
       ${scrolled ? "bg-white/90  shadow-md " : "bg-transparent  "}
          `}
    >
      <WidthWrapper>
        <div className={`h-[50px] flex items-center `}>
          <div className="flex items-center w-full justify-between">
            {/* Logo */}
            <div className="relative w-[120px] h-[50px]">
              <Image
                src={Company.logo}
                alt={`${Company.name} logo image`}
                fill
                className="object-contain"
              />
            </div>

            {/* Links */}
            <Links state={scrolled} />

            {/* Buttons */}
            <ActionNav />
          </div>
        </div>
      </WidthWrapper>
    </nav>
  );
};

export default Navbar;
