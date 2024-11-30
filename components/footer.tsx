"use client";

import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

import logo from "../public/logo.png";

import { SocialLink } from "@/api/entities";
import { useGetFooterInfo, useGetSocials } from "@/hooks";
import { htmlFrom, replaceNewLines } from "@/utilities/text";

interface FooterProps {}
export type FooterBasicInfo = {
  label: string;
  children?: React.ReactNode;
};
const Footer: FunctionComponent<FooterProps> = () => {
  const { data: footerInfo } = useGetFooterInfo();
  const { data: socialLinksData } = useGetSocials();

  const workingHours = footerInfo?.WorkingHours?.split("\\n") || [];

  //@ts-ignore
  const socials: SocialLink[] = socialLinksData || [];

  const renderFooterInfo = ({ label, children }: FooterBasicInfo) => {
    return (
      <li className="flex flex-col gap-6 md:gap-10 w-full max-w-56 md:max-w-64">
        <h5 className="text-[26px] font-medium md:font-normal">{label}:</h5>
        <div className="pl-6 md:pl-0">{children}</div>
      </li>
    );
  };

  return (
    <footer className="w-full p-0 py-[62px] px-[30px] md:py-main-layout-t md:px-main-layout-x text-white">
      <div className=" grid grid-cols-12 gap-4 gap-y-6 md:gap-y-0 justify-center items-center relative after:h-[1px] after:w-full after:bg-white after:block after:absolute after:-top-[60px] after:md:-top-main-layout-t after:left-0">
        <div className="hidden lg:block lg:col-span-2">
          <Image alt="logo" src={logo.src} height={54} width={212} />
        </div>

        <ul className="flex flex-col md:flex-row gap-6 md:gap-16 text-start justify-center col-span-full md:col-span-7">
          {renderFooterInfo({
            label: "WORKING HOURS",
            children: (
              <div className="flex flex-col gap-3">
                <p className="md:text-xl font-light">{workingHours[0]}</p>
                <p className="md:text-xl font-light"> {workingHours?.[1]}</p>
              </div>
            ),
          })}
          {renderFooterInfo({
            label: "ADDRESS",
            children: (
              <p className="md:text-xl font-light">
                {htmlFrom(replaceNewLines(footerInfo?.Address || ""))}
              </p>
            ),
          })}
          {renderFooterInfo({
            label: "CONTACT",
            children: (
              <div className="flex flex-col gap-3">
                <p className="md:text-xl font-light">{footerInfo?.Phone}</p>
                <p className="md:text-xl font-light">{footerInfo?.Email}</p>
              </div>
            ),
          })}
        </ul>
        <div className="flex-1 flex flex-col self-stretch gap-4 md:gap-8  col-span-full md:col-span-3">
          <h5 className="text-[26px] font-medium md:font-normal">
            SOCIAL LINK:
          </h5>
          <div className="flex flex-col gap-11 ">
            <ul className="flex flex-wrap gap-[15px] md:gap-5">
              {socials?.map(({ Url, PlatformType }) => (
                <Link key={Url} href={Url}>
                  <li className="p-2 md:p-4 rounded-full bg-white size-min cursor-pointer">
                    <div className="size-6 md:size-8">
                      <Image
                        alt={PlatformType}
                        src={`http://www.google.com/s2/favicons?domain=${Url}&sz=128`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }} // optional
                      />
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
