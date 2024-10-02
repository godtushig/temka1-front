'use client';

import Button from '@/components/common/button';
import IconRedDot from '@/components/icons/red-dot';
import { title } from '@/components/primitives';
import { Card, CardBody, CardHeader, Input, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ContactUsPage() {
  return (
    <section className="h-screen w-full flex gap-28 relative">
      <div
        className="flex flex-col items-center justify-center gap-16
       z-10
       w-full
     md:absolute top-0 left-0 h-fit mt-32 pt-16 md:pt-0 md:mt-0 md:h-screen md:w-[45vw] bg-gradient-to-b from-[#151821] to-[#111319] px-7 md:px-24
     mx-6 md:mx-0"
      >
        <div className="md:hidden relative w-[130px] flex items-center justify-center">
          <Image
            src={'/logo-big.png'}
            alt={'logo'}
            width={0}
            height={0}
            sizes="100%"
            className="max-h-[33px] w-full h-full object-contain"
          />
        </div>
        <div className="flex w-full flex-col md:flex-row gap-2 md:gap-11">
          <Input variant="underlined" size="lg" label="Name" />
          <Input variant="underlined" size="lg" label="E-Mail" />
        </div>
        <Textarea variant="underlined" size="lg" label="Message" />
        <Button className="mt-8 w-fit capitalize">Send Message</Button>
      </div>
      <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/3">
        <div className="relative w-[55vw] flex items-center justify-center">
          <Image
            src={'/logo-big.png'}
            alt={'logo'}
            width={0}
            height={0}
            sizes="100%"
            className="max-w-[480px] max-h-[120px] w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
