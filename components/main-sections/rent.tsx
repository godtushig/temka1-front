"use client";
import { useGetLabels } from "@/hooks";
import Button from "../common/button";
import { subtitle, title } from "../primitives";

const Rent = () => {
  const { data: labelsData } = useGetLabels({
    query: { offset: 0, limit: 15 },
  });

  const labels = labelsData || [];

  //@ts-ignore
  const featuredLabel = labels?.[0];

  return (
    <section
      id="rent"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(main-section-images/mmp.png)`,
        backgroundRepeat: "no-repeat",
      }}
      className="main-section h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:pr-9 bg-cover md:bg-contain bg-center md:bg-left"
    >
      <div className="flex flex-col items-center md:ml-[36%]">
        <div className="text-center md:text-left">
          <div className="hidden md:block relative w-52 text-right before:h-[1px] before:w-24 before:bg-white before:block before:absolute before:top-[40%] before:left-0">
            <div className=" font-light text-lg">{featuredLabel?.Title}</div>
          </div>
          <h1 className={title({ size: "main", class: "right-dot" })}>
            {featuredLabel?.Name}
          </h1>
          <h2
            className={`max-w-4xl uppercase ${subtitle({ class: "mt-8", size: "main" })}`}
          >
            {featuredLabel?.Description}
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
