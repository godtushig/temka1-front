'use client';
import { Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';

import { title } from '@/components/primitives';

export default function AboutUsPage() {
  const paragraphs = [
    'MMP was established in 1999 and since then has been successfully organizingmany shows and activities. They first started with 3 members: Tuvshin, Uuree,and Bata.',
    'Special events. We have the expertise to create and stage manage events ofall sizes themes and persuasions.',
    'Product launches. Whatever you are launching, you will only get onechance to create and instantly powerful affinity with your target audience.',
    'Hospitality & outdoor events. Engaging and managing sponsors,stakeholders,suppliers, the general public and the weather is a mission bestleft to experience professionals.',
    'Conference & forums. Successful conference, forums and roadshowsrequire ultra-efficient organization, accurate administration and attentionto detail.',
    'Brand activations. Achieving cut-through brand activation in todays mediacluttered world requires tactical event production expertise andend-to-end campaign solutions for our clients.',
  ];

  return (
    <div className="relative w-full">
      <div className="pt-36 md:pt-0 md:h-full flex flex-col items-center justify-between gap-28">
        <h1
          className={title({ class: 'right-dot uppercase mb-9', size: 'main' })}
        >
          ABout US
        </h1>
        <div className="flex items-center">
          <div className="flex flex-col text-main-2 tracking-[-2px] leading-[0.9]">
            <p className="text-[34px] md:text-[94px]">WE</p>
            <p className="text-[29px] md:text-[79px]">ARE</p>
          </div>
          <div className="flex flex-col text-[17px] md:text-[48px] leading-[1.1] text-left">
            <p>CREATIVE</p>
            <p>PASSIONATE</p>
            <p>PROFFESIONAL</p>
          </div>
        </div>

        <div className="container flex flex-col gap-10 px-28">
          {paragraphs.map((paragpraph) => (
            <p
              key={paragpraph}
              className="text-start text-[10px] md:text-[26px] uppercase leading-tight md:leading-[31px] md:tracking-[-2px] break-words"
            >
              {paragpraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
