import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetServiceAddDownloadJobReturnValue } from './PageFeedAssetServiceAddDownloadJobReturnValue';

export const PageFeedAssetServiceAddDownloadJobResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetServiceAddDownloadJobReturnValue
}).nullable();

export type PageFeedAssetServiceAddDownloadJobResponse = z.infer<typeof PageFeedAssetServiceAddDownloadJobResponse>;
