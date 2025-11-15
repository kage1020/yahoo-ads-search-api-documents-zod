import { z } from 'zod';

import { pageFeedAssetServiceUploadValue } from './PageFeedAssetServiceUploadValue';

export const pageFeedAssetServiceUploadReturnValue = z.object({
  values: z.array(pageFeedAssetServiceUploadValue).nullable()
}).nullable();

export type PageFeedAssetServiceUploadReturnValue = z.infer<typeof pageFeedAssetServiceUploadReturnValue>;
