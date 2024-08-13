'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@nextui-org/theme';
import Image from 'next/image';

export type MediaProps = {
  url: string;
  name: string;
};

type Props = {
  defaultControls?: boolean;
  isVideo?: boolean;
  slides: {
    url: string;
    name: string;
    renderer?: ({ url, name }: MediaProps) => any;
  }[];
  className?: string;
};

const Carousel: React.FC<Props> = ({
  isVideo = false,
  defaultControls = false,
  slides,
  className,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ container: 'z-0' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const renderMedia = ({ url, name }: MediaProps) => {
    return isVideo ? (
      <video
        autoPlay
        muted
        preload="auto"
        height="100vh"
        width="100%"
        className="h-full"
      >
        <source src={url} type="video/mp4" />
        <track kind="captions" />
      </video>
    ) : (
      <div className="absolute h-full w-full">
        <Image
          src={url}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    );
  };

  return (
    <div className={cn('embla', className)}>
      <div ref={emblaRef} className="embla__viewport">
        <div className="embla__container">
          {slides.map(({ url, name, renderer }) => (
            <div key={name} className="embla__slide">
              {renderer ? renderer({ url, name }) : renderMedia({ url, name })}
            </div>
          ))}
        </div>
        {!defaultControls ? (
          <>
            <button className="embla__prev" onClick={scrollPrev}>
              PREV
            </button>
            <button className="embla__next" onClick={scrollNext}>
              NEXT
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Carousel;
