'use client';

import IconRedDot from '@/components/icons/red-dot';
import { title } from '@/components/primitives';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';

export default function MemberPage() {
  return (
    <section className="w-full h-full">
      <div className="flex gap-9">
        <div className="relative flex-1 h- max-h-[660px]">
          <Image
            src={'/itgelyo.png'}
            alt={'itgel'}
            width={0}
            height={0}
            sizes="100%"
            className="min-w-full w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 flex-1 font-medium text-start">
          <h1
            className="leading-[64px] text-[53px]
           relative after:absolute  after:bg-main-2 after:bottom-1.5 after:left-0 after:h-[1px] after:w-[15%]
          "
          >
            ITGEL YO
          </h1>
          <p className="leading-[35px] text-[29px]">DJ PRODUCER</p>
          <p className="font-light leading-[31px] text-[26px]">
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
