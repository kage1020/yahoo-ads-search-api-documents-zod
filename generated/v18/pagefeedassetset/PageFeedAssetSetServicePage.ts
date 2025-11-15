import { z } from 'zod';

import { pageFeedAssetSetServiceValue } from './PageFeedAssetSetServiceValue';

export const pageFeedAssetSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(pageFeedAssetSetServiceValue).nullable()
}).nullable();

export type PageFeedAssetSetServicePage = z.infer<typeof pageFeedAssetSetServicePage>;
