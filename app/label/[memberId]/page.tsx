"use client";

import { useGetTeamMemberDetail } from "@/hooks";
import { htmlFrom } from "@/utilities/text";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";

export default function MemberDetailPage() {
  const params = useParams<{ memberId: string }>();

  const { data: memberDetailsData } = useGetTeamMemberDetail({
    route: { id: params.memberId },
  });

  return (
    <section className="w-full h-full mt-28">
      <div className="flex flex-col md:flex-row gap-3 md:gap-9">
        <div className="relative flex-1 ">
          <Image
            src={memberDetailsData?.ImageUrl || ""}
            alt={memberDetailsData?.Name || ""}
            width={0}
            height={0}
            sizes="100%"
            className="min-w-full w-full max-h-[300px] md:max-h-[660px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-1.5 md:gap-6 flex-1 font-medium text-start">
          <h1
            className="md:leading-[64px] text-[20px] md:text-[53px]
           relative after:absolute  after:bg-main-2 after:bottom-1.5 after:left-1/2 after:md:translate-x-0 after:md:translate-y-0 after:-translate-x-1/2 after:-translate-y-1/2 after:md:left-0 after:h-[1px] after:w-[30%] after:md:w-[15%]
          "
          >
            {memberDetailsData?.Name}
          </h1>
          <p className="leading-[19px] md:leading-[35px] text-[16px] md:text-[29px] font-light">
            {memberDetailsData?.Role}
          </p>
          <p
            className="mt-3 md:mt-0 font-light leading-[10px] md:leading-[31px] text-[10px] md:text-[26px]
          text-center md:text-start"
          >
            {htmlFrom(memberDetailsData?.Description)}
          </p>
        </div>
      </div>
    </section>
  );
}
