import { z } from 'zod';

export const AdGroupAdServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type AdGroupAdServiceLabel = z.infer<typeof AdGroupAdServiceLabel>;
