import { z } from "zod";
import { LanguageEnum } from "../entities";

export const TeamRequestSchema = z.object({
  Name: z.string().min(1, "Name is required"),
  IsActive: z.boolean(),
});

export const TeamPutRequestSchema = z.object({
  Name: z.string(),
  TeamId: z.number().int(),
  IsActive: z.boolean(),
});

const translationDataSchema = z.object({
  LangCode: LanguageEnum, // LangCode should be a 2-letter string (e.g., 'en', 'mn')
  Name: z.string(), // Name should be a string
  Role: z.string(), // Role should be a string
  Description: z.string(), // Description should be a string
});

export const TeamMemberRequestSchema = z.object({
  TeamId: z.number().int(), // TeamId should be an integer
  ImageByte: z.string(), // ImageByte should be a string (base64 encoded)
  IsActive: z.boolean(), // IsActive should be a boolean
  TranslationData: z.array(translationDataSchema), // TranslationData should be an array of objects that follow translationDataSchema
});

export const TeamMemberPutRequestSchema = z.object({
  MemberId: z.number().int(), // MemberId should be an integer
  TeamId: z.number().int(), // TeamId should be an integer
  ImageByte: z.string(), // ImageByte should be a string (base64 encoded)
  IsActive: z.boolean(), // IsActive should be a boolean
  TranslationData: z.array(translationDataSchema), // TranslationData should be an array of objects that follow translationDataSchema
});
