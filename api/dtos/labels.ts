import { z } from "zod";
import { LanguageEnum } from "../entities";

export const LabelRequestSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  IsActive: z.boolean(),
  OrderNo: z.number().int().optional(),
  TranslationData: z
    .array(
      z.object({
        LangCode: LanguageEnum,
        Title: z.string().min(1, "Title is required"),
        Description: z.string().optional(),
      })
    )
    .min(1, "At least one translation entry is required"),
});

export const LabelPutRequestSchema = z.object({
  Name: z.string(),
  LabelId: z.number().int(),
  IsActive: z.boolean(),
  OrderNo: z.number().int().optional(),
  TranslationData: z
    .array(
      z.object({
        LangCode: LanguageEnum, // Enum for language codes
        Title: z.string().min(1, "Title is required"), // Required string for project name
        Description: z.string().optional(), // Optional string for description
      })
    )
    .min(1, "At least one translation entry is required"), // Array of translation data
});
