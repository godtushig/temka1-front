"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image from "next/image";

import Button from "@/components/common/button";
import { Thumb } from "@/components/main-sections/videos";

interface CarouselSectionProps {}

const CarouselSection: React.FC<CarouselSectionProps> = () => {
  const slides = [
    {
      url: "/main-section-images/news/0.png",
      name: "f",
    },
    {
      url: "/main-section-images/news/0.png",
      name: "f1",
    },
    {
      url: "/main-section-images/news/0.png",
      name: "f2",
    },
    {
      url: "/main-section-images/news/0.png",
      name: "f3",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));

    setScrollProgress(progress * 100);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    onScroll(emblaMainApi);
    emblaMainApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section
      id="carousel"
      className="md:h-screen flex flex-col items-center justify-center relative"
    >
      <div className="overflow-hidden md:h-screen w-full relative ">
        <div ref={emblaMainRef} className="embla__viewport">
          <div className="embla__container items-center mx-5 md:mx-0 md:items-start gap-2">
            {slides.map(({ url }) => (
              <div
                key={url}
                className="relative min-w-[80vw] md:min-w-[100vw] md:embla__slide"
              >
                <Image
                  key={url}
                  src={url}
                  alt={url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="min-w-full w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-full absolute bottom-6 items-center px-[125px] gap-24">
          <Button underlined className="p-5 rounded-lg" onClick={scrollPrev}>
            <span className="absolute left-0">PREV</span>
          </Button>
          <div ref={emblaThumbsRef} className="flex-1 ">
            <div className="relative w-full top-0 flex items-center gap-5">
              <div className="h-[1px] w-full relative overflow-hidden bg-white">
                <div
                  className="absolute bg-main-2 w-full top-0 bottom-0 -left-full"
                  style={{
                    transform: `translate3d(${scrollProgress}%,0px,0px)`,
                  }}
                />
              </div>
              <span className="text-[50px] leading-[60px]">
                {parseInt(String(Math.floor(selectedIndex + 1)))}
              </span>
            </div>

            <div className="flex justify-between gap-5 relative">
              {slides.slice(0, 4).map(({ url }, index) => (
                <Thumb
                  key={index}
                  selected={index === selectedIndex}
                  url={url}
                  className="size-72"
                  onClick={() => onThumbClick(index)}
                />
              ))}
            </div>
          </div>
          <Button underlined className="p-5 rounded-lg" onClick={scrollNext}>
            <span className="absolute right-0">NEXT</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
