import { z } from 'zod';

export const AdGroupServiceCustomParameter = z.object({
  key: z.string().nullable(),
  value: z.string().nullable()
}).nullable();

export type AdGroupServiceCustomParameter = z.infer<typeof AdGroupServiceCustomParameter>;
