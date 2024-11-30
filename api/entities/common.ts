import { z } from "zod";

export const Persona = z.object({
  id: z.string().cuid2(),
  displayName: z.string(),
  avatarUrl: z.string().url().nullable(),
});

export const LanguageEnum = z.enum(["en", "mn"]);

export type LanguageEnumValues = z.infer<typeof LanguageEnum>;

export type Persona = z.infer<typeof Persona>;

export const ContactRequest = z.object({
  RequestId: z.number().int(),
  Name: z.string(),
  Email: z.string(),
  Message: z.string().optional(),
  CreatedAt: z.string().datetime(),
});

export const ContactInfoSchema = z.object({
  ContactInfoId: z.number().int(),
  WorkingHours: z.string(),
  Address: z.string(),
  Phone: z.string(),
  Email: z.string(),
  AboutUs: z.string(),
  CreatedBy: z.number().int().optional(),
  CreatedAt: z.string().datetime().optional(),
  ModifiedBy: z.number().int().optional(),
  ModifiedAt: z.string().datetime().optional(),
});

export type ContactInfo = z.infer<typeof ContactInfoSchema>;

export type ContactRequest = z.infer<typeof ContactRequest>;
