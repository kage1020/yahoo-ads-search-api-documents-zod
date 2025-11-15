import { z } from 'zod';

import { PageFeedAssetSet } from './PageFeedAssetSet';

export const PageFeedAssetSetServiceOperation = z.object({
  accountId: z.number().int(),
  operand: z.array(PageFeedAssetSet).nullable()
}).nullable();

export type PageFeedAssetSetServiceOperation = z.infer<typeof PageFeedAssetSetServiceOperation>;
