import Link from "next/link";

const navbarLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Links = ({ state }) => {
  return (
    <div className="flex items-center gap-6">
      {navbarLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`
            ${
              !state
                ? `text-slate-200 hover:text-slate-300`
                : `text-gray-700 hover:text-gray-900 `
            }
            transition-all
          duration-200 hover:text-[22px] font-medium text-[20px]
          `}
        >
          {<span>{link.name}</span>}
        </Link>
      ))}
    </div>
  );
};

export default Links;
