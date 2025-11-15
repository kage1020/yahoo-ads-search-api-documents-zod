import { z } from 'zod';

import { PageFeedAssetServiceReturnValue } from './PageFeedAssetServiceReturnValue';

export const PageFeedAssetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PageFeedAssetServiceReturnValue).nullable()
}).nullable();

export type PageFeedAssetServicePage = z.infer<typeof PageFeedAssetServicePage>;
