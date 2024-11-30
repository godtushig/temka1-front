import { z } from "zod";
import { LanguageEnum } from "./common";

export const News = z.object({
  BannerImageUrl: z.string().url(),
  CreatedAt: z.string().datetime(), // Assuming ISO string date format
  CreatedBy: z.number().int(),
  Description: z.string(),
  IsActive: z.boolean(),
  LangCode: z.string().min(2).max(2), // Assuming language code is ISO 639-1 (e.g., "mn", "en")
  ModifiedAt: z.string().datetime(), // Assuming ISO string date format
  ModifiedBy: z.number().int(),
  Title: z.string(),
  NewsId: z.number().int(),
  NewsId_2: z.number().int(),
});

export const NewsResponse = z.object({
  Data: z.array(News),
  RowCount: z.number().int(),
});

export type News = z.infer<typeof News>;

export const NewsDetail = z.object({
  BannerImageUrl: z.string().url(),
  CreatedAt: z.string().datetime(), // ISO string date format
  CreatedBy: z.number().int(),
  IsActive: z.boolean(),
  ModifiedAt: z.string().datetime(), // ISO string date format
  ModifiedBy: z.number().int(),
  NewsId: z.number().int(),
  NewsContents: z.array(
    z.object({
      NewsId: z.number().int(),
      LangCode: LanguageEnum, // ISO 639-1 language code
      Title: z.string(),
      Description: z.string(),
    })
  ),
  NewsImages: z
    .array(
      z.object({
        ImageId: z.number().int(),
        NewsId: z.number().int(),
        ImageUrl: z.string().url(),
        ImageType: z.string(),
      })
    )
    .nullable(),
});

export type NewsDetail = z.infer<typeof NewsDetail>;
