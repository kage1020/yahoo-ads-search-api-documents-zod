import { z } from 'zod';

export const AdGroupAdServiceExtendedTextAd = z.object({
  headline: z.string().nullable(),
  headline2: z.string().nullable(),
  headline3: z.string().nullable(),
  description: z.string().nullable(),
  description2: z.string().nullable(),
  path1: z.string().nullable(),
  path2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceExtendedTextAd = z.infer<typeof AdGroupAdServiceExtendedTextAd>;
