import { z } from 'zod';

import { PageFeedAssetSetServiceValue } from './PageFeedAssetSetServiceValue';

export const PageFeedAssetSetServicePage = z.object({
  totalNumEntries: z.number().int(),
  values: z.array(PageFeedAssetSetServiceValue).nullable()
}).nullable();

export type PageFeedAssetSetServicePage = z.infer<typeof PageFeedAssetSetServicePage>;
