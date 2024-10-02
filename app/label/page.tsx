'use client';

import IconRedDot from '@/components/icons/red-dot';
import { title } from '@/components/primitives';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LabelPage() {
  const router = useRouter();

  const teamMembers = [
    { imgUrl: '/itgelyo.png' },
    { imgUrl: '/itgelyo.png' },
    { imgUrl: '/itgelyo.png' },
    { imgUrl: '/itgelyo.png' },
    { imgUrl: '/itgelyo.png' },
    { imgUrl: '/itgelyo.png' },
  ];
  const info = [
    {
      title: 'record label',
      body: ` MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL WAS FOUNDED IN THE
                EARLY 2000S. OUR ARTISTS AND DJS HAVE IT’S OWN STYLE OF MUSIC
                AND EVENTS. THE LABEL RELEASE MUSIC RECORDS, DJ MIX SETS, LIVE
                PERFORMANCES AND PODCASTS.`,
    },
    {
      title: 'record label',
      body: ` MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL WAS FOUNDED IN THE
                EARLY 2000S. OUR ARTISTS AND DJS HAVE IT’S OWN STYLE OF MUSIC
                AND EVENTS. THE LABEL RELEASE MUSIC RECORDS, DJ MIX SETS, LIVE
                PERFORMANCES AND PODCASTS.`,
    },
    {
      title: 'record label',
      body: ` MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL WAS FOUNDED IN THE
                EARLY 2000S. OUR ARTISTS AND DJS HAVE IT’S OWN STYLE OF MUSIC
                AND EVENTS. THE LABEL RELEASE MUSIC RECORDS, DJ MIX SETS, LIVE
                PERFORMANCES AND PODCASTS.`,
    },
  ];

  const onClick = () => {
    router.push('/label/yo');
  };

  const renderTeam = () => {
    return (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-x-20 md:gap-y-12">
        {teamMembers.map(({ imgUrl }) => renderTeamMember({ imgUrl }))}
      </div>
    );
  };

  const renderTeamMember = ({ imgUrl }: { imgUrl: string }) => {
    return (
      <div
        key={imgUrl}
        className="relative"
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyUp={(e) => {
          e.key === 'Enter' && onClick();
        }}
      >
        <Image
          key={imgUrl}
          src={imgUrl}
          alt={imgUrl}
          width={0}
          height={0}
          sizes="100%"
          className="min-w-full w-full h-full object-cover"
        />
      </div>
    );
  };

  return (
    <div className="relative w-full flex flex-col gap-20 md:gap-28">
      <section className="pt-48 md:pt-0 md:h-screen flex flex-col items-center justify-center gap-32">
        <h1 className={title({ class: 'right-dot uppercase', size: 'main' })}>
          MMp Label
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {info.map(({ title, body }) => (
            <Card
              key={title}
              className="flex-1 md:px-5 md:py-6 bg-[#191C26]"
              radius="none"
            >
              <CardHeader className="flex gap-1.5">
                <IconRedDot height={8} width={8} />
                <h4 className="font-medium uppercase text-[20px] md:text-[42px]">
                  {title}
                </h4>
              </CardHeader>
              <CardBody className="font-light ml-3 text-[9px] md:text-[26px]">
                {body}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      <section className="md:h-full flex flex-col items-center justify-between gap-12">
        <h1 className={title({ class: 'right-dot uppercase', size: 'main' })}>
          MMP TEAM
        </h1>
        {renderTeam()}
      </section>
      <section className=" md:h-full flex flex-col items-center justify-between gap-12">
        <h2
          className={title({
            class: 'uppercase underlined after:w-1/2',
            size: 'secondary',
          })}
        >
          stage team
        </h2>
        {renderTeam()}
      </section>
      <section className=" md:h-full flex flex-col items-center justify-between gap-12">
        <h2
          className={title({
            class: 'uppercase underlined after:w-1/2',
            size: 'secondary',
          })}
        >
          light team
        </h2>
        {renderTeam()}
      </section>
    </div>
  );
}
