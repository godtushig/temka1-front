import AboutUs from '@/components/main-sections/about-us';
import News from '@/components/main-sections/news';
import Projects from '@/components/main-sections/projects';
import Rent from '@/components/main-sections/rent';
import Videos from '@/components/main-sections/videos';
import WhatWeDo from '@/components/main-sections/what-we-do';

export default function Home() {
  return (
    <>
      <Projects />
      <Rent />
      <WhatWeDo />
      <Videos />
      <AboutUs />
      <News />
    </>
  );
}
