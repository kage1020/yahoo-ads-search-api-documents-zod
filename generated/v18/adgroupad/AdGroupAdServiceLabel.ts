import { z } from 'zod';

export const adGroupAdServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type AdGroupAdServiceLabel = z.infer<typeof adGroupAdServiceLabel>;
