import { z } from 'zod';

import { pageFeedAssetServiceGetJobStatusValue } from './PageFeedAssetServiceGetJobStatusValue';

export const pageFeedAssetServiceGetJobStatusPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(pageFeedAssetServiceGetJobStatusValue).nullable()
}).nullable();

export type PageFeedAssetServiceGetJobStatusPage = z.infer<typeof pageFeedAssetServiceGetJobStatusPage>;
