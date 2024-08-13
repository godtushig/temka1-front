import Image from 'next/image';

import { title } from '@/components/primitives';

interface WorksSectionProps {}

const WorksSection: React.FC<WorksSectionProps> = () => {
  const works = [
    {
      imgUrl: '/main-section-images/ondo.png',
      title: 'Khas bank',
    },
    {
      imgUrl: '/main-section-images/ondo.png',
      title: 'Khas bank',
    },
    {
      imgUrl: '/main-section-images/ondo.png',
      title: 'Khas bank',
    },
    {
      imgUrl: '/main-section-images/ondo.png',
      title: 'Khas bank',
    },
    {
      imgUrl: '/main-section-images/ondo.png',
      title: 'Khas bank',
    },
  ];

  return (
    <section className="flex flex-col items-center min-h-screen h-full gap-12 md:gap-16 pt-16 md:pt-24">
      <h1 className={title({ class: 'right-dot', size: 'main' })}>WORKS</h1>
      <div className="w-full justify-between grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 md:gap-x-8 md:gap-y-12">
        {works.map(({ imgUrl, title }) => (
          <div key={title} className="flex flex-col gap-2">
            <div className="h-[190px] w-full md:size-[400px]">
              <Image
                alt="a"
                width={0}
                height={0}
                sizes="100%"
                className="w-full h-full object-cover md:border border-[#707070]"
                src={imgUrl}
              />
            </div>
            <div className="hidden md:block text-[53px] leading-[64px] font-medium">
              {title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
