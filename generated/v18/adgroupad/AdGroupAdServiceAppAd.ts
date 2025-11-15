import { z } from 'zod';

import { adGroupAdServiceAppStore } from './AdGroupAdServiceAppStore';

export const adGroupAdServiceAppAd = z.object({
  appId: z.string().nullable(),
  appStore: adGroupAdServiceAppStore,
  headline: z.string().nullable(),
  description: z.string().nullable(),
  description2: z.string().nullable()
}).nullable();

export type AdGroupAdServiceAppAd = z.infer<typeof adGroupAdServiceAppAd>;
