import Button from '../common/button';
import { subtitle, title } from '../primitives';

const Rent = () => {
  return (
    <section
      id="rent"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/mmp.png)`,
        backgroundRepeat: 'no-repeat',
      }}
      className="main-section h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:pr-9 bg-cover md:bg-contain bg-center md:bg-left"
    >
      <div className="flex flex-col items-center md:ml-[36%]">
        <div className="text-center md:text-left">
          <div className="hidden md:block relative w-52 text-right before:h-[1px] before:w-24 before:bg-white before:block before:absolute before:top-[40%] before:left-0">
            <div className=" font-light text-lg">SINCE 2000</div>
          </div>
          <h1 className={title({ size: 'main', class: 'right-dot' })}>
            MMP LABEL
          </h1>
          <h2
            className={`max-w-4xl uppercase ${subtitle({ class: 'mt-8', size: 'main' })}`}
          >
            MMP LABEL, A PIONEER ELECTRONIC MUSIC LABEL BASED IN MONGOLIA. MMP
            RECORDLABEL HAS BEEN ESTABLISHING DIGITAL DISTRIBUTION, ARTIST
            MANAGEMENT,MUSIC MARKETING, SOUND AND VIDEO RECORDINGS SINCE 2000.
            OUR ARTISTS AND DJSHAVE ITS OWN STYLE OF MUSIC AND EVENTS. THE LABEL
            RELEASES MUSIC RECORDS,SETS, LIVE MUSIC SHOWS, PODCASTS BY ARTISTS
            AND DJS.
          </h2>
        </div>
        <div className="mt-16 md:mt-28">
          <Button withRightIcon>Explore</Button>
        </div>
      </div>
    </section>
  );
};

export default Rent;
