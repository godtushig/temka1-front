import {
  CollabPutRequestSchema,
  CollabRequestSchema,
  LabelPutRequestSchema,
  LabelRequestSchema,
  ProjectResponseSchema,
} from "@/api/dtos";
import {
  Collaborator,
  CustomersMetrics,
  Label,
  LabelDetail,
  ProjectDetail,
} from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "label";
const BASE_ENDPOINT = "api/web/public/label";

export const useGetLabels = createPaginationQueryHook<
  typeof Label,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Label,
  rQueryParams: { queryKey: [QUERY_KEY] },
  withoutSchema: true,
});

export const useGetLabelDetail = createGetQueryHook<
  typeof LabelDetail,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: LabelDetail,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateLabel = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: LabelRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});

export const useUpdateLabel = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: LabelPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteLabel = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
