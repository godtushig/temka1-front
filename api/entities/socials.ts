import { z } from "zod";
import { LanguageEnum } from "./common";

export const SocialLink = z.object({
  SocialLinkId: z.number().int(),
  PlatformType: z.string(),
  Url: z.string(),
  OrderNo: z.number().int().optional(),
  CreatedBy: z.number().int().optional(),
  CreatedAt: z.string().datetime().optional(),
  ModifiedBy: z.number().int().optional(),
  ModifiedAt: z.string().datetime().optional(),
});

export type SocialLink = z.infer<typeof SocialLink>;
