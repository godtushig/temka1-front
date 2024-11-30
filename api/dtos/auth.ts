import { z } from 'zod';

export const LoginRequestSchema = z.object({
  UserName: z.string(),
  Password: z.string(),
});

export const LoginResponseSchema = z.object({
  JWT: z.string(),
});
