import { z } from 'zod';

import { AdGroupAdServiceAppStore } from './AdGroupAdServiceAppStore';

export const AdGroupAdServiceAppAd = z.object({
  appId: z.string().nullable(),
  appStore: AdGroupAdServiceAppStore,
  headline: z.string().nullable(),
  description: z.string().nullable(),
  description2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceAppAd = z.infer<typeof AdGroupAdServiceAppAd>;
