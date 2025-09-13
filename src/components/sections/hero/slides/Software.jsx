import Tag from "@/components/cards/tag/Tag";
import { CarouselItem } from "@/components/ui/carousel";
import { Projects, SoftwareTags } from "@/constants/Homepage";
import { motion } from "framer-motion";
import HeroImageWrapper from "../HeroImageWrapper/HeroImageWrapper";
import WidthWrapper from "@/components/layout/widthWrapper/WidthWrapper";
import ProjectCard from "@/components/cards/project/ProjectCard";
const Software = () => {
  return (
    <CarouselItem className="relative flex items-end pb-8 h-screen max-h-[1000px] w-full">
      {/* Background */}
      <HeroImageWrapper image="/hero/0.png" />

      <motion.div
        className="absolute h-full bg-black/50 top-0 backdrop-blur-sm"
        initial={{ width: 0, x: 5 }}
        whileInView={{ width: "50%", x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
      <WidthWrapper>
        <div
          className="relative z-10 grid h-full grid-cols-2
         items-end gap-10"
        >
          {/* Slide Texts */}
          <div className="space-y-6 flex flex-col items-end text-right">
            {/* heading for software slide */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-end gap-2"
            >
              <h1 className="text-8xl text-white font-black leading-none">
                Building
              </h1>
              <h1 className="text-7xl flex gap-2 text-white font-black leading-none">
                <span className="text-green-500 text-5xl mt-2 self-start">
                  Digital
                </span>
                Futures
              </h1>
            </motion.div>
            {/* description for software slide */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className=" border-r-4  border-green-500 flex justify-end"
            >
              <p className="text-slate-300 text-lg max-w-xl text-right pr-4">
                At K-Chord (Pvt) Ltd, we craft powerful Software & Web
                Solutions, produce world-class Music, build smart IoT Systems,
                and design stunning Visuals — all under one roof.
              </p>
            </motion.div>
            {/* tags for software slide */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex gap-2 max-w-4xl flex-wrap justify-end"
            >
              {SoftwareTags.map((tag, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="w-fit"
                >
                  <Tag title={tag} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          {/* Slide Project Grid */}
          <div className="grid grid-cols-3 gap-4">
            {Projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} data={project} index={index} />
            ))}
          </div>
        </div>
      </WidthWrapper>
    </CarouselItem>
  );
};

export default Software;
