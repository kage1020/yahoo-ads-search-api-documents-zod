import { z } from 'zod';

import { PageFeedAssetSetServiceValue } from './PageFeedAssetSetServiceValue';

export const PageFeedAssetSetServiceReturnValue = z.object({
  values: z.array(PageFeedAssetSetServiceValue).nullable()
}).nullable();

export type PageFeedAssetSetServiceReturnValue = z.infer<typeof PageFeedAssetSetServiceReturnValue>;
