'use client';
import Image from 'next/image';
import Button from '../common/button';
import Carousel from '../common/carousel';
import RightArrow from '../icons/right-arrow';
import { subtitle, title } from '../primitives';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../common/EmblaCarouselDotButton';

const images = [
  {
    url: '/21112.jpg',
    name: '21112.jpg',
  },
  {
    url: '/1.jpg',
    name: 'f1',
  },
];

const Projects = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(embla);

  return (
    <section
      id="projects"
      className="main-section h-screen bg-no-repeat bg-cover relative overflow-hidden"
      // style={{
      //   background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/projects.png)`,
      // }}
    >
      <div ref={emblaRef} className="absolute top-0 left-0 opacity-50 h-full">
        <div className="flex h-full">
          {images.map(({ url, name }) => (
            <Image
              key={url}
              src={url}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="min-w-full w-full h-auto object-cover"
            />
          ))}
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-start gap-4 md:ml-24 py-8 md:py-10 relative mt-auto z-10">
        <div className="text-left flex flex-col justify-start items-center md:inline-block relative mb-32 md:mb-0">
          <h1 className={title({ class: 'right-dot', size: 'main' })}>
            PROJECTS
          </h1>
          <h2
            className={`uppercase max-w-[70%] text-center md:text-left ${subtitle({ class: 'mt-3 md:mt-8', size: 'main' })}`}
          >
            SILENCE WHITE PARTY HAS FOUNDED BY MONGOL MIX PROJECT LABEL WHICH IS
            BASED IN ULAANBAATAR, MONGOLIA. THE DELICACY OF THE PARTY IS ALL
            WHITE AND HAS BEEN SPREADING POSITIVE ENERGY THROUGH ELECTRONIC
            DANCE MUSIC EVERY YEAR SINCE 2005. EVERY YEAR, IT HAS ITS OWN THEME
            AND CONCEPT BUT ALWAYS BEEN UNDER THE MOTTO OF “SAVE THE PLANET,
            PEACE, FREEDOM AND UNITY”.
          </h2>

          <Button withRightIcon className="font-light md:hidden left-0 top-16">
            Explore
          </Button>
        </div>

        <div className="embla__dots md:hidden absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
        </div>

        <div className="w-full hidden md:flex flex-col absolute bottom-20">
          <div className="flex justify-center md:justify-start mb-8">
            <Button withRightIcon className="font-light left-0">
              Explore
            </Button>
          </div>
          <div className="hidden md:flex justify-end gap-24 right-0">
            <Button underlined className="p-5 rounded-lg" onClick={scrollPrev}>
              <span className="absolute left-0">PREV</span>
            </Button>
            <Button underlined className="p-5 rounded-lg" onClick={scrollNext}>
              <span className="absolute right-0">NEXT</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
