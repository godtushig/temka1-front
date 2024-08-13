'use client';
import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@nextui-org/theme';

import IconPlay from '../icons/play';
import Button from '../common/button';
import Image from 'next/image';

type PropType = {
  selected: boolean;
  onClick: () => void;
  url: string;
  isVideo?: boolean;
  className?: string;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, url, isVideo, className } = props;

  return (
    <div
      className={cn(
        className,
        'relative',
        `${!className ? 'h-60 w-96' : ''} ${selected ? '' : ''}`
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyUp={(e) => {
        e.key === 'Enter' && onClick();
      }}
    >
      {isVideo && <IconPlay className="absolute-center" />}
      {isVideo && (
        <video
          muted
          autoPlay={false}
          preload="auto"
          height="100vh"
          width="100%"
          className="h-full"
          src={url}
        >
          <source src={url} type="video/mp4" />
          <track kind="captions" />
        </video>
      )}
      {!isVideo && (
        <Image
          key={url}
          src={url}
          alt={url}
          width={0}
          height={0}
          sizes="100vw"
          className="min-w-full w-full h-full object-cover"
        />
      )}
    </div>
  );
};

const Videos = () => {
  const slides = [
    {
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      name: 'f',
    },
    {
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      name: 'f1',
    },
    {
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      name: 'f2',
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
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

  const scrollPrev = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollPrev();
  }, [emblaMainApi]);

  const scrollNext = useCallback(() => {
    if (emblaMainApi) emblaMainApi.scrollNext();
  }, [emblaMainApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <section
      id="videos"
      className="md:h-screen flex flex-col items-center justify-center relative py-28 md:py-0"
    >
      <div className="overflow-hidden md:h-screen w-full relative">
        <div ref={emblaMainRef} className="embla__viewport">
          <div className="embla__container items-center md:items-start gap-2">
            {slides.map(({ url }) => (
              <div key={url} className="relative min-w-[100vw] md:embla__slide">
                <video
                  autoPlay
                  muted
                  loop
                  preload="auto"
                  className="h-[220px] md:h-screen w-full object-cover"
                >
                  <source src={url} type="video/mp4" />
                  <track kind="captions" />
                </video>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:flex w-full absolute bottom-16 items-center px-[125px]">
          <Button underlined className="p-5 rounded-lg" onClick={scrollPrev}>
            <span className="absolute left-0">PREV</span>
          </Button>
          <div ref={emblaThumbsRef} className="overflow-hidden flex-1">
            <div className="flex justify-center gap-5">
              {slides.map(({ url }, index) => (
                <Thumb
                  key={index}
                  isVideo
                  selected={index === selectedIndex}
                  url={url}
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

export default Videos;
