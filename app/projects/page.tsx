import IconBottomArrow from '@/components/icons/bottom-arrow';
import { title } from '@/components/primitives';
import { Button } from '@nextui-org/button';
import CarouselSection from './components/carousel-section';
import { Link } from '@nextui-org/link';
import WorksSection from './components/works-section';

export default function ProjectsPage() {
  return (
    <>
      <section className="relative main-section h-[30vh] md:h-screen w-full">
        <div className="pt-36 md:pt-0 md:h-full flex items-center justify-center">
          <h1 className={title({ class: 'right-dot', size: 'main' })}>
            Dance events
          </h1>
          <Link href="#carousel" className="hidden md:block absolute bottom-20">
            <Button isIconOnly className="h-fit w-fit py-4 px-6">
              <IconBottomArrow />
            </Button>
          </Link>
        </div>
        {/* className="main-section h-screen flex flex-col items-center justify-end gap-4 py-8 md:py-10 " */}
      </section>
      <CarouselSection />
      <div className="px-7 md:px-28">
        <WorksSection />
      </div>
    </>
  );
}
