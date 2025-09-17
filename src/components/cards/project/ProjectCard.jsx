import Button from "@/components/buttons/Button";
import ColorPallet from "@/constants/ColorPallet";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({ data, index = 1 }) => {
  const { title, description, image, link } = data || {};
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.6 }}
      className="bg-black/50 hover:bg-slate-700/20 backdrop-blur-md 
      rounded-lg overflow-hidden 
    shadow-md border border-slate-500/50  flex flex-col h-fit "
    >
      <div className="relative rounded.lg w-full h-full aspect-[10/7.5] ">
        <Image
          src={image || `/hero/0.png`}
          alt="project"
          fill
          className="rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 py-3">
        <h3 className={`text-lg font-bold ${ColorPallet.themeText}`}>
          {title || `Project Title`}
        </h3>
        <p
          className="text-slate-300 text-[15px] text-ellipsis
        line-clamp-3 mb-2 "
        >
          {description ||
            `
          A brief description of the project goes here. It should be concise and
          informative. And Impresively
          `}
        </p>
        <Button
          bg={`${ColorPallet.theme} text-white hover:bg-[#31457c] w-fit`}
          title={
            <span className="flex gap-1 items-center">
              Read <FiArrowUpRight />
            </span>
          }
          link={link || false}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
