import {
  CollabPutRequestSchema,
  CollabRequestSchema,
  ProjectResponseSchema,
} from "@/api/dtos";
import { Collaborator, CustomersMetrics, ProjectDetail } from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "collaborator";
const BASE_ENDPOINT = "api/admin/collaborator";

export const useGetCollabs = createPaginationQueryHook<
  typeof Collaborator,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Collaborator,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useGetCollabDetail = createGetQueryHook<
  typeof Collaborator,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: Collaborator,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateCollab = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: CollabRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useUpdateCollab = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: CollabPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteCollab = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
