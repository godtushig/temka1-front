import { z } from "zod";

export const Project = z.object({
  BannerImageUrl: z.string().url(),
  Body: z.string(),
  CoverImageUrl: z.string().url(),
  CreatedAt: z.string().datetime(), // Assuming ISO string date format
  CreatedBy: z.number().int(),
  Description: z.string(),
  IsActive: z.boolean(),
  LangCode: z.string().min(2).max(2), // Assuming language code is ISO 639-1 (e.g., "mn", "en")
  ModifiedAt: z.string().datetime(), // Assuming ISO string date format
  ModifiedBy: z.number().int(),
  Name: z.string(),
  ProjectId: z.number().int(),
  ProjectId_2: z.number().int(),
});

export const ProjectResponse = z.object({
  Data: z.array(Project),
  RowCount: z.number().int(),
});

export type Project = z.infer<typeof Project>;

export const ProjectDetail = z.object({
  BannerImageUrl: z.string().url(),
  CoverImageUrl: z.string().url(),
  CreatedAt: z.string().datetime(), // ISO string date format
  CreatedBy: z.number().int(),
  IsActive: z.boolean(),
  ModifiedAt: z.string().datetime(), // ISO string date format
  ModifiedBy: z.number().int(),
  ProjectId: z.number().int(),
  ProjectContents: z.array(
    z.object({
      ProjectId: z.number().int(),
      LangCode: z.string().min(2).max(2), // ISO 639-1 language code
      Name: z.string(),
      Description: z.string(),
      Body: z.string(),
    })
  ),
  ProjectImages: z
    .array(
      z.object({
        ImageId: z.number().int(),
        ProjectId: z.number().int(),
        ImageUrl: z.string().url(),
        ImageType: z.string(),
      })
    )
    .nullable(),
});

export type ProjectDetail = z.infer<typeof ProjectDetail>;

export const CustomersMetrics = z.object({
  total: z.number(),
  active: z.number(),
  banned: z.number(),
  archived: z.number(),
});

export type CustomersMetrics = z.infer<typeof CustomersMetrics>;
