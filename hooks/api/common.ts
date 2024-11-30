import { ContactRequest, ContactInfoSchema } from "@/api/entities";
import { createGetQueryHook, createPaginationQueryHook } from "@/api/helpers";

export const useGetContactRequests = createPaginationQueryHook({
  endpoint: "api/admin/contact-request",
  dataSchema: ContactRequest,
  rQueryParams: { queryKey: ["contact-requests"] },
  withoutSchema: true,
});

export const useGetFooterInfo = createGetQueryHook({
  endpoint: "api/web/public/contact",
  responseSchema: ContactInfoSchema,
  rQueryParams: { queryKey: ["contact-info"] },
});
