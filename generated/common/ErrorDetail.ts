import { z } from 'zod';

export const ErrorDetail = z.object({
  requestKey: z.string().nullable(),
  requestValue: z.string().nullable()
}).nullable();

export type ErrorDetail = z.infer<typeof ErrorDetail>;
