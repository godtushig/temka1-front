import { z } from "zod";
import { LanguageEnum } from "./common";

export const Team = z.object({
  TeamId: z.number().int(),
  Name: z.string(),
  IsActive: z.boolean(),
  CreatedBy: z.number().int(),
  CreatedAt: z.string().datetime(),
  ModifiedBy: z.number().int(),
  ModifiedAt: z.string().datetime(),
});

export type Team = z.infer<typeof Team>;

export const TeamDetail = z.object({
  label: Team,
  labelContents: z.array(
    z.object({
      LabelId: z.number().int(),
      LangCode: LanguageEnum,
      Title: z.string(),
      Description: z.string().optional(),
    })
  ),
});

export type TeamDetail = z.infer<typeof TeamDetail>;

export const TeamMember = z.object({
  CreatedAt: z.string().datetime(), // CreatedAt should be a valid datetime string
  CreatedBy: z.number().int(), // CreatedBy should be an integer
  Description: z.string(), // Description should be a string
  ImageUrl: z.string().url(), // ImageUrl should be a valid URL
  IsActive: z.boolean(), // IsActive should be a boolean
  LangCode: z.string().length(2), // LangCode should be a 2-letter string (e.g., 'mn')
  MemberId: z.number().int(), // MemberId should be an integer
  MemberId_2: z.number().int(), // MemberId_2 should be an integer
  ModifiedAt: z.string().datetime(), // ModifiedAt should be a valid datetime string
  ModifiedBy: z.number().int(), // ModifiedBy should be an integer
  Name: z.string(), // Name should be a string
  Role: z.string(), // Role should be a string
  TeamId: z.number().int(), // TeamId should be an integer
  TeamName: z.string(), // TeamName should be a string
});

export type TeamMember = z.infer<typeof TeamMember>;
export const TeamMemberWithTeam = z.object({
  Members: z.array(
    z.object({
      ImageUrl: z.string().url(),
      MemberId: z.number().int(),
      MemberName: z.string().optional(),
    })
  ),
  Name: z.string(),
  TeamId: z.number().int(),
});

export type TeamMemberWithTeam = z.infer<typeof TeamMemberWithTeam>;

const memberContentSchema = z.object({
  MemberId: z.number().int(), // MemberId should be an integer
  LangCode: LanguageEnum, // LangCode should be a 2-letter string (e.g., 'en', 'mn')
  Name: z.string(), // Name should be a string
  Role: z.string(), // Role should be a string
  Description: z.string(), // Description should be a string
});

export const TeamMemberDetail = z.object({
  CreatedAt: z.string().datetime(),
  CreatedBy: z.number().int(),
  Description: z.string(),
  ImageUrl: z.string().url(),
  IsActive: z.boolean(),
  LangCode: LanguageEnum,
  MemberId: z.number().int(),
  MemberId_2: z.number().int(),
  ModifiedAt: z.string().datetime(),
  ModifiedBy: z.number().int(),
  Name: z.string(),
  Role: z.string(),
  TeamId: z.number().int(),
});

export type TeamMemberDetail = z.infer<typeof TeamMemberDetail>;
