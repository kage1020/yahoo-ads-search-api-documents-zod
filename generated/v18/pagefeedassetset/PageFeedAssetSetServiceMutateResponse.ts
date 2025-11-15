import { z } from 'zod';

import { Error } from './Error';
import { PageFeedAssetSetServiceReturnValue } from './PageFeedAssetSetServiceReturnValue';

export const PageFeedAssetSetServiceMutateResponse = z.object({
  errors: z.array(Error).nullable(),
  rid: z.string(),
  rval: PageFeedAssetSetServiceReturnValue
}).nullable();

export type PageFeedAssetSetServiceMutateResponse = z.infer<typeof PageFeedAssetSetServiceMutateResponse>;
