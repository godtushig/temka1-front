import { z } from "zod";
import { LanguageEnum } from "../entities";

export const NewsRequestSchema = z.object({
  IsActive: z.boolean(),
  BannerImageByte: z.string().optional(), // Base64-encoded string
  OtherImageBytes: z.array(z.string()).optional(), // Array of base64-encoded strings
  TranslationData: z
    .array(
      z.object({
        LangCode: LanguageEnum, // Enum for language codes
        Title: z.string().min(1, "Title is required"), // Required string for News name
        Description: z.string().optional(), // Optional string for description
      })
    )
    .min(1, "At least one translation entry is required"), // Array of translation data
});

export const NewsPutRequestSchema = z.object({
  NewsId: z.number().int(),
  IsActive: z.boolean(),
  BannerImageByte: z.string().optional(), // Base64-encoded string
  OtherImageBytes: z.array(z.string()).optional(), // Array of base64-encoded strings
  TranslationData: z
    .array(
      z.object({
        LangCode: LanguageEnum, // Enum for language codes
        Title: z.string().min(1, "Title is required"), // Required string for News name
        Description: z.string().optional(), // Optional string for description
      })
    )
    .min(1, "At least one translation entry is required"), // Array of translation data
  DeleteImageIds: z.array(z.number().int()).optional(), // Array of image IDs to delete
});

export const NewsResponseSchema = z.any();
