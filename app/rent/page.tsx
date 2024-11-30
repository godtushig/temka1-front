"use client";
import { Accordion, AccordionItem, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";

import { title } from "@/components/primitives";
import { useGetRentCategories, useGetRents } from "@/hooks";
import { RentCategory } from "@/api/entities";
import { htmlFrom } from "@/utilities/text";

export default function RentPage() {
  const { data: categoriesData } = useGetRentCategories({
    query: {
      offset: 0,
      limit: 200,
    },
  });

  const { data: rentsData } = useGetRents({
    query: {
      offset: 0,
      limit: 200,
    },
  });

  //@ts-ignore
  const categories: RentCategory[] = categoriesData || [];
  const rents = rentsData?.Data || [];

  const tabs = categories.map((category) => ({
    id: category.CategoryId,
    label: category.CategoryName,
    contents: rents.filter((rent) => rent.CategoryId === category.CategoryId),
  }));

  return (
    <div className="relative w-full">
      <div className="pt-36 md:pt-0 md:h-full flex flex-col items-center justify-between gap-32">
        <h1 className={title({ class: "right-dot", size: "main" })}>
          MMP RENT
        </h1>
        <div className="w-full md:hidden px-7">
          <Accordion
            variant="splitted"
            itemClasses={{
              base: "!bg-[#191C26] !rounded-none !border-none !shadow-none",
              title: "uppercase text-xs",
            }}
          >
            {tabs.map(({ id, label, contents }) => (
              <AccordionItem key={id} aria-label={label} title={label}>
                {contents.map(
                  ({
                    ImageUrl: imgUrl,
                    ItemId,
                    Title: title,
                    Description: body,
                  }) => (
                    <div key={ItemId} className="flex gap-2.5 mt-5">
                      <div key={imgUrl} className="relative flex-1">
                        <Image
                          key={imgUrl}
                          src={imgUrl}
                          alt={label}
                          width={0}
                          height={0}
                          sizes="50vw"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-4 md:gap-8 flex-1 text-start">
                        <h4 className="text[20px] md:text-[53px] uppercase">
                          {title}
                        </h4>
                        <div className="text-[10px] md:text-[26px] font-light uppercase">
                          {htmlFrom(body)}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden md:block w-full">
          <Tabs
            variant="underlined"
            classNames={{
              base: "w-full justify-center bg-[#191C26] pt-2",
              cursor: "bg-main-2",
            }}
            items={tabs}
          >
            {({ id, label, contents }) => (
              <Tab
                key={id}
                title={
                  <span className="uppercase text-[26px] font-light">
                    {label}
                  </span>
                }
              >
                <div className="main-section flex flex-col">
                  {contents.map(
                    ({
                      ImageUrl: imgUrl,
                      ItemId,
                      Title: title,
                      Description: body,
                    }) => (
                      <div
                        key={ItemId}
                        className="flex even:flex-row-reverse gap-8 pt-20"
                      >
                        <div key={imgUrl} className="relative flex-1 max-h-96">
                          <Image
                            key={imgUrl}
                            src={imgUrl}
                            alt={title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="min-w-full w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-8 flex-1 text-start">
                          <h4 className="text-[53px] uppercase">{title}</h4>
                          <div className="text-[26px] font-light uppercase">
                            {htmlFrom(body)}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>
    </div>
  );
}
