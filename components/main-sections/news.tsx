'use client';

import Image from 'next/image';
import Carousel, { MediaProps } from '../common/carousel';
import { headline, title } from '../primitives';

const News = () => {
  const renderNews = ({ url, name }: MediaProps) => {
    return (
      <div className="main-section max-w-[100vw] flex gap-11">
        <div className="flex-[2] flex flex-col gap-6 ">
          <Image src={url} alt={name} />
          <p
            className={headline({
              class: 'line-clamp-3 w-4/5',
              size: 'secondary',
            })}
          >
            Brand activations. Achieving cut-through brand activation in todays
            media cluttered world requires tactical event production expertise
            andend-to-end campaign solutions for our clients.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Image src={url} alt={name} />
          <p
            className={headline({
              class: 'line-clamp-5',
              size: 'main',
            })}
          >
            Brand activations. Achieving cut-through brand activation in todays
            media cluttered world requires tactical event production expertise
            andend-to-end campaign solutions for our clients.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Image src={url} alt={name} />
          <p
            className={headline({
              class: 'line-clamp-5',
              size: 'main',
            })}
          >
            Brand activations. Achieving cut-through brand activation in todays
            media cluttered world requires tactical event production expertise
            andend-to-end campaign solutions for our clients.
          </p>
        </div>
      </div>
    );
  };

  const news = [
    {
      url: '/news/0.png',
      name: 'news',
      renderer: renderNews,
    },
    {
      url: '/news/1.png',
      name: 's',
      renderer: renderNews,
    },
    {
      url: '/news/2.png',
      name: 'b',
      renderer: renderNews,
    },
  ];

  return (
    <section
      id="news"
      className="main-section h-full flex flex-col items-center md:justify-center gap-16 mt-[70px] mb-32 md:mb-[300px]"
    >
      <div className="flex flex-col items-center justify-center gap-14">
        <h1 className={title({ class: 'right-dot', size: 'main' })}>NEWS</h1>
        <div className="flex flex-col md:flex-row gap-11">
          {/* <Carousel defaultControls slides={news} /> */}
          <div className="flex-1 md:flex-[2] flex flex-col gap-6 ">
            <Image
              src="/main-section-images/news/0.png"
              alt={'asdads'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <p
              className={headline({
                class:
                  'line-clamp-3 text-[10px] font-light text-center md:text-left',
                size: 'secondary',
              })}
            >
              Brand activations. Achieving cut-through brand activation in
              todays media cluttered world requires tactical event production
              expertise andend-to-end campaign solutions for our clients.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="/main-section-images/news/1.png"
              alt={'asdads'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <p
              className={headline({
                class: 'line-clamp-5 text-center md:text-left',
                size: 'main',
              })}
            >
              Brand activations. Achieving cut-through brand activation in
              todays media cluttered world requires tactical event production
              expertise andend-to-end campaign solutions for our clients.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <Image
              src="/main-section-images/news/2.png"
              alt={'asdads'}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <p
              className={headline({
                class: 'line-clamp-5 text-center md:text-left',
                size: 'main',
              })}
            >
              Brand activations. Achieving cut-through brand activation in
              todays media cluttered world requires tactical event production
              expertise andend-to-end campaign solutions for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
