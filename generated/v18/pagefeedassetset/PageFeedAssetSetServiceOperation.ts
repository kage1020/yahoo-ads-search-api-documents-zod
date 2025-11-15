import { z } from 'zod';

import { pageFeedAssetSet } from './PageFeedAssetSet';

export const pageFeedAssetSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(pageFeedAssetSet).nullable()
}).nullable();

export type PageFeedAssetSetServiceOperation = z.infer<typeof pageFeedAssetSetServiceOperation>;
