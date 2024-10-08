'use client';
import { Accordion, AccordionItem, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';

import { title } from '@/components/primitives';

export default function RentPage() {
  let tabs = [
    {
      id: 'photos',
      label: 'light',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'sasd',
      label: 'led',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'geg',
      label: 'stage',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'yt',
      label: 'light',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'zxcz',
      label: 'light',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'ukjuj',
      label: 'light',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
    {
      id: 'ioio',
      label: 'light',
      contents: [
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
        {
          imgUrl: '/main-section-images/mmp.png',
          title: 'Retro light',
          body: 'MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000. OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS AND DJS.',
        },
      ],
    },
  ];

  return (
    <div className="relative w-full">
      <div className="pt-36 md:pt-0 md:h-full flex flex-col items-center justify-between gap-32">
        <h1 className={title({ class: 'right-dot', size: 'main' })}>
          MMP RENT
        </h1>
        <div className="w-full md:hidden px-7">
          <Accordion
            variant="splitted"
            itemClasses={{
              base: '!bg-[#191C26] !rounded-none !border-none !shadow-none',
              title: 'uppercase text-xs',
            }}
          >
            {tabs.map(({ id, label, contents }) => (
              <AccordionItem key={id} aria-label={label} title={label}>
                {contents.map(({ imgUrl, title, body }) => (
                  <div key={title} className="flex gap-2.5 mt-5">
                    <div key={imgUrl} className="relative flex-1">
                      <Image
                        key={imgUrl}
                        src={imgUrl}
                        alt={imgUrl}
                        width={0}
                        height={0}
                        sizes="50vw"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 flex-1 text-start">
                      <h4 className="text[20px] md:text-[53px] uppercase">
                        {title}
                      </h4>
                      <p className="text-[10px] md:text-[26px] font-light uppercase">
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden md:block w-full">
          <Tabs
            variant="underlined"
            classNames={{
              base: 'w-full justify-center bg-[#191C26] pt-2',
              cursor: 'bg-main-2',
            }}
            items={tabs}
          >
            {({ id, label, contents }) => (
              <Tab
                key={id}
                title={
                  <span className="uppercase text-[26px] font-light">
                    {label}
                  </span>
                }
              >
                <div className="main-section flex flex-col">
                  {contents.map(({ imgUrl, title, body }) => (
                    <div
                      key={title}
                      className="flex even:flex-row-reverse gap-8 pt-20"
                    >
                      <div key={imgUrl} className="relative flex-1 max-h-96">
                        <Image
                          key={imgUrl}
                          src={imgUrl}
                          alt={imgUrl}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="min-w-full w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-8 flex-1 text-start">
                        <h4 className="text-[53px] uppercase">{title}</h4>
                        <p className="text-[26px] font-light uppercase">
                          {body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
