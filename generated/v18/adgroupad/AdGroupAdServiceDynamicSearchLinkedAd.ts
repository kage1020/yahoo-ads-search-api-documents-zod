import { z } from 'zod';

export const adGroupAdServiceDynamicSearchLinkedAd = z.object({
  description: z.string().nullable(),
  description2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceDynamicSearchLinkedAd = z.infer<typeof adGroupAdServiceDynamicSearchLinkedAd>;
