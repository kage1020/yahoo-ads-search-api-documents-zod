import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceUploadReturnValue } from './PageFeedAssetServiceUploadReturnValue';

export const pageFeedAssetServiceUploadResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetServiceUploadReturnValue
}).nullable();

export type PageFeedAssetServiceUploadResponse = z.infer<typeof pageFeedAssetServiceUploadResponse>;
