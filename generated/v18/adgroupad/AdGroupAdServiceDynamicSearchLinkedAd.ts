import { z } from 'zod';

export const AdGroupAdServiceDynamicSearchLinkedAd = z.object({
  description: z.string().nullable(),
  description2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceDynamicSearchLinkedAd = z.infer<typeof AdGroupAdServiceDynamicSearchLinkedAd>;
