import { z } from 'zod';

export const adGroupAdServiceTextAd2 = z.object({
  headline: z.string().nullable(),
  description: z.string().nullable(),
  description2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceTextAd2 = z.infer<typeof adGroupAdServiceTextAd2>;
