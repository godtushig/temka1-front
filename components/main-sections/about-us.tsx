import { title } from '../primitives';

const AboutUs = () => {
  const paragraphs = [
    'MMP was established in 1999 and since then has been successfully organizingmany shows and activities. They first started with 3 members: Tuvshin, Uuree,and Bata.',
    'Special events. We have the expertise to create and stage manage events ofall sizes themes and persuasions.',
    'Product launches. Whatever you are launching, you will only get onechance to create and instantly powerful affinity with your target audience.',
    'Hospitality & outdoor events. Engaging and managing sponsors,stakeholders,suppliers, the general public and the weather is a mission bestleft to experience professionals.',
    'Conference & forums. Successful conference, forums and roadshowsrequire ultra-efficient organization, accurate administration and attentionto detail.',
    'Brand activations. Achieving cut-through brand activation in todays mediacluttered world requires tactical event production expertise andend-to-end campaign solutions for our clients.',
  ];

  return (
    <section
      id="about-us"
      className="main-section flex flex-col md:flex-row gap-8 relative"
    >
      <div className="flex flex-col text-center grow-0 justify-between gap-8 md:gap-0 px-16 py-24 md:pl-16 md:pr-20 md:pt-40 md:pb-36">
        <div className="absolute about-gradient top-0 left-0 w-full h-full" />
        <h1
          className={title({
            class: 'right-dot ',
            size: 'main',
          })}
        >
          ABOUT US
        </h1>
        <div className="flex items-center z-10">
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
      </div>
      <div className="about-paragraphs-border grow-1 flex flex-col gap-10 mt-0 md:mt-32 pb-20 ">
        {paragraphs.map((paragpraph) => (
          <p
            key={paragpraph}
            className="text-[10px] md:text-[26px] uppercase leading-tight md:leading-[31px] md:tracking-[-2px] break-words"
          >
            {paragpraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
