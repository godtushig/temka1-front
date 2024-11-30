import {
  NewsPutRequestSchema,
  NewsRequestSchema,
  ProjectResponseSchema,
} from "@/api/dtos";
import { News, NewsDetail } from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "news";
const BASE_ENDPOINT = "api/web/public/news";

export const useGetNews = createPaginationQueryHook<
  typeof News,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: News,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useGetNewsDetail = createGetQueryHook<
  typeof NewsDetail,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: NewsDetail,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateNews = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: NewsRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useUpdateNews = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: NewsPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteNews = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
