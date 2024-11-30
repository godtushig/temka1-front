import { z } from "zod";
import { LanguageEnum } from "./common";

export const Label = z.object({
  LabelId: z.number().int(),
  Name: z.string().optional(),
  OrderNo: z.number().int().optional().nullable(),
  IsActive: z.boolean(),
  CreatedBy: z.number().int().optional().nullable(),
  CreatedAt: z.string().datetime().optional().nullable(),
  ModifiedBy: z.number().int().optional().nullable(),
  ModifiedAt: z.string().datetime().optional().nullable(),
  LabelId_2: z.number().int().optional().nullable(),
  LangCode: z.string().optional().nullable(),
  Title: z.string().optional(),
  Description: z.string().optional(),
});

export type Label = z.infer<typeof Label>;

export const LabelDetail = z.object({
  label: Label,
  labelContents: z.array(
    z.object({
      LabelId: z.number().int(),
      LangCode: LanguageEnum,
      Title: z.string(),
      Description: z.string().optional(),
    })
  ),
});

export type LabelDetail = z.infer<typeof LabelDetail>;

// 75099955;
