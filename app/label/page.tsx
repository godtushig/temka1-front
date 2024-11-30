"use client";

import { Label, TeamMember, TeamMemberWithTeam } from "@/api/entities";
import IconRedDot from "@/components/icons/red-dot";
import { title } from "@/components/primitives";
import {
  useGetLabels,
  useGetTeamMembers,
  useGetTeamMembersWithTeam,
} from "@/hooks";
import { htmlFrom } from "@/utilities/text";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LabelPage() {
  const router = useRouter();

  const { data: labelsData } = useGetLabels({
    query: { offset: 0, limit: 100 },
  });
  const { data: teamsWithMembersData } = useGetTeamMembersWithTeam();
  //@ts-ignore
  const teamsWithMembers: TeamMemberWithTeam[] =
    //@ts-ignore
    teamsWithMembersData?.Teams || [];

  //@ts-ignore
  const labels: Label[] = labelsData || [];

  const labelsInfo = labels?.map((label) => ({
    title: label?.Title,
    body: htmlFrom(label?.Description),
  }));

  const renderTeam = (members: TeamMember[]) => {
    return (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-x-20 md:gap-y-12">
        {members?.map(({ ImageUrl, MemberId }) =>
          renderTeamMember({ imgUrl: ImageUrl, memberId: MemberId })
        )}
      </div>
    );
  };

  const renderTeamMember = ({
    imgUrl,
    memberId,
  }: {
    imgUrl: string;
    memberId: number;
  }) => {
    return (
      <Link key={memberId} href={`/label/[memberId]`} as={`/label/${memberId}`}>
        <div key={imgUrl} className="relative" tabIndex={0} role="button">
          <Image
            key={imgUrl}
            src={`https://s3.cloud.mn/mongol-mix/${imgUrl}`}
            alt={imgUrl}
            width={0}
            height={0}
            sizes="100%"
            className="min-w-full w-full h-full object-cover"
          />
        </div>
      </Link>
    );
  };

  return (
    <div className="relative w-full flex flex-col gap-20 md:gap-28">
      <section className="pt-48 md:pt-0 md:h-screen flex flex-col items-center justify-center gap-32">
        <h1 className={title({ class: "right-dot uppercase", size: "main" })}>
          MMP Label
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-x-20 md:gap-y-12 ">
          {labelsInfo.map(({ title, body }) => (
            <Card
              key={title}
              className="col-span-1 md:px-5 md:py-6 bg-[#191C26]"
              radius="none"
            >
              <CardHeader className="flex gap-1.5">
                <IconRedDot height={8} width={8} />
                <h4 className="font-medium uppercase text-[20px] md:text-[42px]">
                  {title}
                </h4>
              </CardHeader>
              <CardBody className="font-light ml-3 text-[9px] md:text-[26px]">
                {body}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      {teamsWithMembers?.map(({ TeamId, Members, Name }) => (
        <section
          key={TeamId}
          className="md:h-full flex flex-col items-center justify-between gap-12"
        >
          <h1 className={title({ class: "right-dot uppercase", size: "main" })}>
            {Name}
          </h1>
          {renderTeam(Members as TeamMember[])}
        </section>
      ))}
    </div>
  );
}
