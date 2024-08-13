import { title } from '../primitives';

const WhatWeDo = () => {
  const services = [
    {
      category: 'Consulting',
      description: 'In office and/or on site day of show review services',
    },
    {
      category: 'Management',
      description:
        'Event / corporate / municipal / VENDOR / FESTIVAL STAGE CREATION AND MANAGEMENT',
    },
    {
      category: 'Marketing',
      description:
        'Event promotional services from festival to corporate meetings',
    },
  ];

  return (
    <section
      id="what-we-do"
      className="main-section h-screen flex flex-col items-center justify-end gap-4 py-8 md:py-10 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(main-section-images/what-we-do.png)` }}
    >
      <div className="text-center flex flex-col items-center gap-20 md:gap-40">
        <h1 className={title({ class: 'right-dot', size: 'main' })}>
          WHAT WE DO
        </h1>
        <ul className="flex flex-col md:flex-row justify-around gap-24 md:gap-12">
          {services.map((service) => (
            <li
              key={service.category}
              className="basis-full flex flex-col gap-6 md:gap-14"
            >
              <h3
                className={title({
                  class: 'uppercase underlined',
                  size: 'secondary',
                })}
              >
                {service.category}
              </h3>
              <p className="text-[9px] md:text-[26px] uppercase">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;
