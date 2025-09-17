"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Software from "./slides/Software";
import Music from "./slides/Music";
import Fade from "embla-carousel-fade";

const HeroSection = () => {
  return (
    <section className="bg-black">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Fade(),
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <Software />
          <Music />
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
