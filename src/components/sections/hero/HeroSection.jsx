"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Software from "./slides/Software";
import Music from "./slides/Music";

const HeroSection = () => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
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
