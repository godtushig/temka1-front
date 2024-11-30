import {
  ProjectResponseSchema,
  RentPutRequestSchema,
  RentRequestSchema,
  RentCategoryRequestSchema,
} from "@/api/dtos";
import { Rent, RentDetail, RentCategory } from "@/api/entities";
import {
  createDeleteMutationHook,
  createGetQueryHook,
  createPaginationQueryHook,
  createPostMutationHook,
  createPutMutationHook,
  SortableQueryParams,
} from "@/api/helpers";

const QUERY_KEY = "rents";
const BASE_ENDPOINT = "api/web/public/rent";

export const useGetRents = createPaginationQueryHook<
  typeof Rent,
  SortableQueryParams
>({
  endpoint: BASE_ENDPOINT,
  dataSchema: Rent,
  rQueryParams: { queryKey: [QUERY_KEY] },
  withoutSchema: true,
});

export const useGetRentDetail = createGetQueryHook<
  typeof RentDetail,
  { id: string }
>({
  endpoint: `${BASE_ENDPOINT}/:id`,
  responseSchema: RentDetail,
  rQueryParams: { queryKey: [QUERY_KEY] },
});

export const useCreateRent = createPostMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: RentRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});

export const useUpdateRent = createPutMutationHook({
  endpoint: BASE_ENDPOINT,
  bodySchema: RentPutRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteRent = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});

/** Rent categories queries */

export const useGetRentCategories = createPaginationQueryHook<
  typeof RentCategory,
  SortableQueryParams
>({
  endpoint: "api/web/public/rent-category",
  dataSchema: RentCategory,
  rQueryParams: { queryKey: ["rent-category"] },
  withoutSchema: true,
});

export const useCreateRentCategory = createPostMutationHook({
  endpoint: `${BASE_ENDPOINT}-category`,
  bodySchema: RentCategoryRequestSchema,
  responseSchema: ProjectResponseSchema,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});

export const useDeleteRentCategory = createDeleteMutationHook({
  endpoint: `${BASE_ENDPOINT}-category/:id`,
  rMutationParams: {
    onSuccess: (data, variables, context, queryClient) => {},
    onError: (error: any) => {},
  },
});
