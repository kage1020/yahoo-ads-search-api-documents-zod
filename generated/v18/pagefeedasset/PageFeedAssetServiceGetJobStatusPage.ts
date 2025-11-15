import { z } from 'zod';

import { PageFeedAssetServiceGetJobStatusValue } from './PageFeedAssetServiceGetJobStatusValue';

export const PageFeedAssetServiceGetJobStatusPage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PageFeedAssetServiceGetJobStatusValue).nullable()
}).nullable();

export type PageFeedAssetServiceGetJobStatusPage = z.infer<typeof PageFeedAssetServiceGetJobStatusPage>;
