import { z } from 'zod';

import { pageFeedAssetSetServiceValue } from './PageFeedAssetSetServiceValue';

export const pageFeedAssetSetServiceReturnValue = z.object({
  values: z.array(pageFeedAssetSetServiceValue).nullable()
}).nullable();

export type PageFeedAssetSetServiceReturnValue = z.infer<typeof pageFeedAssetSetServiceReturnValue>;
