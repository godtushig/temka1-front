import {
  ProjectResponseSchema,
  SocialLinkPutRequestSchema,
  SocialLinkRequestSchema,
} from "@/api/dtos";
import { SocialLink } from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "socials";
const BASE_ENDPOINT = "api/web/public/social-link";

export const useGetSocials = createPaginationQueryHook<
  typeof SocialLink,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: SocialLink,
  rQueryParams: { queryKey: [QUERY_KEY] },
  withoutSchema: true,
});

export const useGetSocialLinkDetail = createGetQueryHook<
  typeof SocialLink,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: SocialLink,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateSocialLink = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: SocialLinkRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {
      queryClient.invalidateQueries();
    },
    onError: (error: any) => {},
  },
});

export const useUpdateSocialLink = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: SocialLinkPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteSocialLink = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
