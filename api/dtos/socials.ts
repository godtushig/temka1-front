import { z } from "zod";

export const SocialLinkRequestSchema = z.object({
  PlatformType: z.string().min(1, "Name is required"),
  Url: z.string(),
  OrderNo: z.number().int().optional(),
});

export const SocialLinkPutRequestSchema = z.object({
  SocialLinkId: z.number().int(),
  PlatformType: z.string().min(1, "Name is required"),
  Url: z.string(),
  OrderNo: z.number().int().optional(),
});
