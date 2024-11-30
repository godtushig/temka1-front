import { z } from "zod";
import { LanguageEnum } from "../entities";

export const CollabRequestSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  IsActive: z.boolean(),
  CoverImageByte: z.string().optional(),
  BannerImageByte: z.string().optional(),
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

export const CollabPutRequestSchema = z.object({
  Name: z.string(),
  CollaboratorId: z.number().int(),
  IsActive: z.boolean(),
  OrderNo: z.number().int().optional(),
  CoverImageByte: z.string().optional(), // Base64-encoded string
  BannerImageByte: z.string().optional(), // Base64-encoded string
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
