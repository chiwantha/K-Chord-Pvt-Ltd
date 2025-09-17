import Tag from "@/components/cards/tag/Tag";
import { CarouselItem } from "@/components/ui/carousel";
import { MusicTags, Projects } from "@/constants/Homepage";
import { motion } from "framer-motion";
import HeroImageWrapper from "../heroImageWraper/HeroImageWrapper";
import WidthWrapper from "@/components/layout/widthWrapper/WidthWrapper";
import ProjectCard from "@/components/cards/project/ProjectCard";
import BackgroundMask from "../backgroundMask/backgroundMask";

const MusicStudio = () => {
  return (
    <CarouselItem className="relative flex items-center h-screen max-h-[1000px] w-full">
      {/* Background */}
      <HeroImageWrapper image="/hero/3.png" />

      <BackgroundMask />

      {/* Foreground Content */}
      <WidthWrapper>
        <div
          className="relative z-10 grid h-full grid-cols-2 
        items-center gap-10 mt-[50px]"
        >
          <div className="space-y-6 flex flex-col items-end text-right">
            {/* heading caption music */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-end gap-2"
            >
              <h1 className="text-8xl text-white font-black leading-none">
                Sound
              </h1>
              <h1 className="text-7xl flex gap-2 text-white font-black leading-none">
                <span className="text-green-500 text-5xl mt-2 self-start">
                  Beyond
                </span>
                Limits
              </h1>
            </motion.div>
            {/* paragraph music */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="border-r-4 border-green-500 flex justify-end"
            >
              <p className="text-slate-300 text-lg max-w-xl text-right pr-4">
                At K-Chord Music Studio, we produce world-class music, craft
                unique soundscapes, and provide top-tier audio services — all
                powered by creativity and technology.
              </p>
            </motion.div>
            {/* tags music */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="flex gap-2 flex-wrap max-w-2xl justify-end"
            >
              {MusicTags.map((tag, index) => (
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
          <div className="grid grid-cols-3 items-center gap-4">
            <div className="grid gap-4">
              {Projects.slice(2, 4).map((project, index) => (
                <ProjectCard key={index} data={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </WidthWrapper>
    </CarouselItem>
  );
};

export default MusicStudio;
