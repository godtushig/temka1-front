import { z } from "zod";

const collaboratorContentSchema = z.object({
  CollaboratorId: z.number(),
  LangCode: z.string(),
  Title: z.string(),
  Description: z.string(),
});

export const Collaborator = z.object({
  BannerImageUrl: z.string().url(),
  CollaboratorId: z.number(),
  CollaboratorId_2: z.number().optional(), // New field
  CoverImageUrl: z.string().url(),
  CreatedAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  CreatedBy: z.number().optional(),
  Description: z.string().optional(),
  IsActive: z.boolean(),
  LangCode: z.string().optional(),
  ModifiedAt: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    })
    .optional(),
  ModifiedBy: z.number(),
  Name: z.string(),
  OrderNo: z.number(),
  Title: z.string().optional(),
  CollaboratorContents: z.array(collaboratorContentSchema).optional(),
});
export type Collaborator = z.infer<typeof Collaborator>;

// export const ProjectDetail = z.object({
//     BannerImageUrl: z.string().url(),
//     CoverImageUrl: z.string().url(),
//     CreatedAt: z.string().datetime(), // ISO string date format
//     CreatedBy: z.number().int(),
//     IsActive: z.boolean(),
//     ModifiedAt: z.string().datetime(), // ISO string date format
//     ModifiedBy: z.number().int(),
//     ProjectId: z.number().int(),
//     ProjectContents: z.array(
//         z.object({
//             ProjectId: z.number().int(),
//             LangCode: z.string().min(2).max(2), // ISO 639-1 language code
//             Name: z.string(),
//             Description: z.string(),
//             Body: z.string(),
//         })
//     ),
//     ProjectImages: z.array(
//         z.object({
//             ImageId: z.number().int(),
//             ProjectId: z.number().int(),
//             ImageUrl: z.string().url(),
//             ImageType: z.string(),
//         })
//     ).nullable(),
// });

// export type ProjectDetail = z.infer<typeof ProjectDetail>;

// export const CustomersMetrics = z.object({
//     total: z.number(),
//     active: z.number(),
//     banned: z.number(),
//     archived: z.number(),
// });

// export type CustomersMetrics = z.infer<typeof CustomersMetrics>;
