import { z } from 'zod';

import { PageFeedAssetServiceUploadValue } from './PageFeedAssetServiceUploadValue';

export const PageFeedAssetServiceUploadReturnValue = z.object({
  values: z.array(PageFeedAssetServiceUploadValue).nullable()
}).nullable();

export type PageFeedAssetServiceUploadReturnValue = z.infer<typeof PageFeedAssetServiceUploadReturnValue>;
