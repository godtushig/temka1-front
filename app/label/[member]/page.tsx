'use client';

import IconRedDot from '@/components/icons/red-dot';
import { title } from '@/components/primitives';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';

export default function MemberPage() {
  return (
    <section className="w-full h-full mt-28">
      <div className="flex flex-col md:flex-row gap-3 md:gap-9">
        <div className="relative flex-1 ">
          <Image
            src={'/itgelyo.png'}
            alt={'itgel'}
            width={0}
            height={0}
            sizes="100%"
            className="min-w-full w-full max-h-[300px] md:max-h-[660px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-1.5 md:gap-6 flex-1 font-medium text-start">
          <h1
            className="md:leading-[64px] text-[20px] md:text-[53px]
           relative after:absolute  after:bg-main-2 after:bottom-1.5 after:left-1/2 after:md:translate-x-0 after:md:translate-y-0 after:-translate-x-1/2 after:-translate-y-1/2 after:md:left-0 after:h-[1px] after:w-[30%] after:md:w-[15%]
          "
          >
            ITGEL YO
          </h1>
          <p className="leading-[19px] md:leading-[35px] text-[16px] md:text-[29px] font-light">
            DJ PRODUCER
          </p>
          <p
            className="mt-3 md:mt-0 font-light leading-[10px] md:leading-[31px] text-[10px] md:text-[26px]
          text-center md:text-start"
          >
            MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP
            RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST
            MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000.
            OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL
            RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS
            AND DJS.
          </p>
        </div>
      </div>
    </section>
  );
}
