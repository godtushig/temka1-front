import { z } from "zod";
import { LanguageEnum } from "../entities";

export const RentRequestSchema = z.object({
  CategoryId: z.number().int(), // CategoryId should be an integer
  IsActive: z.boolean(), // IsActive should be a boolean
  ImageByte: z.string(),
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

export const RentPutRequestSchema = z.object({
  ItemId: z.number().int(),
  CategoryId: z.number().int(), // CategoryId should be an integer
  IsActive: z.boolean(), // IsActive should be a boolean
  ImageByte: z.string(),
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

export const RentCategoryRequestSchema = z.object({
  CategoryName: z.string(),
  IsActive: z.boolean(), // IsActive should be a boolean
});
