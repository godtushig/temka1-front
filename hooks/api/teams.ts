import {
  ProjectResponseSchema,
  TeamMemberPutRequestSchema,
  TeamMemberRequestSchema,
  TeamPutRequestSchema,
  TeamRequestSchema,
} from "@/api/dtos";
import {
  Team,
  TeamMember,
  TeamMemberDetail,
  TeamMemberWithTeam,
} from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "team";
const BASE_ENDPOINT = "api/web/public/team";

export const useGetTeams = createPaginationQueryHook<
  typeof Team,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Team,
  rQueryParams: { queryKey: [QUERY_KEY] },
  withoutSchema: true,
});

export const useGetTeamDetail = createGetQueryHook<typeof Team, { id: string }>(
  {
    endpoint: `${BASE_ENDPOINT}/:id`,
    responseSchema: Team,
    rQueryParams: { queryKey: [QUERY_KEY] },
  }
);

/** Team members queries */
const TEAM_MEMBER_QUERY_KEY = "team-members";
const TEAM_MEMBER_BASE_ENDPOINT = "api/web/public/team";

export const useGetTeamMembers = createPaginationQueryHook<
  typeof TeamMember,
  SortableQueryParams
>({
  endpoint: `${TEAM_MEMBER_BASE_ENDPOINT}/all`,
  dataSchema: TeamMember,
  rQueryParams: { queryKey: [TEAM_MEMBER_QUERY_KEY] },
  withoutSchema: true,
});
export const useGetTeamMembersWithTeam = createPaginationQueryHook<
  typeof TeamMemberWithTeam,
  SortableQueryParams
>({
  endpoint: TEAM_MEMBER_BASE_ENDPOINT,
  dataSchema: TeamMemberWithTeam,
  rQueryParams: { queryKey: [TEAM_MEMBER_QUERY_KEY] },
  withoutSchema: true,
});

export const useGetTeamMemberDetail = createGetQueryHook<
  typeof TeamMemberDetail,
  { id: string }
>({
  endpoint: `${TEAM_MEMBER_BASE_ENDPOINT}-member/:id`,
  responseSchema: TeamMemberDetail,
  rQueryParams: { queryKey: [TEAM_MEMBER_QUERY_KEY] },
});
