import {
  ProjectPutRequestSchema,
  ProjectRequestSchema,
  ProjectResponseSchema,
} from "@/api/dtos";
import { Project, CustomersMetrics, ProjectDetail } from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "projects";
const BASE_ENDPOINT = "api/web/public/project";

export const useGetProjects = createPaginationQueryHook<
  typeof Project,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Project,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useGetProjectDetail = createGetQueryHook<
  typeof ProjectDetail,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: ProjectDetail,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateProject = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: ProjectRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useUpdateProject = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: ProjectPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteProject = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
