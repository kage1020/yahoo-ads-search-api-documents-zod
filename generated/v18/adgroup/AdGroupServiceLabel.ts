import { z } from 'zod';

export const adGroupServiceLabel = z.object({
  color: z.string().nullable(),
  description: z.string().nullable(),
  labelId: z.number().int().nullable(),
  labelName: z.string().nullable()
}).nullable();

export type AdGroupServiceLabel = z.infer<typeof adGroupServiceLabel>;
