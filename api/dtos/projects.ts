import { z } from 'zod';
import { LanguageEnum } from '../entities';

export const ProjectRequestSchema = z.object({
    IsActive: z.boolean(),
    CoverImageByte: z.string().optional(),  // Base64-encoded string
    BannerImageByte: z.string().optional(),  // Base64-encoded string
    OtherImageBytes: z.array(z.string()).optional(),  // Array of base64-encoded strings
    TranslationData: z.array(
        z.object({
            LangCode: LanguageEnum,  // Enum for language codes
            Name: z.string().min(1, "Name is required"),  // Required string for project name
            Description: z.string().optional(),  // Optional string for description
            Body: z.string().optional(),  // Optional string for body content
        })
    ).min(1, "At least one translation entry is required"),  // Array of translation data
});

export const ProjectPutRequestSchema = z.object({
    ProjectId: z.number().int(),
    IsActive: z.boolean(),
    CoverImageByte: z.string().optional(),  // Base64-encoded string
    BannerImageByte: z.string().optional(),  // Base64-encoded string
    OtherImageBytes: z.array(z.string()).optional(),  // Array of base64-encoded strings
    TranslationData: z.array(
        z.object({
            LangCode: LanguageEnum,  // Enum for language codes
            Name: z.string().min(1, "Name is required"),  // Required string for project name
            Description: z.string().optional(),  // Optional string for description
            Body: z.string().optional(),  // Optional string for body content
        })
    ).min(1, "At least one translation entry is required"),  // Array of translation data
    DeleteImageIds: z.array(z.number().int()).optional(),  // Array of image IDs to delete
});

export const ProjectResponseSchema = z.any()
