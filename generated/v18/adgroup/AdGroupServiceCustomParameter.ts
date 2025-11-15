import { z } from 'zod';

export const adGroupServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AdGroupServiceCustomParameter = z.infer<typeof adGroupServiceCustomParameter>;
