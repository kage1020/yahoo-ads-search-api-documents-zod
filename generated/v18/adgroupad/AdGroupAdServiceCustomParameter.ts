import { z } from 'zod';

export const adGroupAdServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AdGroupAdServiceCustomParameter = z.infer<typeof adGroupAdServiceCustomParameter>;
