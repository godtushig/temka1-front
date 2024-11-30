import { z } from "zod";
import { LanguageEnum } from "./common";

export const Rent = z.object({
  CategoryId: z.number().int(),
  CreatedAt: z.string().datetime(),
  CreatedBy: z.number().int(),
  Description: z.string(),
  ImageUrl: z.string().url(),
  IsActive: z.boolean(),
  ItemId: z.number().int(),
  ItemId_2: z.number().int(),
  LangCode: LanguageEnum,
  ModifiedAt: z.string().datetime(),
  ModifiedBy: z.number().int(),
  Title: z.string(),
});

export type Rent = z.infer<typeof Rent>;

const rentItemContentSchema = z.object({
  ItemId: z.number().int(), // ItemId should be an integer
  LangCode: z.string().length(2), // LangCode should be a 2-letter string (e.g., 'en')
  Title: z.string(), // Title should be a string
  Description: z.string(), // Description should be a string
});

export const RentDetail = z.object({
  CategoryId: z.number().int(), // CategoryId should be an integer
  CreatedAt: z.string().datetime(), // CreatedAt should be a valid datetime string
  CreatedBy: z.number().int(), // CreatedBy should be an integer
  ImageUrl: z.string(), // ImageUrl should be a valid URL
  IsActive: z.boolean(), // IsActive should be a boolean
  ItemId: z.number().int(), // ItemId should be an integer
  ModifiedAt: z.string().datetime(), // ModifiedAt should be a valid datetime string
  ModifiedBy: z.number().int(), // ModifiedBy should be an integer
  RentItemContents: z.array(rentItemContentSchema), // RentItemContents is an array of objects matching rentItemContentSchema
});

export type RentDetail = z.infer<typeof RentDetail>;

export const RentCategory = z.object({
  CategoryId: z.number().int(), // CategoryId should be an integer
  CategoryName: z.string(), // CategoryName should be a string
  IsActive: z.boolean(), // IsActive should be a boolean
  CreatedBy: z.number().int(), // CreatedBy should be an integer
  CreatedAt: z.string().datetime(), // CreatedAt should be a valid datetime string
  ModifiedBy: z.number().int(), // ModifiedBy should be an integer
  ModifiedAt: z.string().datetime(), // ModifiedAt should be a valid datetime string
});

export type RentCategory = z.infer<typeof RentCategory>;

// 75099955;
