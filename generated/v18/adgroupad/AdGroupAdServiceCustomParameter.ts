import { z } from 'zod';

export const AdGroupAdServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AdGroupAdServiceCustomParameter = z.infer<typeof AdGroupAdServiceCustomParameter>;
