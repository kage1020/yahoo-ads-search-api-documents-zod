import { z } from 'zod';

import { error } from '../../common/Error';
import { pageFeedAssetServiceAddDownloadJobReturnValue } from './PageFeedAssetServiceAddDownloadJobReturnValue';

export const pageFeedAssetServiceAddDownloadJobResponse = z.object({
  errors: z.array(error).nullable(),
  rid: z.string(),
  rval: pageFeedAssetServiceAddDownloadJobReturnValue
}).nullable();

export type PageFeedAssetServiceAddDownloadJobResponse = z.infer<typeof pageFeedAssetServiceAddDownloadJobResponse>;
