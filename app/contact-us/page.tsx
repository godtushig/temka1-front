'use client';

import Button from '@/components/common/button';
import IconRedDot from '@/components/icons/red-dot';
import { title } from '@/components/primitives';
import { Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ContactUsPage() {
  return (
    <section className=" h-full w-full flex gap-28  md:mb-60 ">
      <div
        className="flex flex-col justify-center gap-16
       z-10
     absolute top-0 left-0 h-screen w-[45vw] bg-gradient-to-b from-main-1 to-[#050505] px-24"
      >
        <div className="flex gap-11">
          <Input variant="underlined" size="lg" label="Name" />
          <Input variant="underlined" size="lg" label="E-Mail" />
        </div>
        <Input variant="underlined" size="lg" label="Message" />
        <Button className="mt-8 w-fit capitalize">Send Message</Button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/3">
        <div className="relative w-[55vw] flex items-center justify-center">
          <Image
            src={'/logo.png'}
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
