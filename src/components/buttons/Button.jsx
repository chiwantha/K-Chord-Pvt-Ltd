"use client";

import Link from "next/link";

const Button = ({ title = "Button", click, bg, pd, link, fw, type }) => {
  const classes = `${bg || "bg-[#0560D9] hover:bg-[#0C4A9C] text-white"} 
                   rounded-lg ${pd || "px-3 py-1"}
                   ${fw && `w-full`}
                   transition-colors duration-300 cursor-pointer 
                   font-bold flex items-center justify-center`;

  if (link) {
    return (
      <Link href={link} className={classes}>
        {title}
      </Link>
    );
  }

  return (
    <button onClick={click} type={type || `button`} className={classes}>
      {title}
    </button>
  );
};

export default Button;
