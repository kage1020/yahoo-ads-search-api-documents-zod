import { z } from 'zod';

import { pageFeedAssetServiceReturnValue } from './PageFeedAssetServiceReturnValue';

export const pageFeedAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(pageFeedAssetServiceReturnValue).nullable()
}).nullable();

export type PageFeedAssetServicePage = z.infer<typeof pageFeedAssetServicePage>;
